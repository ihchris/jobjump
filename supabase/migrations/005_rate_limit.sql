-- Adiciona cooldown por pedido para prevenir abuso na Edge Function do Coach IA
ALTER TABLE public.coach_usage
  ADD COLUMN IF NOT EXISTS last_request_at timestamptz DEFAULT NULL;

-- Fix: permitir plano 'annual' na tabela profiles (caso não tenha sido aplicado ainda)
-- (idempotente — ignora se o constraint já existir com o nome correto)
DO $$
BEGIN
  ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_plan_check;
  ALTER TABLE public.profiles
    ADD CONSTRAINT profiles_plan_check CHECK (plan IN ('free', 'pro', 'annual'));
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
