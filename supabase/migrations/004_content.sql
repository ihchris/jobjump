-- ─── Fix: allow 'annual' plan ─────────────────────────────────────────────────
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_plan_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_plan_check
  CHECK (plan IN ('free', 'pro', 'annual'));

-- ─── Modules (metadata only — no lesson content) ───────────────────────────────
CREATE TABLE IF NOT EXISTS public.modules (
  id           integer      PRIMARY KEY,
  title        text         NOT NULL,
  description  text         NOT NULL DEFAULT '',
  duration     text         NOT NULL DEFAULT '',
  icon         text         NOT NULL DEFAULT '',
  is_pro       boolean      NOT NULL DEFAULT false,
  has_quiz     boolean      NOT NULL DEFAULT false,
  color_config jsonb        NOT NULL DEFAULT '{}',
  sort_order   integer      NOT NULL DEFAULT 0,
  created_at   timestamptz  DEFAULT now()
);

-- ─── Lesson stubs (title + duration — no content) ─────────────────────────────
-- Visible to all authenticated users so the lesson list renders for everyone
-- (free users see locked lesson titles inside a Pro module)
-- is_pro: true when this individual lesson requires Pro even in a free module
CREATE TABLE IF NOT EXISTS public.lessons (
  id          text     PRIMARY KEY,          -- e.g. '1-1', '1-2'
  module_id   integer  NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
  title       text     NOT NULL,
  duration    text     NOT NULL DEFAULT '',
  is_pro      boolean  NOT NULL DEFAULT false,
  sort_order  integer  NOT NULL DEFAULT 0
);

-- ─── Lesson content — protected ───────────────────────────────────────────────
-- Separate from stubs so RLS can block content without hiding lesson titles
CREATE TABLE IF NOT EXISTS public.lesson_content (
  lesson_id  text  PRIMARY KEY REFERENCES public.lessons(id) ON DELETE CASCADE,
  content    text  NOT NULL DEFAULT ''
);

-- ─── Quiz questions — protected ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.quizzes (
  module_id  integer  PRIMARY KEY REFERENCES public.modules(id) ON DELETE CASCADE,
  questions  jsonb    NOT NULL DEFAULT '[]'
);

-- ─── RLS ───────────────────────────────────────────────────────────────────────
ALTER TABLE public.modules       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes       ENABLE ROW LEVEL SECURITY;

-- Module metadata: any authenticated user
CREATE POLICY "modules_select" ON public.modules
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Lesson stubs: any authenticated user (title/duration only, no content)
CREATE POLICY "lessons_select" ON public.lessons
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Lesson content:
--   • free modules  → any authenticated user
--   • pro modules   → only users with plan = 'pro' or 'annual'
CREATE POLICY "lesson_content_select" ON public.lesson_content
  FOR SELECT USING (
    auth.uid() IS NOT NULL
    AND (
      -- content belongs to a free module
      EXISTS (
        SELECT 1 FROM public.lessons l
        JOIN  public.modules  m ON m.id = l.module_id
        WHERE l.id = lesson_id AND NOT m.is_pro
      )
      OR
      -- user is on a paid plan
      EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid() AND p.plan IN ('pro', 'annual')
      )
    )
  );

-- Quiz questions: same gate as lesson content
CREATE POLICY "quizzes_select" ON public.quizzes
  FOR SELECT USING (
    auth.uid() IS NOT NULL
    AND (
      EXISTS (
        SELECT 1 FROM public.modules m
        WHERE m.id = module_id AND NOT m.is_pro
      )
      OR
      EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid() AND p.plan IN ('pro', 'annual')
      )
    )
  );
