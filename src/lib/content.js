/**
 * Camada de serviço para conteúdo de módulos.
 *
 * • Em produção (Supabase configurado): lê de Supabase com RLS.
 *   O conteúdo Pro é bloqueado a nível de base de dados para utilizadores free.
 *
 * • Em demo mode (sem Supabase): usa os dados locais como fallback,
 *   permitindo desenvolvimento sem credenciais.
 */
import { supabase, supabaseConfigured } from './supabase'
import { MODULES as LOCAL_MODULES } from '../data/modules'
import { QUIZZES as LOCAL_QUIZZES } from '../data/quizzes'

// Cache em memória por sessão (evita fetches repetidos)
let modulesCache = null

/**
 * Retorna todos os módulos com stubs de lição (sem conteúdo).
 * Shape idêntico ao MODULES local mas sem `lesson.content`.
 */
export async function getModules() {
  if (!supabaseConfigured) {
    return LOCAL_MODULES.map((m) => ({
      ...m,
      hasQuiz: !!LOCAL_QUIZZES[m.id],
      lessons: m.lessons.map(({ content: _c, ...stub }) => stub),
    }))
  }

  if (modulesCache) return modulesCache

  const [{ data: mods, error: mErr }, { data: stubs, error: lErr }] = await Promise.all([
    supabase.from('modules').select('id, title, description, duration, icon, is_pro, has_quiz, color_config').order('sort_order'),
    supabase.from('lessons').select('id, module_id, title, duration, is_pro, sort_order').order('sort_order'),
  ])

  if (mErr || !mods) {
    console.error('[content] getModules error:', mErr)
    // Graceful fallback to local stubs
    return LOCAL_MODULES.map((m) => ({
      ...m,
      hasQuiz: !!LOCAL_QUIZZES[m.id],
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

/**
 * Busca o conteúdo markdown de uma lição.
 * Retorna null se o utilizador não tiver acesso (RLS) ou em caso de erro.
 */
export async function getLessonContent(lessonId, moduleId) {
  if (!supabaseConfigured) {
    const mod    = LOCAL_MODULES.find((m) => m.id === moduleId)
    const lesson = mod?.lessons.find((l) => l.id === lessonId)
    return lesson?.content ?? null
  }

  const { data, error } = await supabase
    .from('lesson_content')
    .select('content')
    .eq('lesson_id', lessonId)
    .single()

  if (error) {
    if (error.code !== 'PGRST116') console.error('[content] getLessonContent error:', error)
    return null
  }

  return data?.content ?? null
}

/**
 * Busca as perguntas do quiz de um módulo.
 * Retorna [] se não autorizado (RLS) ou se não existir quiz.
 */
export async function getQuiz(moduleId) {
  if (!supabaseConfigured) return LOCAL_QUIZZES[moduleId] ?? []

  const { data, error } = await supabase
    .from('quizzes')
    .select('questions')
    .eq('module_id', moduleId)
    .single()

  if (error) return []
  return data?.questions ?? []
}

/** Invalida o cache de módulos (usar após mudanças de plano). */
export function invalidateModulesCache() {
  modulesCache = null
}
