import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const reply = (body: object, status = 200) => Response.json(body, { status, headers: cors });

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: cors });
  if (request.method !== "POST") return reply({ error: "Method not allowed" }, 405);
  try {
    const raw = await request.text();
    if (raw.length > 12000) return reply({ error: "Message is too long." }, 400);
    const body = JSON.parse(raw);
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (name.length < 2 || name.length > 100 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 || message.length > 5000 || body.website) return reply({ error: "Please check your name, email, and message." }, 400);
    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) return reply({ error: "Contact service unavailable." }, 503);
    const client = createClient(url, key);
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
    const fingerprint = Array.from(new Uint8Array(hash), (n) => n.toString(16).padStart(2, "0")).join("");
    const { data: allowed, error: rateError } = await client.rpc("check_contact_rate_limit", { p_fingerprint: fingerprint });
    if (rateError) return reply({ error: "Contact service unavailable." }, 503);
    if (!allowed) return reply({ error: "Too many messages. Please try again in 15 minutes." }, 429);
    const { data, error } = await client.from("contact_submissions").insert({ name, email, message }).select("id").single();
    if (error) return reply({ error: "Your message could not be saved. Please try again." }, 500);
    return reply({ id: data.id });
  } catch { return reply({ error: "Please check your message and try again." }, 400); }
});