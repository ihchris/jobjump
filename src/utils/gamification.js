import { LS } from './storage'

// ─── Níveis ───────────────────────────────────────────────────────────────────
export const LEVELS = [
  { level: 1, label: 'Candidato',    min: 0,    max: 149,  color: 'text-slate-500',  bg: 'bg-slate-100'  },
  { level: 2, label: 'Aspirante',    min: 150,  max: 399,  color: 'text-blue-600',   bg: 'bg-blue-100'   },
  { level: 3, label: 'Profissional', min: 400,  max: 799,  color: 'text-violet-600', bg: 'bg-violet-100' },
  { level: 4, label: 'Especialista', min: 800,  max: 1499, color: 'text-amber-600',  bg: 'bg-amber-100'  },
  { level: 5, label: 'Expert',       min: 1500, max: 2999, color: 'text-orange-600', bg: 'bg-orange-100' },
  { level: 6, label: 'Elite',        min: 3000, max: Infinity, color: 'text-rose-600', bg: 'bg-rose-100' },
]

export const getLevel = (xp) => LEVELS.findLast((l) => xp >= l.min) || LEVELS[0]

export const getLevelProgress = (xp) => {
  const lvl = getLevel(xp)
  if (lvl.level === 6) return 100
  const range = lvl.max - lvl.min + 1
  return Math.round(((xp - lvl.min) / range) * 100)
}

// ─── Badges ───────────────────────────────────────────────────────────────────
export const BADGES = [
  { id: 'first_lesson',   icon: '🎯', label: 'Primeiro Passo',    desc: 'Concluiu a primeira lição',              check: (s) => s.lessonsCount >= 1 },
  { id: 'five_lessons',   icon: '📖', label: 'Em Ritmo',          desc: 'Concluiu 5 lições',                      check: (s) => s.lessonsCount >= 5 },
  { id: 'ten_lessons',    icon: '📚', label: 'Estudante Sério',   desc: 'Concluiu 10 lições',                     check: (s) => s.lessonsCount >= 10 },
  { id: 'twenty_lessons', icon: '🔥', label: 'Em Chamas',         desc: 'Concluiu 20 lições',                     check: (s) => s.lessonsCount >= 20 },
  { id: 'fifty_lessons',  icon: '⚡', label: 'Imparável',          desc: 'Concluiu 50 lições',                     check: (s) => s.lessonsCount >= 50 },
  { id: 'streak_7',       icon: '🗓️', label: '7 Dias Seguidos',   desc: '7 dias consecutivos na plataforma',      check: (s) => s.streak >= 7 },
  { id: 'streak_30',      icon: '🏅', label: 'Mês Dedicado',      desc: '30 dias consecutivos na plataforma',     check: (s) => s.streak >= 30 },
  { id: 'module_1',       icon: '📄', label: 'Mestre do CV',      desc: 'Concluiu o módulo de CV ATS',            check: (s) => s.completedModules.includes(1) },
  { id: 'module_2',       icon: '✉️', label: 'Carta Perfeita',    desc: 'Concluiu o módulo de Carta de Motivação', check: (s) => s.completedModules.includes(2) },
  { id: 'module_3',       icon: '💼', label: 'LinkedIn Expert',   desc: 'Concluiu o módulo de LinkedIn',          check: (s) => s.completedModules.includes(3) },
  { id: 'module_4',       icon: '🎤', label: 'Entrevistador Nato', desc: 'Concluiu o módulo de Entrevistas',       check: (s) => s.completedModules.includes(4) },
  { id: 'module_6',       icon: '💰', label: 'Negociador',        desc: 'Concluiu o módulo de Negociação Salarial', check: (s) => s.completedModules.includes(6) },
  { id: 'module_14',      icon: '🧠', label: 'Mente Forte',       desc: 'Concluiu o módulo de Psicologia',        check: (s) => s.completedModules.includes(14) },
  { id: 'module_33',      icon: '🧩', label: 'PM Ready',          desc: 'Concluiu o módulo de Product Management', check: (s) => s.completedModules.includes(33) },
  { id: 'module_36',      icon: '📊', label: 'Data Nerd',         desc: 'Concluiu o módulo de Carreira em Dados', check: (s) => s.completedModules.includes(36) },
  { id: 'five_modules',   icon: '🎓', label: 'Formado',           desc: 'Concluiu 5 módulos completos',           check: (s) => s.completedModules.length >= 5 },
  { id: 'ten_modules',    icon: '🏆', label: 'Elite JobJumper',   desc: 'Concluiu 10 módulos completos',          check: (s) => s.completedModules.length >= 10 },
  { id: 'quiz_perfect',   icon: '💯', label: 'Quiz Master',       desc: 'Tirou 5/5 num quiz de módulo',           check: (s) => s.perfectQuizzes >= 1 },
  { id: 'quiz_five',      icon: '🧠', label: 'Mente Afiada',      desc: 'Tirou 5/5 em 5 quizzes',                check: (s) => s.perfectQuizzes >= 5 },
  { id: 'level_4',        icon: '🌟', label: 'Especialista',      desc: 'Atingiu o nível Especialista (800 XP)',  check: (s) => s.xp >= 800 },
  { id: 'level_6',        icon: '👑', label: 'Elite',             desc: 'Atingiu o nível Elite (3000 XP)',        check: (s) => s.xp >= 3000 },
  { id: 'diagnosis',      icon: '🗺️', label: 'Roteiro Definido',  desc: 'Completou o diagnóstico inicial',        check: (s) => s.hasDiagnosis },
]

// ─── Chaves de storage ────────────────────────────────────────────────────────
const KEY_XP           = 'nj_gam_xp'
const KEY_BADGES       = 'nj_gam_badges'
const KEY_QUIZ_SCORES  = 'nj_gam_quizzes'
const KEY_PERFECT      = 'nj_gam_perfect'
const KEY_DIAGNOSIS    = 'nj_gam_diagnosis'
const KEY_STREAK       = 'nj_streak'
const KEY_STREAK_DATE  = 'nj_streak_date'
const KEY_STREAK_BEST  = 'nj_streak_best'

// ─── XP ───────────────────────────────────────────────────────────────────────
export const getXP        = ()    => LS.get(KEY_XP, 0)
export const addXP        = (amt) => { const n = getXP() + amt; LS.set(KEY_XP, n); return n }

export const XP_LESSON    = 15
export const XP_MODULE    = 50
export const XP_QUIZ_PASS = 25
export const XP_QUIZ_PERF = 50
export const XP_DIAGNOSIS = 30
export const XP_STREAK    = 5

// ─── Streak ───────────────────────────────────────────────────────────────────
export const getStreak = () => LS.get(KEY_STREAK, 0)
export const getBestStreak = () => LS.get(KEY_STREAK_BEST, 0)

export const touchStreak = () => {
  const today = new Date().toISOString().split('T')[0]
  const last  = LS.get(KEY_STREAK_DATE, null)
  if (last === today) return getStreak()

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  const prev = getStreak()
  const next = last === yesterday ? prev + 1 : 1
  const best = Math.max(next, getBestStreak())

  LS.set(KEY_STREAK, next)
  LS.set(KEY_STREAK_DATE, today)
  LS.set(KEY_STREAK_BEST, best)

  if (next > prev) addXP(XP_STREAK)
  return next
}

// ─── Quizzes ──────────────────────────────────────────────────────────────────
export const getQuizScores   = ()              => LS.get(KEY_QUIZ_SCORES, {})
export const getPerfectCount = ()              => LS.get(KEY_PERFECT, 0)
export const saveQuizScore   = (modId, score) => {
  const scores = getQuizScores()
  const prev   = scores[modId] ?? -1
  if (score > prev) {
    LS.set(KEY_QUIZ_SCORES, { ...scores, [modId]: score })
  }
  if (score === 5) {
    const p = getPerfectCount() + 1
    LS.set(KEY_PERFECT, p)
  }
  const xp = score === 5 ? XP_QUIZ_PERF : score >= 3 ? XP_QUIZ_PASS : 0
  if (xp > 0) addXP(xp)
  return score
}

// ─── Diagnóstico ─────────────────────────────────────────────────────────────
export const getDiagnosis = ()    => LS.get(KEY_DIAGNOSIS, null)
export const saveDiagnosis = (d)  => { LS.set(KEY_DIAGNOSIS, d); addXP(XP_DIAGNOSIS) }

// ─── Estado global para checar badges ────────────────────────────────────────
export const buildGamState = (progress, modules) => {
  const lessonsCount     = Object.values(progress).filter(Boolean).length
  const completedModules = modules
    .filter((m) => m.lessons.filter((l) => !l.isPro).every((l) => progress[l.id]))
    .map((m) => m.id)

  return {
    xp:              getXP(),
    streak:          getStreak(),
    lessonsCount,
    completedModules,
    perfectQuizzes:  getPerfectCount(),
    hasDiagnosis:    !!getDiagnosis(),
  }
}

export const getEarnedBadges = (state) => BADGES.filter((b) => b.check(state))

// ─── Checar e award novos badges (retorna lista de novos) ────────────────────
export const checkNewBadges = (state) => {
  const earned  = new Set(LS.get(KEY_BADGES, []))
  const newOnes = BADGES.filter((b) => !earned.has(b.id) && b.check(state))
  if (newOnes.length) {
    newOnes.forEach((b) => earned.add(b.id))
    LS.set(KEY_BADGES, [...earned])
  }
  return newOnes
}

export const getAllEarnedBadgeIds = () => new Set(LS.get(KEY_BADGES, []))
