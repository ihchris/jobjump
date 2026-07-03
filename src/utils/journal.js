import { LS } from './storage'

const KEY = 'nj_journal'
const FREE_HISTORY_DAYS = 7
const FREE_HISTORY_KEY = 'nj_journal_free_truncated'

export const todayKey = () => new Date().toISOString().split('T')[0]

export const getEntries = () => LS.get(KEY, [])

export const getEntryFor = (date) => {
  return getEntries().find((e) => e.date === date) || null
}

export const saveEntry = ({ date = todayKey(), mood, energy, wentWell = '', toImprove = '', gratitude = '' }) => {
  const entries = getEntries().filter((e) => e.date !== date)
  const entry = {
    date,
    mood: clamp(mood, 1, 5),
    energy: clamp(energy, 1, 5),
    wentWell: String(wentWell || '').slice(0, 800),
    toImprove: String(toImprove || '').slice(0, 800),
    gratitude: String(gratitude || '').slice(0, 400),
    updatedAt: Date.now(),
  }
  const next = [entry, ...entries].sort((a, b) => (a.date < b.date ? 1 : -1))
  LS.set(KEY, next)
  return entry
}

// Retorna true se a entrada foi truncada por causa do limite grátis
export const isTruncatedForFree = () => {
  return LS.get(FREE_HISTORY_KEY, false)
}

// Para utilizadores free: mantém só os últimos 7 dias
export const enforceFreeHistory = () => {
  const entries = getEntries()
  if (entries.length <= FREE_HISTORY_DAYS) {
    LS.set(FREE_HISTORY_KEY, false)
    return false
  }
  const cutoff = new Date()
  cutoff.setHours(0, 0, 0, 0)
  cutoff.setDate(cutoff.getDate() - FREE_HISTORY_DAYS)
  const cutoffStr = cutoff.toISOString().split('T')[0]
  const kept = entries.filter((e) => e.date >= cutoffStr)
  const truncated = kept.length < entries.length
  LS.set(KEY, kept)
  LS.set(FREE_HISTORY_KEY, truncated)
  return truncated
}

const clamp = (n, min, max) => {
  const v = parseInt(n, 10)
  if (isNaN(v)) return min
  return Math.max(min, Math.min(max, v))
}

// Resumo da semana (segunda → hoje)
export function getWeekSummary(reference = new Date()) {
  const monday = new Date(reference)
  const day = monday.getDay()
  monday.setHours(0, 0, 0, 0)
  monday.setDate(monday.getDate() - ((day + 6) % 7))

  const days = []
  const entries = getEntries()
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    const key = d.toISOString().split('T')[0]
    const entry = entries.find((e) => e.date === key) || null
    const isFuture = d.getTime() > new Date().setHours(0, 0, 0, 0)
    days.push({ date: key, entry, isFuture, weekday: d.getDay() })
  }

  const filled = days.filter((d) => d.entry)
  const avgMood = filled.length
    ? +(filled.reduce((s, d) => s + d.entry.mood, 0) / filled.length).toFixed(1)
    : null
  const avgEnergy = filled.length
    ? +(filled.reduce((s, d) => s + d.entry.energy, 0) / filled.length).toFixed(1)
    : null

  return {
    days,
    filledCount: filled.length,
    avgMood,
    avgEnergy,
    qualifiesForBonus: filled.length >= 5,
  }
}

// Calcula streak de dias consecutivos com entrada
export const getJournalStreak = () => {
  const entries = getEntries()
  if (!entries.length) return 0
  const sorted = [...entries].sort((a, b) => (a.date < b.date ? -1 : 1))
  const dateSet = new Set(sorted.map((e) => e.date))
  let streak = 0
  const cursor = new Date()
  cursor.setHours(0, 0, 0, 0)
  while (true) {
    const key = cursor.toISOString().split('T')[0]
    if (dateSet.has(key)) {
      streak++
      cursor.setDate(cursor.getDate() - 1)
    } else {
      break
    }
  }
  return streak
}