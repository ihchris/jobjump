-- Permite que utilizadores tornem o seu perfil privado na comunidade
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS profile_private boolean NOT NULL DEFAULT false;
