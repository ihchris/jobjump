import { useState } from 'react'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getWeekKey() {
  const now = new Date()
  const day = now.getDay()
  const monday = new Date(now)
  monday.setDate(now.getDate() - ((day + 6) % 7))
  return monday.toISOString().split('T')[0]
}

function getWeekDays() {
  const week = []
  const now = new Date()
  const day = now.getDay()
  const monday = new Date(now)
  monday.setDate(now.getDate() - ((day + 6) % 7))
  const LABELS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
  const FULL = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
  for (let i = 0; i < 5; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    week.push({
      key: d.toISOString().split('T')[0],
      short: LABELS[i],
      full: FULL[i],
      date: d.getDate(),
      isToday: d.toDateString() === now.toDateString(),
    })
  }
  return week
}

// ─── Metas da semana ──────────────────────────────────────────────────────────
const DEFAULT_GOALS = [
  { id: 'applications', label: 'Candidaturas enviadas', icon: '📨', target: 10, unit: '' },
  { id: 'networking', label: 'Contactos de networking', icon: '🤝', target: 5, unit: '' },
  { id: 'lessons', label: 'Lições concluídas', icon: '📚', target: 3, unit: '' },
  { id: 'interviews', label: 'Entrevistas agendadas', icon: '🎯', target: 1, unit: '' },
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
    <div className="grid sm:grid-cols-2 gap-3">
      {goals.map((g) => {
        const pct = Math.min(100, Math.round((g.current / g.target) * 100))
        const done = g.current >= g.target
        return (
          <div key={g.id} className={`bg-white rounded-2xl border p-4 transition-all ${done ? 'border-green-200 bg-green-50' : 'border-slate-100'}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{g.icon}</span>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{g.label}</div>
                  <div className="text-slate-400 text-xs">
                    Meta: {' '}
                    <input
                      type="number"
                      min="1"
                      value={g.target}
                      onChange={(e) => editTarget(g.id, e.target.value)}
                      className="w-10 text-xs border-b border-slate-300 focus:outline-none focus:border-blue-400 bg-transparent text-center"
                    />
                    {g.unit}
                  </div>
                </div>
              </div>
              {done && <span className="text-green-600 text-lg">✅</span>}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => update(g.id, -1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-sm flex items-center justify-center transition-colors"
              >
                −
              </button>
              <div className="flex-1">
                <div className="w-full bg-slate-100 rounded-full h-2 mb-1">
                  <div
                    className={`h-2 rounded-full transition-all ${done ? 'bg-green-500' : 'bg-blue-500'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="text-center text-xs font-bold text-slate-600">
                  {g.current} / {g.target}
                </div>
              </div>
              <button
                onClick={() => update(g.id, 1)}
                className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-sm flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
          </div>
        )
      })}
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

function DayColumn({ day, weekKey }) {
  const storageKey = `nj_day_${weekKey}_${day.key}`
  const [tasks, setTasks] = useState(() => LS.get(storageKey, []))
  const [input, setInput] = useState('')
  const [adding, setAdding] = useState(false)

  const save = (updated) => { setTasks(updated); LS.set(storageKey, updated) }

  const addTask = (text) => {
    const t = text.trim()
    if (!t) return
    save([...tasks, { id: Date.now(), text: t, done: false }])
    setInput('')
    setAdding(false)
  }

  const toggle = (id) => save(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t))
  const remove = (id) => save(tasks.filter((t) => t.id !== id))

  const donePct = tasks.length > 0 ? Math.round((tasks.filter((t) => t.done).length / tasks.length) * 100) : 0

  return (
    <div className={`rounded-2xl border p-3 flex flex-col gap-2 min-h-[180px] transition-all ${day.isToday ? 'border-blue-300 bg-blue-50' : 'border-slate-100 bg-white'}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className={`font-black text-sm ${day.isToday ? 'text-blue-700' : 'text-slate-700'}`}>
            {day.full}
            {day.isToday && <span className="ml-1.5 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full">Hoje</span>}
          </div>
          <div className="text-slate-400 text-xs">{day.date}</div>
        </div>
        {tasks.length > 0 && (
          <span className="text-xs text-slate-400">{tasks.filter((t) => t.done).length}/{tasks.length}</span>
        )}
      </div>

      {tasks.length > 0 && (
        <div className="w-full bg-slate-100 rounded-full h-1">
          <div className={`h-1 rounded-full transition-all ${donePct === 100 ? 'bg-green-500' : 'bg-blue-400'}`} style={{ width: `${donePct}%` }} />
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
            >
              ✕
            </button>
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
            <button onClick={() => { setAdding(false); setInput('') }} className="text-xs text-slate-400 px-2">
              ✕
            </button>
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
        <button
          onClick={() => setAdding(true)}
          className="text-xs text-slate-400 hover:text-blue-600 text-left"
        >
          + Adicionar tarefa
        </button>
      )}
    </div>
  )
}

// ─── Checklist de preparação semanal ─────────────────────────────────────────
const WEEKLY_PREP = [
  { id: 'update_cv', label: 'CV actualizado e revisado' },
  { id: 'linkedin_active', label: 'LinkedIn: publicou ou comentou algo esta semana' },
  { id: 'review_tracker', label: 'Rastreador de candidaturas actualizado' },
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
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Preparação semanal</div>
        <span className="text-xs text-slate-400">{done}/{WEEKLY_PREP.length}</span>
      </div>
      <div className="space-y-2">
        {WEEKLY_PREP.map((item) => (
          <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={!!checked[item.id]}
              onChange={() => toggle(item.id)}
              className="w-4 h-4 rounded accent-blue-500 flex-shrink-0"
            />
            <span className={`text-sm transition-colors ${checked[item.id] ? 'line-through text-slate-400' : 'text-slate-700 group-hover:text-slate-900'}`}>
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

// ─── Página principal ──────────────────────────────────────────────────────────
export default function PlannerPage({ user }) {
  const weekKey = getWeekKey()
  const days = getWeekDays()

  const weekStart = new Date(weekKey)
  const weekEnd = new Date(weekKey)
  weekEnd.setDate(weekEnd.getDate() + 6)
  const fmt = (d) => d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black text-slate-800">Plano Semanal</h1>
        <p className="text-slate-500 text-sm mt-1">
          Semana de {fmt(weekStart)} a {fmt(weekEnd)} · Organiza a tua busca com metas e tarefas diárias.
        </p>
      </div>

      {/* Metas semanais */}
      <div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Metas desta semana</div>
        <GoalTracker weekKey={weekKey} />
        <p className="text-xs text-slate-400 mt-2">Clica nos +/− para actualizar o progresso. Metas resetam automaticamente toda segunda-feira.</p>
      </div>

      {/* Calendário semanal */}
      <div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tarefas do dia</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {days.map((day) => (
            <DayColumn key={day.key} day={day} weekKey={weekKey} />
          ))}
        </div>
      </div>

      {/* Checklist semanal */}
      <WeeklyPrep weekKey={weekKey} />

      {/* Dica */}
      {!isPaid(user.plan) && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-bold text-amber-800 text-sm mb-1">Dica de produtividade</div>
            <p className="text-amber-700 text-sm">
              Quem define metas semanais claras envia 3× mais candidaturas e tem 2× mais entrevistas do que quem busca sem estrutura.
              Dedica 15 minutos toda segunda-feira a planear a semana.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
