import { PUBLIC_MODULES } from '../data/publicCatalog'

// Explicit imports keep unreleased material out of the public build.
const lessonLoaders = {
  1: () => import('../data/lessons/1'),
  2: () => import('../data/lessons/2'),
  3: () => import('../data/lessons/3'),
  4: () => import('../data/lessons/4'),
  5: () => import('../data/lessons/5'),
  6: () => import('../data/lessons/6'),
  7: () => import('../data/lessons/7'),
  8: () => import('../data/lessons/8'),
  9: () => import('../data/lessons/9'),
  10: () => import('../data/lessons/10'),
}

export async function getModules() { return PUBLIC_MODULES }

export async function getLessonContent(lessonId, moduleId) {
  const mod = PUBLIC_MODULES.find(m => m.id === Number(moduleId))
  const lesson = mod?.lessons.find(l => l.id === lessonId)
  if (!lesson) return null
  const { default: contents } = await lessonLoaders[mod.id]()
  const content = contents[lesson.id] ?? null
  return lesson.id === '1-6' ? content?.replace('Erros fatais de CV: o que 95% dos candidatos fazem errado', lesson.title) : content
}

export async function getQuiz(moduleId) {
  if (!PUBLIC_MODULES.some(m => m.id === Number(moduleId))) return []
  const { QUIZZES } = await import('../data/publicQuizzes')
  return QUIZZES[moduleId] ?? []
}
export function invalidateModulesCache() {}
