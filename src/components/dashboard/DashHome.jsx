import { useState, useEffect } from 'react'
import { Btn, ProgressBar } from '../ui'
import { getModules } from '../../lib/content'
import { TIPS } from '../../data/content'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'
import {
  BADGES, LEVELS,
  getXP, getLevel, getLevelProgress,
  getStreak, getBestStreak, touchStreak,
  buildGamState, getAllEarnedBadgeIds, getDiagnosis,
} from '../../utils/gamification'

export default function DashHome({ user, progress, setTab, setSelectedModule, setSelectedLesson }) {
  const [modules, setModules] = useState([])
  useEffect(() => { getModules().then(setModules) }, [])
  useEffect(() => { touchStreak() }, [])

  const allLessons    = modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id, isPro: m.isPro || !!l.isPro })))
  const accessible    = allLessons.filter((l) => !l.isPro || isPaid(user.plan))
  const completedCount = Object.values(progress).filter(Boolean).length
  const pct           = accessible.length > 0 ? Math.round((completedCount / accessible.length) * 100) : 0
  const tip           = TIPS[new Date().getDay() % TIPS.length]
  const nextLesson    = accessible.find((l) => !progress[l.id])
  const nextModule    = nextLesson ? modules.find((m) => m.lessons.some((l) => l.id === nextLesson.id)) : null
  const allDone       = completedCount === accessible.length && accessible.length > 0
  const hasDiagnosis  = !!getDiagnosis()

  // gamification
  const xp          = getXP()
  const level       = getLevel(xp)
  const lvlPct      = getLevelProgress(xp)
  const streak      = getStreak()
  const bestStreak  = getBestStreak()
  const earnedIds   = getAllEarnedBadgeIds()
  const gamState    = buildGamState(progress, modules)
  const earnedBadges = BADGES.filter((b) => earnedIds.has(b.id))

  const proModuleCount  = modules.length
  const freeModuleCount = modules.filter((m) => !m.isPro).length
  const unlockedModules = isPaid(user.plan) ? proModuleCount : freeModuleCount

  const followUpAlerts = (() => {
    const cards = LS.get('nj_tracker', [])
    const activeStatuses = new Set(['applied', 'screening', 'interview'])
    const parsePtBr = (str) => {
      if (!str) return null
      const [d, m, y] = str.split('/')
      if (!d || !m || !y) return null
      return new Date(+y, +m - 1, +d)
    }
    return cards.filter((c) => {
      if (!activeStatuses.has(c.col)) return false
      const d = parsePtBr(c.date)
      if (!d) return false
      return Math.floor((Date.now() - d.getTime()) / 86400000) >= 7
    })
  })()

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black text-slate-800">Olá, {user.name?.split(' ')[0]}! 👋</h1>
        <p className="text-slate-500 text-sm mt-1">Aqui está seu progresso até agora.</p>
      </div>

      {/* XP / Level card */}
      <div className={`${level.bg} rounded-2xl p-5 border border-slate-100`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Nível {level.level}</div>
            <div className={`text-2xl font-black ${level.color}`}>{level.label}</div>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-black ${level.color}`}>{xp} XP</div>
            {level.level < 6 && (
              <div className="text-xs text-slate-500">próximo: {LEVELS[level.level].min} XP</div>
            )}
          </div>
        </div>
        <ProgressBar pct={lvlPct} />
        <div className="flex justify-between text-xs text-slate-400 mt-1.5">
          <span>{level.min} XP</span>
          {level.level < 6 && <span>{LEVELS[level.level].min} XP</span>}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Progresso', value: `${pct}%`, sub: `${completedCount}/${accessible.length} lições`, color: 'text-blue-600' },
          { label: 'Módulos', value: `${unlockedModules}/${proModuleCount}`, sub: isPaid(user.plan) ? 'Acesso total' : 'Upgrade para mais', color: 'text-slate-800' },
          { label: 'Streak', value: `🔥 ${streak}`, sub: streak === 1 ? 'dia seguido' : 'dias seguidos', color: 'text-orange-500' },
          { label: 'Conquistas', value: `${earnedBadges.length}/${BADGES.length}`, sub: 'desbloqueadas', color: 'text-violet-600' },
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

      {/* Upgrade CTA — só para free */}
      {!isPaid(user.plan) && (
        <button
          onClick={() => setTab('settings')}
          className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 rounded-2xl p-5 text-left flex items-center gap-4 transition-all shadow-md shadow-orange-100 group"
        >
          <span className="text-4xl flex-shrink-0">⭐</span>
          <div className="flex-1">
            <div className="font-black text-white text-base leading-tight">Desbloqueie todos os módulos Pro</div>
            <div className="text-white/80 text-xs mt-0.5">
              {modules.filter((m) => m.isPro).length} módulos exclusivos · Templates · Coach IA ilimitado
            </div>
          </div>
          <div className="flex-shrink-0 bg-white/20 group-hover:bg-white/30 transition-colors text-white font-bold text-sm px-4 py-2 rounded-xl">
            Ver planos →
          </div>
        </button>
      )}

      {/* Diagnosis CTA */}
      {!hasDiagnosis && (
        <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-4">
            <span className="text-4xl flex-shrink-0">🗺️</span>
            <div className="flex-1">
              <div className="font-black text-base mb-0.5">Faça o Diagnóstico de Carreira</div>
              <div className="text-violet-200 text-xs mb-3">6 perguntas · Roteiro personalizado · +30 XP</div>
              <Btn onClick={() => setTab('diagnosis')} variant="white" size="sm">Iniciar agora →</Btn>
            </div>
          </div>
        </div>
      )}

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

      {allDone && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white text-center">
          <div className="text-4xl mb-2">🏆</div>
          <div className="font-black text-xl mb-1">Parabéns, {user.name?.split(' ')[0]}!</div>
          <div className="text-green-100 text-sm">Você concluiu todos os módulos disponíveis. Aplique o que você aprendeu!</div>
        </div>
      )}

      {/* Badges */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Conquistas</div>
          <span className="text-xs text-slate-400">{earnedBadges.length}/{BADGES.length}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {BADGES.map((b) => {
            const earned = earnedIds.has(b.id)
            return (
              <div
                key={b.id}
                title={b.desc}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-default
                  ${earned
                    ? 'bg-violet-50 text-violet-700 border-violet-200'
                    : 'bg-slate-50 text-slate-300 border-slate-100'}`}
              >
                <span>{earned ? b.icon : '🔒'}</span>
                <span>{b.label}</span>
              </div>
            )
          })}
        </div>
      </div>

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
          onClick={() => setTab('diagnosis')}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all text-left group"
        >
          <div className="text-2xl mb-2">🗺️</div>
          <div className="font-bold text-slate-800 text-sm">Diagnóstico</div>
          <div className="text-slate-500 text-xs mt-0.5">Roteiro personalizado de módulos</div>
          <div className="text-violet-600 text-xs font-semibold mt-2 group-hover:underline">{hasDiagnosis ? 'Ver roteiro →' : 'Iniciar →'}</div>
        </button>
      </div>

      {/* Follow-up alerts */}
      {followUpAlerts.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⏰</span>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-orange-800 text-sm mb-1">
                {followUpAlerts.length} candidatura{followUpAlerts.length > 1 ? 's' : ''} sem atualização há +7 dias
              </div>
              <div className="space-y-1 mb-2">
                {followUpAlerts.slice(0, 3).map((c) => (
                  <div key={c.id} className="text-xs text-orange-700">
                    · {c.company} — {c.role} <span className="text-orange-400">({c.date})</span>
                  </div>
                ))}
                {followUpAlerts.length > 3 && (
                  <div className="text-xs text-orange-400">e mais {followUpAlerts.length - 3}...</div>
                )}
              </div>
              <button
                onClick={() => setTab('tools')}
                className="text-xs font-semibold text-orange-700 underline hover:text-orange-900"
              >
                Abrir Rastreador de Candidaturas →
              </button>
            </div>
          </div>
        </div>
      )}

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
          {modules.map((m) => {
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
