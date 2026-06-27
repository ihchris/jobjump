import { useState, useEffect } from 'react'
import { Btn, ProgressBar } from '../ui'
import { MODULES } from '../../data/modules'
import { TIPS } from '../../data/content'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'

function getStreak(progress) {
  const history = LS.get('nj_streak_history', []) // array of 'YYYY-MM-DD' strings
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

  const hasProgressToday = Object.values(progress).some(Boolean)
  if (!hasProgressToday) {
    const streak = LS.get('nj_streak', 0)
    return streak
  }

  if (!history.includes(today)) {
    const newHistory = [...history.filter((d) => d === yesterday || d === today), today]
    LS.set('nj_streak_history', newHistory)
    const hadYesterday = history.includes(yesterday)
    const prevStreak = LS.get('nj_streak', 0)
    const newStreak = hadYesterday ? prevStreak + 1 : 1
    LS.set('nj_streak', newStreak)
    return newStreak
  }

  return LS.get('nj_streak', 1)
}

const ACHIEVEMENTS = [
  { id: 'first_lesson', icon: '🎯', label: 'Primeira lição', check: (p) => Object.values(p).filter(Boolean).length >= 1 },
  { id: 'five_lessons', icon: '📚', label: '5 lições', check: (p) => Object.values(p).filter(Boolean).length >= 5 },
  { id: 'ten_lessons', icon: '🔥', label: '10 lições', check: (p) => Object.values(p).filter(Boolean).length >= 10 },
  { id: 'twenty_lessons', icon: '⚡', label: '20 lições', check: (p) => Object.values(p).filter(Boolean).length >= 20 },
  { id: 'module_1', icon: '📄', label: 'Mestre do CV', check: (p, m) => m.find((mod) => mod.id === 1)?.lessons.every((l) => p[l.id]) },
  { id: 'module_2', icon: '✉️', label: 'Cartas Perfeitas', check: (p, m) => m.find((mod) => mod.id === 2)?.lessons.every((l) => p[l.id]) },
  { id: 'module_3', icon: '💼', label: 'LinkedIn Pro', check: (p, m) => m.find((mod) => mod.id === 3)?.lessons.every((l) => p[l.id]) },
  { id: 'module_4', icon: '🎯', label: 'Entrevistador', check: (p, m) => m.find((mod) => mod.id === 4)?.lessons.every((l) => p[l.id]) },
  { id: 'module_14', icon: '🧠', label: 'Mente Forte', check: (p, m) => m.find((mod) => mod.id === 14)?.lessons.every((l) => p[l.id]) },
  { id: 'module_15', icon: '🇬🇧', label: 'Global Ready', check: (p, m) => m.find((mod) => mod.id === 15)?.lessons.every((l) => p[l.id]) },
]

export default function DashHome({ user, progress, setTab, setSelectedModule, setSelectedLesson }) {
  const allLessons = MODULES.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id, isPro: m.isPro })))
  const accessible = allLessons.filter((l) => !l.isPro || isPaid(user.plan))
  const completedCount = Object.values(progress).filter(Boolean).length
  const pct = accessible.length > 0 ? Math.round((completedCount / accessible.length) * 100) : 0
  const tip = TIPS[new Date().getDay() % TIPS.length]
  const nextLesson = accessible.find((l) => !progress[l.id])
  const nextModule = nextLesson ? MODULES.find((m) => m.lessons.some((l) => l.id === nextLesson.id)) : null

  const streak = getStreak(progress)
  const proModuleCount = MODULES.length
  const freeModuleCount = MODULES.filter((m) => !m.isPro).length
  const unlockedModules = isPaid(user.plan) ? proModuleCount : freeModuleCount
  const earnedAchievements = ACHIEVEMENTS.filter((a) => a.check(progress, MODULES))

  const allDone = completedCount === accessible.length && accessible.length > 0

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black text-slate-800">Olá, {user.name?.split(' ')[0]}! 👋</h1>
        <p className="text-slate-500 text-sm mt-1">Aqui está seu progresso até agora.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Progresso', value: `${pct}%`, sub: `${completedCount}/${accessible.length} lições`, color: 'text-blue-600' },
          { label: 'Módulos', value: `${unlockedModules}/${proModuleCount}`, sub: isPaid(user.plan) ? 'Acesso total' : 'Upgrade para mais', color: 'text-slate-800' },
          { label: 'Streak', value: `🔥 ${streak}`, sub: streak === 1 ? 'dia seguido' : 'dias seguidos', color: 'text-orange-500' },
          { label: 'Conquistas', value: `${earnedAchievements.length}/${ACHIEVEMENTS.length}`, sub: 'desbloqueadas', color: 'text-violet-600' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
            <div className="text-slate-400 text-xs font-medium mb-1">{s.label}</div>
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-slate-400 text-xs mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Progresso geral</div>
          {allDone && <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">🏆 Concluído!</span>}
        </div>
        <ProgressBar pct={pct} />
        <div className="flex justify-between text-xs text-slate-400 mt-2">
          <span>{completedCount} lições concluídas</span>
          <span>{pct}%</span>
        </div>
      </div>

      {/* Next lesson CTA */}
      {nextLesson && nextModule && !allDone && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 text-white">
          <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Próxima lição</div>
          <div className="font-bold text-lg mb-1">{nextLesson.title}</div>
          <div className="text-blue-200 text-sm mb-4">{nextModule.title} · {nextLesson.duration}</div>
          <Btn
            onClick={() => { setSelectedModule(nextModule); setSelectedLesson(nextLesson); setTab('modules') }}
            variant="white"
            size="sm"
          >
            Continuar →
          </Btn>
        </div>
      )}

      {/* Completion banner */}
      {allDone && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white text-center">
          <div className="text-4xl mb-2">🏆</div>
          <div className="font-black text-xl mb-1">Parabéns, {user.name?.split(' ')[0]}!</div>
          <div className="text-green-100 text-sm">Concluíste todos os módulos disponíveis. Aplica o que aprendeste!</div>
        </div>
      )}

      {/* Achievements */}
      {earnedAchievements.length > 0 && (
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Conquistas desbloqueadas</div>
          <div className="flex flex-wrap gap-2">
            {ACHIEVEMENTS.map((a) => {
              const earned = earnedAchievements.some((e) => e.id === a.id)
              return (
                <div
                  key={a.id}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all
                    ${earned
                      ? 'bg-violet-50 text-violet-700 border-violet-200'
                      : 'bg-slate-50 text-slate-300 border-slate-100'}`}
                >
                  <span>{a.icon}</span>
                  <span>{a.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Quick access */}
      <div className="grid sm:grid-cols-3 gap-3">
        <button
          onClick={() => setTab('planner')}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
        >
          <div className="text-2xl mb-2">📅</div>
          <div className="font-bold text-slate-800 text-sm">Plano Semanal</div>
          <div className="text-slate-500 text-xs mt-0.5">Metas · Tarefas diárias · Checklist</div>
          <div className="text-blue-600 text-xs font-semibold mt-2 group-hover:underline">Planear →</div>
        </button>
        <button
          onClick={() => setTab('tools')}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
        >
          <div className="text-2xl mb-2">🛠️</div>
          <div className="font-bold text-slate-800 text-sm">Ferramentas</div>
          <div className="text-slate-500 text-xs mt-0.5">STAR · ATS · Email · Checklist</div>
          <div className="text-blue-600 text-xs font-semibold mt-2 group-hover:underline">Abrir →</div>
        </button>
        <button
          onClick={() => setTab('coach')}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
        >
          <div className="text-2xl mb-2">🤖</div>
          <div className="font-bold text-slate-800 text-sm">Coach IA</div>
          <div className="text-slate-500 text-xs mt-0.5">Faz qualquer pergunta sobre carreira</div>
          <div className="text-blue-600 text-xs font-semibold mt-2 group-hover:underline">Conversar →</div>
        </button>
      </div>

      {/* Tip */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-bold text-amber-800 text-sm mb-1">Dica do dia</div>
            <p className="text-amber-700 text-sm leading-relaxed">{tip}</p>
          </div>
        </div>
      </div>

      {/* Module list */}
      <div>
        <h2 className="font-bold text-slate-800 mb-4">Módulos de aprendizagem</h2>
        <div className="space-y-3">
          {MODULES.map((m) => {
            const mCompleted = m.lessons.filter((l) => progress[l.id]).length
            const locked = m.isPro && !isPaid(user.plan)
            const mPct = Math.round((mCompleted / m.lessons.length) * 100)
            return (
              <div
                key={m.id}
                onClick={() => { if (!locked) { setSelectedModule(m); setTab('modules') } }}
                className={`bg-white rounded-xl p-4 border flex items-center gap-4 transition-all
                  ${locked ? 'opacity-60 cursor-not-allowed border-slate-100' : 'cursor-pointer hover:shadow-md border-slate-100 hover:border-blue-200'}`}
              >
                <div className={`w-12 h-12 ${m.color.icon} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {locked ? '🔒' : mPct === 100 ? '✅' : m.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 text-sm">{m.title}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{m.lessons.length} lições · {m.duration}</div>
                  <div className="mt-1.5"><ProgressBar pct={mPct} /></div>
                </div>
                <div className="text-xs text-slate-400 flex-shrink-0">{mCompleted}/{m.lessons.length}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
