import { Mail, MapPin, Phone, Send, Loader2, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
const SERVICE_ID = "service_0pm3gkb";
const TEMPLATE_ID = "template_09zcv7b";
const PUBLIC_KEY = "bpGJ0SYYpAYCiDXRS";
const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const savedId = useRef<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "saved">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const update = (field: keyof typeof form, value: string) => { savedId.current = null; setStatus("idle"); setForm(previous => ({ ...previous, [field]: value })); };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;
    setSending(true); setStatus("idle");
    try {
      if (!savedId.current) {
        const { data, error } = await supabase.functions.invoke("submit-contact", { body: { ...form, website: new FormData(formRef.current).get("website") } });
        if (error || !data?.id) throw new Error("Your message could not be saved. Please try again or email me directly.");
        savedId.current = data.id;
      }
      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
        setStatus("success"); setForm({ name: "", email: "", message: "" }); savedId.current = null;
      } catch { setStatus("saved"); }
    } catch (error) { setErrorMessage(error instanceof Error ? error.message : "Please try again."); setStatus("error"); }
    finally { setSending(false); }
  };
  return <section id="contact" className="section-space bg-card"><div className="container px-6 grid md:grid-cols-2 gap-12 lg:gap-24">
    <div><p className="eyebrow">05 / GET IN TOUCH</p><h2 className="section-title">Have something<br /><span className="text-primary">in mind?</span></h2><p className="text-muted-foreground leading-7 mt-6 mb-9 max-w-sm">A project, an opportunity, or a friendly hello — I’d love to hear from you.</p>
      <a href="mailto:saminmahmood233@gmail.com" className="flex items-center gap-3 text-sm mb-6 break-all"><Mail size={20} className="text-primary shrink-0" /> saminmahmood233@gmail.com <ArrowUpRight size={16} className="shrink-0" /></a>
      <a href="tel:+8801795328470" className="flex items-center gap-3 text-sm mb-6"><Phone size={20} className="text-primary" /> +880 1795-328470</a>
      <p className="flex items-center gap-3 text-sm"><MapPin size={20} className="text-primary" /> North Shahjahanpur, Dhaka, Bangladesh</p>
    </div>
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div><label htmlFor="contact-name" className="text-xs font-medium block mb-2">Your name</label><input id="contact-name" name="from_name" autoComplete="name" placeholder="Your name" value={form.name} onChange={e => update("name", e.target.value)} minLength={2} maxLength={100} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" required readOnly={sending} /></div>
      <div><label htmlFor="contact-email" className="text-xs font-medium block mb-2">Email address</label><input id="contact-email" type="email" name="from_email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={e => update("email", e.target.value)} maxLength={254} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" required readOnly={sending} /></div>
      <input type="hidden" name="reply_to" value={form.email} />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div><label htmlFor="contact-message" className="text-xs font-medium block mb-2">Your message</label><textarea id="contact-message" name="message" placeholder="Tell me what you have in mind…" rows={5} value={form.message} onChange={e => update("message", e.target.value)} minLength={10} maxLength={5000} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y" required readOnly={sending} /></div>
      <Button type="submit" disabled={sending} variant="secondary" size="lg" className="rounded-full">{sending ? <Loader2 className="animate-spin" /> : <Send />}{sending ? "Sending…" : status === "saved" ? "Retry email delivery" : "Send message"}</Button>
      <div aria-live="polite">{status === "success" && <p className="text-sm text-primary">Thank you — your message has been saved and sent!</p>}{status === "saved" && <p className="text-sm text-muted-foreground">Your message is saved, but email delivery failed. Retry or contact me directly.</p>}{status === "error" && <p role="alert" className="text-sm text-destructive">{errorMessage}</p>}</div>
    </form>
  </div></section>;
};
export default ContactSection;
