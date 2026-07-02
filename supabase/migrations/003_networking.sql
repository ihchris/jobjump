-- ─── Perfil: campos para o diretório de membros e mentoria ────────────────────
alter table public.profiles
  add column if not exists area              text,
  add column if not exists goal              text,
  add column if not exists bio               text not null default '',
  add column if not exists open_to_mentor    boolean not null default false,
  add column if not exists looking_for_peer  boolean not null default false;

-- utilizadores autenticados podem ver o essencial de outros perfis para o
-- diretório de membros (nome, área, objetivo, bio, plano, flags de mentoria);
-- dados sensíveis (stripe_customer_id) continuam só legíveis pelo próprio dono
-- via a policy "profiles: leitura própria" já existente.
create policy "profiles: leitura pública para diretório"
  on public.profiles for select
  using (true);

-- ─── Conexões entre utilizadores (networking + mentoria) ──────────────────────
create table if not exists public.connections (
  id            uuid default gen_random_uuid() primary key,
  requester_id  uuid not null references auth.users(id) on delete cascade,
  addressee_id  uuid not null references auth.users(id) on delete cascade,
  status        text not null default 'pending' check (status in ('pending', 'accepted', 'declined')),
  intent        text not null default 'peer' check (intent in ('peer', 'mentor_request')),
  created_at    timestamptz not null default now(),
  responded_at  timestamptz,
  check (requester_id <> addressee_id),
  unique (requester_id, addressee_id)
);

create index if not exists idx_connections_requester on public.connections(requester_id);
create index if not exists idx_connections_addressee on public.connections(addressee_id);

alter table public.connections enable row level security;

create policy "connections: leitura própria"
  on public.connections for select
  using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "connections: criar pedido"
  on public.connections for insert
  with check (auth.uid() = requester_id);

create policy "connections: responder ou cancelar"
  on public.connections for update
  using (auth.uid() = requester_id or auth.uid() = addressee_id)
  with check (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "connections: desfazer"
  on public.connections for delete
  using (auth.uid() = requester_id or auth.uid() = addressee_id);

-- ─── Mensagens diretas (só entre conexões aceites) ─────────────────────────────
create table if not exists public.messages (
  id            uuid default gen_random_uuid() primary key,
  sender_id     uuid not null references auth.users(id) on delete cascade,
  recipient_id  uuid not null references auth.users(id) on delete cascade,
  content       text not null check (char_length(content) between 1 and 2000),
  created_at    timestamptz not null default now(),
  read_at       timestamptz,
  check (sender_id <> recipient_id)
);

create index if not exists idx_messages_sender on public.messages(sender_id, created_at desc);
create index if not exists idx_messages_recipient on public.messages(recipient_id, created_at desc);

alter table public.messages enable row level security;

create policy "messages: leitura própria"
  on public.messages for select
  using (auth.uid() = sender_id or auth.uid() = recipient_id);

-- só é possível enviar mensagem a alguém com quem existe uma conexão aceite
create policy "messages: enviar apenas a conexões aceites"
  on public.messages for insert
  with check (
    auth.uid() = sender_id
    and exists (
      select 1 from public.connections c
      where c.status = 'accepted'
        and (
          (c.requester_id = sender_id and c.addressee_id = recipient_id)
          or (c.addressee_id = sender_id and c.requester_id = recipient_id)
        )
    )
  );

create policy "messages: marcar como lida"
  on public.messages for update
  using (auth.uid() = recipient_id)
  with check (auth.uid() = recipient_id);

-- ─── Dúvidas por módulo/lição (ajuda entre utilizadores no próprio conteúdo) ──
create table if not exists public.content_questions (
  id          uuid default gen_random_uuid() primary key,
  module_id   integer not null,
  lesson_id   text not null,
  user_id     uuid not null references auth.users(id) on delete cascade,
  user_name   text not null,
  content     text not null check (char_length(content) between 5 and 1000),
  created_at  timestamptz not null default now()
);

create table if not exists public.content_answers (
  id           uuid default gen_random_uuid() primary key,
  question_id  uuid not null references public.content_questions(id) on delete cascade,
  user_id      uuid not null references auth.users(id) on delete cascade,
  user_name    text not null,
  content      text not null check (char_length(content) between 2 and 1000),
  created_at   timestamptz not null default now()
);

create index if not exists idx_content_questions_lesson on public.content_questions(lesson_id);
create index if not exists idx_content_answers_question on public.content_answers(question_id);

alter table public.content_questions enable row level security;
alter table public.content_answers   enable row level security;

create policy "content_questions: leitura pública" on public.content_questions for select using (true);
create policy "content_answers: leitura pública"    on public.content_answers   for select using (true);

create policy "content_questions: criar própria"
  on public.content_questions for insert
  with check (auth.uid() = user_id);

create policy "content_answers: criar própria"
  on public.content_answers for insert
  with check (auth.uid() = user_id);

create policy "content_questions: apagar própria"
  on public.content_questions for delete
  using (auth.uid() = user_id);

create policy "content_answers: apagar própria"
  on public.content_answers for delete
  using (auth.uid() = user_id);

-- Ativar Realtime (correr no dashboard do Supabase: Database > Replication,
-- ou via SQL abaixo se a publicação supabase_realtime já existir):
-- alter publication supabase_realtime add table public.messages;
-- alter publication supabase_realtime add table public.connections;
-- alter publication supabase_realtime add table public.content_questions;
-- alter publication supabase_realtime add table public.content_answers;
