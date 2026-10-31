import { supabase, supabaseConfigured } from '../lib/supabase'

// The catalog never imports lesson bodies; Vite creates a chunk per module.
const lessonLoaders = import.meta.glob('../data/lessons/*.js')
let localDataCache = null
async function getLocalData() {
  if (localDataCache) return localDataCache
  const [{ MODULES }, { QUIZZES }] = await Promise.all([
    import('../data/moduleCatalog'),
    import('../data/quizzes'),
  ])
  localDataCache = { MODULES, QUIZZES }
  return localDataCache
}

let modulesCache = null
let demoMode = false
export function setContentDemoMode(enabled) { demoMode = enabled; modulesCache = null }

export async function getModules() {
  if (demoMode || !supabaseConfigured) {
    const { MODULES, QUIZZES } = await getLocalData()
    return MODULES.map((m) => ({
      ...m,
      hasQuiz: !!QUIZZES[m.id],
      lessons: m.lessons.map(({ content: _c, ...stub }) => stub),
    }))
  }

  if (modulesCache) return modulesCache

  const [{ data: mods, error: mErr }, { data: stubs }] = await Promise.all([
    supabase.from('modules').select('id, title, description, duration, icon, is_pro, has_quiz, color_config').order('sort_order'),
    supabase.from('lessons').select('id, module_id, title, duration, is_pro, sort_order').order('sort_order'),
  ])

  if (mErr || !mods) {
    const { MODULES, QUIZZES } = await getLocalData()
    return MODULES.map((m) => ({
      ...m,
      hasQuiz: !!QUIZZES[m.id],
      lessons: m.lessons.map(({ content: _c, ...stub }) => stub),
    }))
  }

  modulesCache = mods.map((m) => ({
    id:       m.id,
    title:    m.title,
    desc:     m.description,
    duration: m.duration,
    icon:     m.icon,
    isPro:    m.is_pro,
    hasQuiz:  m.has_quiz,
    color:    m.color_config,
    lessons:  (stubs || [])
      .filter((l) => l.module_id === m.id)
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(({ module_id: _m, sort_order: _s, ...l }) => l),
  }))

  return modulesCache
}

export async function getLessonContent(lessonId, moduleId) {
  if (demoMode || !supabaseConfigured) {
    const load = lessonLoaders[`../data/lessons/${moduleId}.js`]
    if (!load) return null
    const { default: lessons } = await load()
    return lessons[lessonId] ?? null
  }

  const { data, error } = await supabase
    .from('lesson_content')
    .select('content')
    .eq('lesson_id', lessonId)
    .single()

  if (error) {
    if (error.code !== 'PGRST116') console.error('[content] getLessonContent:', error)
    return null
  }

  return data?.content ?? null
}

export async function getQuiz(moduleId) {
  if (demoMode || !supabaseConfigured) {
    const { QUIZZES } = await getLocalData()
    return QUIZZES[moduleId] ?? []
  }

  const { data, error } = await supabase
    .from('quizzes')
    .select('questions')
    .eq('module_id', moduleId)
    .single()

  if (error) return []
  return data?.questions ?? []
}

export function invalidateModulesCache() {
  modulesCache = null
}
