-- Colunas extras para perfil público rico
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS avatar_url   text    DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS job_title    text    DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS location     text    DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS linkedin_url text    DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS skills       text[]  DEFAULT '{}';

-- Nota: bucket 'avatars' deve ser criado manualmente no Supabase Dashboard
-- (Storage → New bucket → "avatars" → Public).
-- RLS policies necessárias:
--   SELECT: authed → true
--   INSERT: auth.uid()::text = (storage.foldername(name))[1]
--   UPDATE: auth.uid()::text = (storage.foldername(name))[1]
