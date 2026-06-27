-- Tabela de perfis (estende auth.users com dados do negócio)
create table public.profiles (
  id            uuid references auth.users(id) on delete cascade primary key,
  name          text not null default '',
  plan          text not null default 'free' check (plan in ('free', 'pro')),
  stripe_customer_id text,
  created_at    timestamptz default now()
);

-- RLS: cada utilizador só acede ao seu próprio perfil
alter table public.profiles enable row level security;

create policy "profiles: leitura própria"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles: atualização própria"
  on public.profiles for update
  using (auth.uid() = id)
  with check (
    -- utilizadores não podem alterar o próprio plano nem o stripe_customer_id
    plan = (select plan from public.profiles where id = auth.uid())
    and stripe_customer_id is not distinct from (select stripe_customer_id from public.profiles where id = auth.uid())
  );

-- Trigger: cria perfil automaticamente quando um utilizador se regista
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', ''));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Tabela de uso do Coach (para limite do plano grátis)
create table public.coach_usage (
  user_id  uuid references auth.users(id) on delete cascade,
  date     date not null default current_date,
  count    integer not null default 0,
  primary key (user_id, date)
);

alter table public.coach_usage enable row level security;

create policy "coach_usage: leitura própria"
  on public.coach_usage for select
  using (auth.uid() = user_id);

-- A contagem é incrementada apenas pelo service role (Edge Function)
-- utilizadores não têm permissão de escrita direta
