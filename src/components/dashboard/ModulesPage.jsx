import { useState, useEffect } from 'react'
import { Btn, Badge, ProgressBar } from '../ui'
import { MODULES } from '../../data/modules'
import { renderMarkdown } from '../../utils/markdown'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'

// ─── Notas por lição ───────────────────────────────────────────────────────
function LessonNotes({ lessonId }) {
  const key = `nj_notes_${lessonId}`
  const [note, setNote] = useState(() => LS.get(key, ''))
  const [saved, setSaved] = useState(false)

  const save = () => {
    LS.set(key, note)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">📝</span>
          <span className="font-bold text-amber-800 text-sm">Suas notas</span>
        </div>
        <button
          onClick={save}
          className="text-xs text-amber-700 hover:text-amber-900 font-semibold underline"
        >
          {saved ? '✓ Salvo' : 'Salvar'}
        </button>
      </div>
      <textarea
        value={note}
        onChange={(e) => { setNote(e.target.value); setSaved(false) }}
        onBlur={save}
        placeholder="Escreve aqui os pontos-chave, ideias ou tarefas desta lição..."
        rows={4}
        className="w-full bg-white border border-amber-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
      />
    </div>
  )
}

// ─── Vista da lição ────────────────────────────────────────────────────────
function LessonView({ mod, lesson, progress, onMarkDone, onBack, onNext }) {
  const done = progress[lesson.id]

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm">
          ← Voltar
        </button>
        <span className="text-slate-300">|</span>
        <span className="text-sm text-slate-500 truncate">{mod?.title} › {lesson.title}</span>
      </div>

      <div className="max-w-3xl">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-black text-slate-800">{lesson.title}</h1>
            <span className="text-slate-400 text-sm">⏱ {lesson.duration}</span>
          </div>
          <Btn onClick={() => onMarkDone(lesson.id)} variant={done ? 'success' : 'secondary'} size="sm">
            {done ? '✓ Concluída' : 'Marcar como concluída'}
          </Btn>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
          <div className="prose max-w-none" dangerouslySetInnerHTML={renderMarkdown(lesson.content)} />
        </div>

        <LessonNotes lessonId={lesson.id} />

        <div className="mt-6 flex justify-between items-center">
          <button onClick={onBack} className="text-slate-500 hover:text-slate-700 text-sm flex items-center gap-1">
            ← Voltar ao módulo
          </button>
          <div className="flex gap-2">
            {!done && (
              <Btn onClick={() => { onMarkDone(lesson.id) }} variant="secondary" size="sm">
                Marcar concluída
              </Btn>
            )}
            {onNext && (
              <Btn onClick={() => { if (!done) onMarkDone(lesson.id); onNext() }} variant="primary" size="sm">
                Próxima lição →
              </Btn>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Vista do módulo ───────────────────────────────────────────────────────
function ModuleView({ mod, user, progress, onOpenLesson, onBack }) {
  const locked = mod.isPro && !isPaid(user.plan)
  const mCompleted = mod.lessons.filter((l) => progress[l.id]).length
  const pct = Math.round((mCompleted / mod.lessons.length) * 100)

  return (
    <div className="p-6 animate-fade-in">
      <button onClick={onBack} className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm mb-6">
        ← Todos os módulos
      </button>

      <div className={`rounded-2xl p-6 mb-6 ${mod.color.bg} border ${mod.color.border}`}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">{mod.icon}</div>
          <div className="flex-1">
            <h1 className="text-2xl font-black text-slate-800 mb-2">{mod.title}</h1>
            <p className="text-slate-600 text-sm mb-4">{mod.desc}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>⏱ {mod.duration}</span>
              <span>📖 {mod.lessons.length} lições</span>
              <span>✓ {mCompleted} concluídas</span>
            </div>
            <div className="mt-4"><ProgressBar pct={pct} /></div>
          </div>
        </div>
      </div>

      {locked && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-center gap-3">
          <span className="text-2xl">🔒</span>
          <div>
            <div className="font-bold text-amber-800 text-sm">Módulo Pro</div>
            <div className="text-amber-700 text-xs">Faz upgrade para o plano Pro nas Definições para desbloquear.</div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {mod.lessons.map((l, i) => {
          const done = progress[l.id]
          return (
            <div
              key={l.id}
              onClick={() => !locked && onOpenLesson(l)}
              className={`bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-4 transition-all
                ${locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md hover:border-blue-200'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                ${done ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {done ? '✓' : i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-700 text-sm">{l.title}</div>
                <div className="text-slate-400 text-xs">⏱ {l.duration}
                  {LS.get(`nj_notes_${l.id}`) ? ' · 📝 tem notas' : ''}
                </div>
              </div>
              {!locked && <span className="text-slate-300 text-sm">{done ? '✅' : '→'}</span>}
              {locked && <span className="text-slate-300">🔒</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Lista de módulos com filtros ──────────────────────────────────────────
const FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'free', label: 'Grátis' },
  { id: 'pro', label: 'Pro' },
  { id: 'inprogress', label: 'Em progresso' },
  { id: 'done', label: 'Concluídos' },
]

function ModuleList({ user, progress, onOpenModule }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = MODULES.filter((m) => {
    const q = search.toLowerCase()
    const matchSearch = !q || m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) ||
      m.lessons.some((l) => l.title.toLowerCase().includes(q))
    if (!matchSearch) return false

    const completed = m.lessons.filter((l) => progress[l.id]).length
    const pct = Math.round((completed / m.lessons.length) * 100)

    if (filter === 'free') return !m.isPro
    if (filter === 'pro') return m.isPro
    if (filter === 'inprogress') return pct > 0 && pct < 100
    if (filter === 'done') return pct === 100
    return true
  })

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-black text-slate-800 mb-2">Módulos de Aprendizagem</h1>
      <p className="text-slate-500 text-sm mb-4">Sua jornada para conseguir o emprego perfeito.</p>

      {/* Search */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar módulos e lições..."
          className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs">✕</button>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all
              ${filter === f.id
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {f.label}
          </button>
        ))}
        <span className="text-xs text-slate-400 self-center ml-auto">
          {filtered.length} de {MODULES.length} módulos
        </span>
      </div>

      {/* Module cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-sm">Nenhum módulo encontrado para "{search}"</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((m) => {
            const locked = m.isPro && !isPaid(user.plan)
            const mCompleted = m.lessons.filter((l) => progress[l.id]).length
            const pct = Math.round((mCompleted / m.lessons.length) * 100)
            return (
              <div
                key={m.id}
                onClick={() => onOpenModule(m)}
                className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-5 items-start transition-all cursor-pointer hover:shadow-md hover:border-blue-200"
              >
                <div className={`w-14 h-14 ${m.color.icon} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}>
                  {pct === 100 ? '✅' : locked ? '🔒' : m.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-800">{m.title}</h3>
                    {m.isPro && (
                      <Badge className={isPaid(user.plan) ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}>
                        {isPaid(user.plan) ? '⭐ Pro' : '🔒 Pro'}
                      </Badge>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm mb-3 line-clamp-2">{m.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span>⏱ {m.duration}</span>
                    <span>📖 {m.lessons.length} lições</span>
                    {pct === 100 && <span className="text-green-600 font-semibold">✓ Concluído</span>}
                  </div>
                  <ProgressBar pct={pct} />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>{mCompleted}/{m.lessons.length} concluídas</span>
                    <span>{pct}%</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ─── Componente principal ──────────────────────────────────────────────────
export default function ModulesPage({ user, progress, setProgress, selectedModule: initModule, selectedLesson: initLesson, setSelectedModule, setSelectedLesson }) {
  const [view, setView] = useState(initModule ? (initLesson ? 'lesson' : 'module') : 'list')
  const [mod, setMod] = useState(initModule || null)
  const [lesson, setLesson] = useState(initLesson || null)

  const openModule = (m) => { setMod(m); setView('module'); setSelectedModule(m) }
  const openLesson = (l) => { setLesson(l); setView('lesson'); setSelectedLesson(l) }
  const backToList = () => { setView('list'); setMod(null); setSelectedModule(null) }
  const backToModule = () => { setView('module'); setLesson(null); setSelectedLesson(null) }
  const markDone = (id) => setProgress((p) => ({ ...p, [id]: !p[id] }))

  const getNextLesson = () => {
    if (!mod || !lesson) return null
    const idx = mod.lessons.findIndex((l) => l.id === lesson.id)
    return idx >= 0 && idx < mod.lessons.length - 1 ? mod.lessons[idx + 1] : null
  }

  const goNext = () => {
    const next = getNextLesson()
    if (next) openLesson(next)
    else backToModule()
  }

  if (view === 'lesson' && lesson) {
    return (
      <LessonView
        mod={mod}
        lesson={lesson}
        progress={progress}
        onMarkDone={markDone}
        onBack={backToModule}
        onNext={getNextLesson() ? goNext : null}
      />
    )
  }

  if (view === 'module' && mod) {
    return <ModuleView mod={mod} user={user} progress={progress} onOpenLesson={openLesson} onBack={backToList} />
  }

  return <ModuleList user={user} progress={progress} onOpenModule={openModule} />
}
