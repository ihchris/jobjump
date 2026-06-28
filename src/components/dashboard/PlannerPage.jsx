import { useState, useCallback } from 'react'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'

// ─── Week helpers ──────────────────────────────────────────────────────────────
function getMondayOf(date) {
  const d = new Date(date)
  const day = d.getDay()
  d.setDate(d.getDate() - ((day + 6) % 7))
  d.setHours(0, 0, 0, 0)
  return d
}

function getWeekDays(monday) {
  const LABELS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
  const MONTHS = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
  const now = new Date()
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return {
      key: d.toISOString().split('T')[0],
      full: LABELS[i],
      date: d.getDate(),
      month: MONTHS[d.getMonth()],
      isToday: d.toDateString() === now.toDateString(),
    }
  })
}

function toKey(date) {
  return date.toISOString().split('T')[0]
}

// ─── Metas da semana ──────────────────────────────────────────────────────────
const DEFAULT_GOALS = [
  { id: 'applications', label: 'Candidaturas enviadas', icon: '📨', target: 10 },
  { id: 'networking', label: 'Contatos de networking', icon: '🤝', target: 5 },
  { id: 'lessons', label: 'Lições concluídas', icon: '📚', target: 3 },
  { id: 'interviews', label: 'Entrevistas agendadas', icon: '🎯', target: 1 },
]

function GoalTracker({ weekKey }) {
  const storageKey = `nj_goals_${weekKey}`
  const [goals, setGoals] = useState(() => LS.get(storageKey, DEFAULT_GOALS.map((g) => ({ ...g, current: 0 }))))

  const update = (id, delta) => {
    const next = goals.map((g) => g.id === id ? { ...g, current: Math.max(0, g.current + delta) } : g)
    setGoals(next)
    LS.set(storageKey, next)
  }

  const editTarget = (id, val) => {
    const num = parseInt(val, 10)
    if (isNaN(num) || num < 1) return
    const next = goals.map((g) => g.id === id ? { ...g, target: num } : g)
    setGoals(next)
    LS.set(storageKey, next)
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {goals.map((g) => {
        const pct = Math.min(100, Math.round((g.current / g.target) * 100))
        const done = g.current >= g.target
        return (
          <div key={g.id} className={`bg-white rounded-2xl border p-4 transition-all ${done ? 'border-green-200 bg-green-50' : 'border-slate-100'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{g.icon}</span>
              {done
                ? <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Concluído ✓</span>
                : <span className="text-xs text-slate-400 font-medium">{pct}%</span>
              }
            </div>
            <div className="font-semibold text-slate-800 text-sm mb-1">{g.label}</div>
            <div className="text-slate-400 text-xs mb-3">
              Meta:{' '}
              <input
                type="number"
                min="1"
                value={g.target}
                onChange={(e) => editTarget(g.id, e.target.value)}
                className="w-10 text-xs border-b border-slate-300 focus:outline-none focus:border-blue-400 bg-transparent text-center"
              />
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mb-3">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${done ? 'bg-green-500' : 'bg-blue-500'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => update(g.id, -1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-sm flex items-center justify-center transition-colors"
              >−</button>
              <div className="flex-1 text-center text-sm font-bold text-slate-700">
                {g.current} <span className="text-slate-400 font-normal text-xs">/ {g.target}</span>
              </div>
              <button
                onClick={() => update(g.id, 1)}
                className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-sm flex items-center justify-center transition-colors"
              >+</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Resumo semanal ───────────────────────────────────────────────────────────
function WeeklySummary({ weekKey, days }) {
  let total = 0, done = 0
  days.forEach(day => {
    const tasks = LS.get(`nj_day_${weekKey}_${day.key}`, [])
    total += tasks.length
    done += tasks.filter(t => t.done).length
  })
  const goals = LS.get(`nj_goals_${weekKey}`, DEFAULT_GOALS.map(g => ({ ...g, current: 0 })))
  const goalsCompleted = goals.filter(g => g.current >= g.target).length

  const pct = total > 0 ? Math.round(done / total * 100) : 0

  const getMessage = () => {
    if (total === 0) return 'Adiciona tarefas para começar a semana!'
    if (pct === 100) return 'Semana perfeita! Mantém esse ritmo 🚀'
    if (pct >= 70) return 'Ótimo progresso! Você está quase lá.'
    if (pct >= 40) return 'Bom trabalho! Continua assim.'
    return 'Vamos lá! Cada tarefa conta.'
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 text-white">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Progresso desta semana</div>
          <div className="text-4xl font-black mb-1">{pct}%</div>
          <div className="text-blue-100 text-sm">{getMessage()}</div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <div className="bg-white/10 rounded-xl px-3 py-2 text-center min-w-[72px]">
            <div className="text-xl font-black">
              {done}
              <span className="text-blue-300 font-normal text-sm">/{total}</span>
            </div>
            <div className="text-blue-200 text-xs">tarefas feitas</div>
          </div>
          <div className="bg-white/10 rounded-xl px-3 py-2 text-center min-w-[72px]">
            <div className="text-xl font-black">
              {goalsCompleted}
              <span className="text-blue-300 font-normal text-sm">/{goals.length}</span>
            </div>
            <div className="text-blue-200 text-xs">metas atingidas</div>
          </div>
        </div>
      </div>
      {total > 0 && (
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-white transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Tarefas diárias ──────────────────────────────────────────────────────────
const DAILY_TEMPLATES = [
  'Candidatar a 2 vagas',
  'Enviar 1 mensagem de networking',
  'Fazer 1 lição do curso',
  'Actualizar rastreador de candidaturas',
  'Rever pipeline de candidaturas',
]

function DayColumn({ day, weekKey, onSave }) {
  const storageKey = `nj_day_${weekKey}_${day.key}`
  const [tasks, setTasks] = useState(() => LS.get(storageKey, []))
  const [input, setInput] = useState('')
  const [adding, setAdding] = useState(false)

  const save = (updated) => {
    setTasks(updated)
    LS.set(storageKey, updated)
    onSave?.()
  }

  const addTask = (text) => {
    const t = text.trim()
    if (!t) return
    save([...tasks, { id: Date.now(), text: t, done: false }])
    setInput('')
    setAdding(false)
  }

  const toggle = (id) => save(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t))
  const remove = (id) => save(tasks.filter((t) => t.id !== id))

  const fillRoutine = () => {
    const newTasks = DAILY_TEMPLATES.map((text, i) => ({ id: Date.now() + i, text, done: false }))
    save(newTasks)
  }

  const doneCount = tasks.filter((t) => t.done).length
  const donePct = tasks.length > 0 ? Math.round(doneCount / tasks.length * 100) : 0
  const allDone = tasks.length > 0 && donePct === 100

  return (
    <div className={`rounded-2xl border p-3 flex flex-col gap-2 min-h-[180px] transition-all ${
      allDone ? 'border-green-200 bg-green-50' :
      day.isToday ? 'border-blue-300 bg-blue-50' :
      'border-slate-100 bg-white'
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <div className={`font-black text-sm ${allDone ? 'text-green-700' : day.isToday ? 'text-blue-700' : 'text-slate-700'}`}>
            {day.full}
            {day.isToday && !allDone && (
              <span className="ml-1.5 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full">Hoje</span>
            )}
            {allDone && (
              <span className="ml-1.5 text-xs bg-green-600 text-white px-1.5 py-0.5 rounded-full">✓</span>
            )}
          </div>
          <div className="text-slate-400 text-xs">{day.date} {day.month}</div>
        </div>
        {tasks.length > 0 && (
          <span className="text-xs text-slate-400">{doneCount}/{tasks.length}</span>
        )}
      </div>

      {tasks.length > 0 && (
        <div className="w-full bg-slate-100 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full transition-all duration-500 ${allDone ? 'bg-green-500' : 'bg-blue-400'}`}
            style={{ width: `${donePct}%` }}
          />
        </div>
      )}

      <div className="flex-1 space-y-1">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-1.5 group">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggle(task.id)}
              className="mt-0.5 flex-shrink-0 accent-blue-500"
            />
            <span className={`text-xs flex-1 leading-relaxed ${task.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>
              {task.text}
            </span>
            <button
              onClick={() => remove(task.id)}
              className="text-slate-200 hover:text-red-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
            >✕</button>
          </div>
        ))}
      </div>

      {adding ? (
        <div className="space-y-1.5">
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') addTask(input)
              if (e.key === 'Escape') { setAdding(false); setInput('') }
            }}
            placeholder="Nova tarefa..."
            className="w-full text-xs border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex gap-1">
            <button onClick={() => addTask(input)} className="flex-1 bg-blue-600 text-white text-xs py-1 rounded-lg hover:bg-blue-700">
              Adicionar
            </button>
            <button onClick={() => { setAdding(false); setInput('') }} className="text-xs text-slate-400 px-2">✕</button>
          </div>
          <div className="space-y-0.5">
            {DAILY_TEMPLATES.map((t) => (
              <button key={t} onClick={() => addTask(t)} className="w-full text-left text-xs text-slate-400 hover:text-blue-600 py-0.5 truncate">
                + {t}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button onClick={() => setAdding(true)} className="text-xs text-slate-400 hover:text-blue-600 text-left flex-1">
            + Adicionar tarefa
          </button>
          {tasks.length === 0 && (
            <button
              onClick={fillRoutine}
              className="text-xs text-blue-400 hover:text-blue-600 border border-blue-200 hover:border-blue-400 px-1.5 py-0.5 rounded-md transition-colors whitespace-nowrap"
            >
              Rotina
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Checklist de preparação semanal ─────────────────────────────────────────
const WEEKLY_PREP = [
  { id: 'update_cv', label: 'CV atualizado e revisado' },
  { id: 'linkedin_active', label: 'LinkedIn: publicou ou comentou algo esta semana' },
  { id: 'review_tracker', label: 'Rastreador de candidaturas atualizado' },
  { id: 'followups_sent', label: 'Todos os follow-ups pendentes enviados' },
  { id: 'new_contacts', label: 'Pelo menos 3 novas conexões no LinkedIn' },
]

function WeeklyPrep({ weekKey }) {
  const key = `nj_weekly_prep_${weekKey}`
  const [checked, setChecked] = useState(() => LS.get(key, {}))

  const toggle = (id) => {
    const next = { ...checked, [id]: !checked[id] }
    setChecked(next)
    LS.set(key, next)
  }

  const done = WEEKLY_PREP.filter((i) => checked[i.id]).length

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-bold text-slate-800 text-sm">Checklist semanal</div>
          <div className="text-slate-400 text-xs mt-0.5">Hábitos que fazem a diferença na busca</div>
        </div>
        <span className="text-sm font-bold text-slate-500">{done}/{WEEKLY_PREP.length}</span>
      </div>
      <div className="space-y-3">
        {WEEKLY_PREP.map((item) => (
          <label key={item.id} onClick={() => toggle(item.id)} className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
              checked[item.id] ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover:border-blue-400'
            }`}>
              {checked[item.id] && <span className="text-white text-[10px] font-bold">✓</span>}
            </div>
            <span className={`text-sm transition-colors leading-snug ${
              checked[item.id] ? 'line-through text-slate-400' : 'text-slate-700 group-hover:text-slate-900'
            }`}>
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

// ─── Notas da semana ──────────────────────────────────────────────────────────
function WeeklyNotes({ weekKey }) {
  const key = `nj_notes_${weekKey}`
  const [notes, setNotes] = useState(() => LS.get(key, ''))
  const [saved, setSaved] = useState(false)

  const save = (val) => {
    setNotes(val)
    LS.set(key, val)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-bold text-slate-800 text-sm">Notas da semana</div>
          <div className="text-slate-400 text-xs mt-0.5">Reflexões, ideias, aprendizagens</div>
        </div>
        {saved && <span className="text-xs text-green-600 font-medium">Salvo ✓</span>}
      </div>
      <textarea
        value={notes}
        onChange={(e) => save(e.target.value)}
        placeholder="O que correu bem esta semana? O que posso melhorar? Que empresas me interessaram?…"
        className="w-full text-sm text-slate-700 placeholder-slate-300 border border-slate-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        rows={5}
      />
    </div>
  )
}

// ─── Exportar relatório semanal ───────────────────────────────────────────────
function ExportModal({ weekKey, days, onClose }) {
  const goals = LS.get(`nj_goals_${weekKey}`, DEFAULT_GOALS.map(g => ({ ...g, current: 0 })))
  const notes = LS.get(`nj_notes_${weekKey}`, '')
  const prep = LS.get(`nj_weekly_prep_${weekKey}`, {})

  let total = 0, done = 0
  const dayTasks = days.map((day) => {
    const tasks = LS.get(`nj_day_${weekKey}_${day.key}`, [])
    total += tasks.length
    done += tasks.filter(t => t.done).length
    return { day, tasks }
  })

  const pct = total > 0 ? Math.round(done / total * 100) : 0
  const weekLabel = `Semana de ${days[0].date} ${days[0].month} a ${days[4].date} ${days[4].month}`

  const getText = () => {
    let t = `RELATÓRIO SEMANAL — JobJump\n${weekLabel}\n${'='.repeat(40)}\n\n`
    t += `PROGRESSO GERAL: ${pct}% (${done}/${total} tarefas)\n\n`
    t += `METAS SEMANAIS\n${'-'.repeat(20)}\n`
    goals.forEach(g => t += `${g.icon} ${g.label}: ${g.current}/${g.target}${g.current >= g.target ? ' ✓' : ''}\n`)
    t += `\nTAREFAS POR DIA\n${'-'.repeat(20)}\n`
    dayTasks.forEach(({ day, tasks }) => {
      if (tasks.length === 0) return
      t += `\n${day.full} (${day.date} ${day.month}):\n`
      tasks.forEach(task => t += `  ${task.done ? '[✓]' : '[ ]'} ${task.text}\n`)
    })
    t += `\nCHECKLIST SEMANAL\n${'-'.repeat(20)}\n`
    WEEKLY_PREP.forEach(item => t += `${prep[item.id] ? '[✓]' : '[ ]'} ${item.label}\n`)
    if (notes.trim()) t += `\nNOTAS\n${'-'.repeat(20)}\n${notes}\n`
    return t
  }

  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(getText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div>
            <div className="font-bold text-slate-800">Relatório da semana</div>
            <div className="text-slate-400 text-xs mt-0.5">{weekLabel}</div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-blue-700">{pct}%</div>
              <div className="text-xs text-blue-500">progresso</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-slate-700">{done}/{total}</div>
              <div className="text-xs text-slate-400">tarefas feitas</div>
            </div>
          </div>
          <pre className="bg-slate-50 rounded-xl p-4 text-xs text-slate-600 leading-relaxed whitespace-pre-wrap font-mono overflow-auto max-h-64">
            {getText()}
          </pre>
        </div>
        <div className="p-5 border-t border-slate-100 flex gap-3">
          <button
            onClick={copy}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            {copied ? '✓ Copiado!' : 'Copiar relatório'}
          </button>
          <button onClick={onClose} className="px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:text-slate-700 border border-slate-200">
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Página principal ──────────────────────────────────────────────────────────
export default function PlannerPage({ user }) {
  const [monday, setMonday] = useState(() => getMondayOf(new Date()))
  const [refreshKey, setRefreshKey] = useState(0)
  const [showExport, setShowExport] = useState(false)

  const weekKey = toKey(monday)
  const days = getWeekDays(monday)

  const now = new Date()
  const currentMonday = getMondayOf(now)
  const isCurrentWeek = toKey(currentMonday) === weekKey

  const fmt = (d) => d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })
  const weekEnd = new Date(monday)
  weekEnd.setDate(monday.getDate() + 6)

  const prevWeek = () => {
    const d = new Date(monday)
    d.setDate(d.getDate() - 7)
    setMonday(d)
  }

  const nextWeek = () => {
    if (isCurrentWeek) return
    const d = new Date(monday)
    d.setDate(d.getDate() + 7)
    setMonday(d)
  }

  const handleSave = useCallback(() => setRefreshKey(k => k + 1), [])

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {showExport && (
        <ExportModal weekKey={weekKey} days={days} onClose={() => setShowExport(false)} />
      )}
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Plano Semanal</h1>
          <p className="text-slate-500 text-sm mt-1">Organiza a sua busca com metas e tarefas diárias.</p>
        </div>
        <div className="flex items-center gap-2 self-start">
          <button
            onClick={() => setShowExport(true)}
            className="text-xs font-semibold text-slate-500 hover:text-slate-700 border border-slate-200 hover:border-slate-300 px-3 py-1.5 rounded-xl transition-colors bg-white"
          >
            Exportar relatório
          </button>
        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1.5">
          <button
            onClick={prevWeek}
            className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors text-lg"
          >‹</button>
          <span className="text-xs font-semibold text-slate-600 whitespace-nowrap px-1">
            {fmt(monday)} – {fmt(weekEnd)}
            {isCurrentWeek && <span className="ml-1.5 text-blue-500">· Esta semana</span>}
          </span>
          <button
            onClick={nextWeek}
            className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors text-lg ${
              isCurrentWeek ? 'text-slate-200 cursor-default' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
            disabled={isCurrentWeek}
          >›</button>
        </div>
        </div>
      </div>

      {/* Resumo */}
      <WeeklySummary key={refreshKey} weekKey={weekKey} days={days} />

      {/* Metas semanais */}
      <div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Metas desta semana</div>
        <GoalTracker weekKey={weekKey} />
        <p className="text-xs text-slate-400 mt-2">Clica nos +/− para atualizar o progresso. Metas resetam automaticamente toda segunda-feira.</p>
      </div>

      {/* Calendário semanal */}
      <div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tarefas do dia</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {days.map((day) => (
            <DayColumn key={`${weekKey}-${day.key}`} day={day} weekKey={weekKey} onSave={handleSave} />
          ))}
        </div>
      </div>

      {/* Checklist + Notas */}
      <div className="grid sm:grid-cols-2 gap-4">
        <WeeklyPrep weekKey={weekKey} />
        <WeeklyNotes weekKey={weekKey} />
      </div>

      {/* Dica */}
      {!isPaid(user.plan) && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-bold text-amber-800 text-sm mb-1">Dica de produtividade</div>
            <p className="text-amber-700 text-sm">
              Quem defina metas semanais claras envia 3× mais candidaturas e tem 2× mais entrevistas do que quem busca sem estrutura.
              Dedica 15 minutos toda segunda-feira a planear a semana.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
