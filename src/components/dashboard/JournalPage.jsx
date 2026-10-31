import { useState, useEffect, useMemo } from 'react'
import { Btn } from '../ui'
import {
  getEntries, saveEntry, getEntryFor, getWeekSummary, getJournalStreak, todayKey,
  enforceFreeHistory, isTruncatedForFree,
} from '../../utils/journal'
import { hasContentAccess } from '../../utils/plans'
import {
  addXP, XP_JOURNAL, checkNewBadges, buildGamState,
} from '../../utils/gamification'
import { addNotification } from '../../utils/notifications'

const MOOD_LABELS = ['😣', '😕', '😐', '🙂', '😄']
const ENERGY_LABELS = ['🪫', '🔋', '⚡', '⚡⚡', '⚡⚡⚡']

const WEEKDAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

function MoodSparkline({ days }) {
  // Renderiza um sparkline simples com SVG
  const filled = days.filter((d) => d.entry)
  if (filled.length === 0) {
    return (
      <div className="h-24 flex items-center justify-center text-slate-400 text-sm">
        Sem entradas esta semana
      </div>
    )
  }
  const W = 280
  const H = 80
  const PAD = 8
  const innerW = W - PAD * 2
  const innerH = H - PAD * 2
  const points = days.map((d, i) => {
    const x = PAD + (i / 6) * innerW
    const val = d.entry ? d.entry.mood : null
    const y = val ? PAD + innerH - ((val - 1) / 4) * innerH : null
    return { x, y, val, entry: d.entry, key: d.date }
  })

  return (
    <div className="overflow-x-auto">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block">
        {[1, 2, 3, 4, 5].map((m) => {
          const y = PAD + innerH - ((m - 1) / 4) * innerH
          return (
            <line key={m} x1={PAD} y1={y} x2={W - PAD} y2={y}
              stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 3" />
          )
        })}
        {points.map((p, i) => {
          if (!p.val) return null
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="6"
                fill={p.val >= 4 ? '#10b981' : p.val >= 3 ? '#3b82f6' : '#f59e0b'}
                stroke="white" strokeWidth="2" />
              <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e293b">
                {MOOD_LABELS[p.val - 1]}
              </text>
            </g>
          )
        })}
        {points.map((p, i) => (
          <text key={`l${i}`} x={p.x} y={H - 1} textAnchor="middle" fontSize="9" fill="#94a3b8">
            {WEEKDAY_LABELS[days[i].weekday]}
          </text>
        ))}
      </svg>
    </div>
  )
}

export default function JournalPage({ user, progress, modules }) {
  const isPro = hasContentAccess(user?.plan)
  const today = todayKey()
  const [version, setVersion] = useState(0)
  const [truncated, setTruncated] = useState(false)
  const [todayEntry, setTodayEntry] = useState(() => getEntryFor(today))

  useEffect(() => {
    if (!isPro) {
      const wasTrunc = enforceFreeHistory()
      setTruncated(wasTrunc || isTruncatedForFree())
    }
  }, [version, isPro])

  const refresh = () => {
    setVersion((v) => v + 1)
    setTodayEntry(getEntryFor(today))
  }

  const [form, setForm] = useState(() => {
    const e = getEntryFor(today)
    return e
      ? { mood: e.mood, energy: e.energy, wentWell: e.wentWell, toImprove: e.toImprove, gratitude: e.gratitude }
      : { mood: 3, energy: 3, wentWell: '', toImprove: '', gratitude: '' }
  })
  const [saved, setSaved] = useState(false)

  const summary = useMemo(() => getWeekSummary(), [version])
  const streak = useMemo(() => getJournalStreak(), [version])
  const allEntries = useMemo(() => getEntries(), [version])
  const pastEntries = useMemo(
    () => allEntries.filter((e) => e.date !== today).sort((a, b) => (a.date < b.date ? 1 : -1)),
    [allEntries, today]
  )

  const isFirstSaveToday = !todayEntry

  const handleSave = () => {
    saveEntry({ date: today, ...form })
    if (isFirstSaveToday) {
      addXP(XP_JOURNAL)
      addNotification('xp', 'Diário guardado! 📓', `+${XP_JOURNAL} XP · Continue assim.`)
      // Recheck badges
      try {
        const state = buildGamState(progress || {}, modules || [])
        checkNewBadges(state)
      } catch {}
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    refresh()
  }

  return (
    <div className="p-6 animate-fade-in max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-800">📓 Diário de Carreira</h1>
        <p className="text-slate-500 text-sm mt-1">
          Reflita 2 minutos por dia. Ganhe XP, mantenha o streak e identifique padrões na sua busca.
        </p>
      </div>

      {truncated && !isPro && (
        <div className="mb-5 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm flex items-start gap-3">
          <span className="text-xl flex-shrink-0">⏳</span>
          <div>
            <div className="font-bold text-amber-800 mb-0.5">Histórico limitado (7 dias)</div>
            <p className="text-amber-700 text-xs">
              No plano Grátis guardamos apenas os últimos 7 dias. Faça upgrade para Pro para manter todo o histórico e desbloquear tendências de longo prazo.
            </p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Today's entry */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Hoje</div>
              <h2 className="font-black text-slate-800 text-lg">
                {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
              </h2>
            </div>
            {streak > 0 && (
              <div className="text-right">
                <div className="text-2xl font-black text-orange-500">🔥 {streak}</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">dias seguidos</div>
              </div>
            )}
          </div>

          {/* Mood */}
          <div className="mb-4">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Como você se sente hoje?
            </label>
            <div className="flex gap-2">
              {MOOD_LABELS.map((emoji, i) => (
                <button
                  key={i}
                  onClick={() => setForm((f) => ({ ...f, mood: i + 1 }))}
                  className={`flex-1 py-3 rounded-xl text-2xl transition-all border-2
                    ${form.mood === i + 1
                      ? 'bg-blue-50 border-blue-500 scale-105'
                      : 'bg-white border-slate-200 hover:border-slate-300'}`}
                  title={['Muito mal', 'Mal', 'Neutro', 'Bem', 'Ótimo'][i]}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Energy */}
          <div className="mb-4">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Nível de energia
            </label>
            <div className="flex gap-2">
              {ENERGY_LABELS.map((emoji, i) => (
                <button
                  key={i}
                  onClick={() => setForm((f) => ({ ...f, energy: i + 1 }))}
                  className={`flex-1 py-2 rounded-xl text-lg transition-all border-2
                    ${form.energy === i + 1
                      ? 'bg-amber-50 border-amber-500 scale-105'
                      : 'bg-white border-slate-200 hover:border-slate-300'}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Text fields */}
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                ✨ O que correu bem hoje?
              </label>
              <textarea aria-label="✨ O que correu bem hoje?"
                value={form.wentWell}
                onChange={(e) => setForm((f) => ({ ...f, wentWell: e.target.value }))}
                rows={3}
                placeholder="Uma vitória, uma conversa, um avanço…"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                🎯 O que pode melhorar amanhã?
              </label>
              <textarea aria-label="🎯 O que pode melhorar amanhã?"
                value={form.toImprove}
                onChange={(e) => setForm((f) => ({ ...f, toImprove: e.target.value }))}
                rows={3}
                placeholder="Um hábito, uma meta, um medo a enfrentar…"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                🙏 Gratidão
              </label>
              <textarea aria-label="🙏 Gratidão"
                value={form.gratitude}
                onChange={(e) => setForm((f) => ({ ...f, gratitude: e.target.value }))}
                rows={2}
                placeholder="Algo pelo qual é grato hoje…"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Btn onClick={handleSave} variant="primary" size="md" className="flex-1">
              {saved ? '✓ Guardado' : todayEntry ? 'Atualizar entrada' : 'Guardar (+' + XP_JOURNAL + ' XP)'}
            </Btn>
          </div>
        </div>

        {/* Week view */}
        <div className="space-y-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-black text-slate-800 text-lg">Esta semana</h2>
              <div className="text-xs text-slate-400 font-semibold">
                {summary.filledCount}/7 dias
              </div>
            </div>
            <MoodSparkline days={summary.days} />
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-blue-700">{summary.avgMood ?? '—'}</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Humor médio</div>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-amber-700">{summary.avgEnergy ?? '—'}</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Energia média</div>
              </div>
              <div className="bg-violet-50 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-violet-700">{streak}</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Streak 🔥</div>
              </div>
            </div>

            {summary.qualifiesForBonus && (
              <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm">
                <div className="font-bold text-emerald-800">🎯 Meta semanal atingida!</div>
                <p className="text-emerald-700 text-xs mt-0.5">
                  Journaled 5 dias esta semana — isto fortalece o seu hábito e aparece no seu perfil.
                </p>
              </div>
            )}
          </div>

          {/* Past entries */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h2 className="font-black text-slate-800 text-lg mb-3">Entradas anteriores</h2>
            {pastEntries.length === 0 ? (
              <p className="text-slate-400 text-sm">Sem entradas anteriores. Volte amanhã!</p>
            ) : (
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {pastEntries
                  .slice(0, isPro ? 30 : 6)
                  .map((e) => (
                    <div key={e.date} className="border border-slate-100 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-600">
                          {new Date(e.date + 'T00:00:00').toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' })}
                        </span>
                        <div className="flex items-center gap-2">
                          <span title="Humor">{MOOD_LABELS[e.mood - 1]}</span>
                          <span title="Energia">{ENERGY_LABELS[e.energy - 1]}</span>
                        </div>
                      </div>
                      {e.wentWell && (
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                          <strong className="text-emerald-600">✓</strong> {e.wentWell}
                        </p>
                      )}
                      {e.toImprove && (
                        <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                          <strong className="text-amber-600">→</strong> {e.toImprove}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {!isPro && allEntries.length > 6 && (
              <p className="text-xs text-slate-400 mt-3 text-center">
                Mostrando as últimas 6 entradas. <span className="font-semibold text-amber-600">Pro</span> vê histórico ilimitado.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}