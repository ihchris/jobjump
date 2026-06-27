-- Community posts
create table if not exists public.community_posts (
  id           uuid default gen_random_uuid() primary key,
  user_id      text not null,
  user_name    text not null,
  category     text not null default 'geral'
               check (category in ('vitoria','dica','duvida','desafio','geral')),
  content      text not null check (char_length(content) between 10 and 1000),
  likes_count  integer not null default 0,
  comments_count integer not null default 0,
  created_at   timestamptz not null default now()
);

-- Community comments
create table if not exists public.community_comments (
  id        uuid default gen_random_uuid() primary key,
  post_id   uuid not null references public.community_posts(id) on delete cascade,
  user_id   text not null,
  user_name text not null,
  content   text not null check (char_length(content) between 2 and 500),
  created_at timestamptz not null default now()
);

-- Community likes (prevents double-likes)
create table if not exists public.community_likes (
  post_id    uuid not null references public.community_posts(id) on delete cascade,
  user_id    text not null,
  created_at timestamptz not null default now(),
  primary key (post_id, user_id)
);

-- Indexes
create index if not exists idx_community_posts_created_at on public.community_posts(created_at desc);
create index if not exists idx_community_posts_category   on public.community_posts(category);
create index if not exists idx_community_comments_post_id on public.community_comments(post_id);
create index if not exists idx_community_likes_user_id    on public.community_likes(user_id);

-- RLS
alter table public.community_posts    enable row level security;
alter table public.community_comments enable row level security;
alter table public.community_likes    enable row level security;

-- Everyone (including anon) can read
create policy "community_posts_read"    on public.community_posts    for select using (true);
create policy "community_comments_read" on public.community_comments for select using (true);
create policy "community_likes_read"    on public.community_likes    for select using (true);

-- Authenticated users can write
create policy "community_posts_insert"    on public.community_posts    for insert with check (true);
create policy "community_posts_update"    on public.community_posts    for update using (true);
create policy "community_posts_delete"    on public.community_posts    for delete using (user_id = auth.uid()::text);
create policy "community_comments_insert" on public.community_comments for insert with check (true);
create policy "community_likes_all"       on public.community_likes    for all   using (true) with check (true);

-- Enable realtime (run in Supabase dashboard: Realtime > community_posts)
-- alter publication supabase_realtime add table public.community_posts;
