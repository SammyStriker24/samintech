CREATE TABLE public.contact_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 254),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 5000),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_submissions_created_at_idx ON public.contact_submissions (created_at DESC);
CREATE TABLE public.contact_rate_limits (
 fingerprint text PRIMARY KEY,
 window_start timestamptz NOT NULL DEFAULT now(),
 attempts integer NOT NULL DEFAULT 1
);
GRANT ALL ON public.contact_rate_limits TO service_role;
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.check_contact_rate_limit(p_fingerprint text) RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE attempt_count integer;
BEGIN
 INSERT INTO public.contact_rate_limits (fingerprint, window_start, attempts) VALUES (p_fingerprint, now(), 1)
 ON CONFLICT (fingerprint) DO UPDATE SET
 attempts = CASE WHEN contact_rate_limits.window_start < now() - interval '15 minutes' THEN 1 ELSE contact_rate_limits.attempts + 1 END,
 window_start = CASE WHEN contact_rate_limits.window_start < now() - interval '15 minutes' THEN now() ELSE contact_rate_limits.window_start END
 RETURNING attempts INTO attempt_count;
 RETURN attempt_count <= 5;
END;
$$;
REVOKE ALL ON FUNCTION public.check_contact_rate_limit(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.check_contact_rate_limit(text) TO service_role;