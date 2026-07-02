import { useState, useEffect } from 'react'
import { Btn, Badge, ProgressBar } from '../ui'
import { renderMarkdown } from '../../utils/markdown'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'
import LessonQA from './LessonQA'
import {
  addXP, XP_LESSON, XP_MODULE, saveQuizScore,
  buildGamState, checkNewBadges, getQuizScores, getDiagnosis,
} from '../../utils/gamification'
import { addNotification } from '../../utils/notifications'
import { getModules, getLessonContent, getQuiz } from '../../lib/content'

// ─── Categorias e Trilhas ──────────────────────────────────────────────────────

const CAT_MAP = {
  busca:         { label: 'Busca',         icon: '🎯', ids: [1,2,3,4,5,6,9,11,14,15,16,17,19,22,25,28,31,49] },
  crescimento:   { label: 'Crescimento',   icon: '📈', ids: [7,8,12,13,18,20,24,29,30,34,35,37,39,40,41,43,46,50,52,56] },
  tech:          { label: 'Tech',          icon: '💻', ids: [26,33,36,48,59] },
  internacional: { label: 'Internacional', icon: '🌍', ids: [10,21,32,38,45,54] },
  areas:         { label: 'Áreas',         icon: '🏷️', ids: [23,42,44,47,51,53,55,57,58] },
}

// reverse lookup: moduleId → category key
const MODULE_CAT = {}
Object.entries(CAT_MAP).forEach(([cat, { ids }]) => ids.forEach((id) => { MODULE_CAT[id] = cat }))

const TRILHAS = [
  { id: 'essencial',    icon: '🎯', label: 'Trilha Essencial',   desc: 'CV, LinkedIn, Entrevistas e Negociação',         ids: [1,3,4,5,6] },
  { id: 'primeiro',     icon: '🚀', label: 'Primeiro Emprego',   desc: 'Do zero à primeira contratação',                ids: [49,1,2,3,4] },
  { id: 'tech',         icon: '💻', label: 'Carreira em Tech',   desc: 'Dados, PM, Dev, DevOps e IA',                   ids: [36,33,26,48,59] },
  { id: 'exterior',     icon: '🌍', label: 'Trabalhar Fora',     desc: 'Portugal, EUA, Austrália e remoto internacional', ids: [21,10,15,32,45] },
  { id: 'transicao',    icon: '🔀', label: 'Mudar de Área',      desc: 'Transição estratégica com portfólio e plano',    ids: [7,8,22,30,40] },
]

const CATEGORY_FILTERS = [
  { id: 'all',           label: 'Todos',         icon: '🌐' },
  { id: 'busca',         label: 'Busca',         icon: '🎯' },
  { id: 'tech',          label: 'Tech',          icon: '💻' },
  { id: 'crescimento',   label: 'Crescimento',   icon: '📈' },
  { id: 'internacional', label: 'Internacional', icon: '🌍' },
  { id: 'areas',         label: 'Áreas',         icon: '🏷️' },
]

const STATUS_FILTERS = [
  { id: 'all',        label: 'Todos' },
  { id: 'free',       label: 'Grátis' },
  { id: 'pro',        label: 'Pro' },
  { id: 'inprogress', label: 'Em progresso' },
  { id: 'done',       label: 'Concluídos' },
]

// lições que o utilizador consegue abrir: todo o módulo Pro, ou lições
// individualmente marcadas como Pro dentro de um módulo grátis
const accessibleLessons = (mod, user) => mod.lessons.filter((l) => !l.isPro || isPaid(user.plan))
const isLessonLocked    = (mod, l, user) => (mod.isPro || l.isPro) && !isPaid(user.plan)

// ─── Certificado de conclusão ─────────────────────────────────────────────
function downloadCertificate(mod, userName) {
  const date = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
  const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<title>Certificado — ${mod.title}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
  .cert { width: 800px; background: white; border: 8px solid #1e3a5f; padding: 60px; text-align: center; position: relative; }
  .cert::before { content: ''; position: absolute; inset: 10px; border: 2px solid #93c5fd; pointer-events: none; }
  .logo { font-size: 28px; font-weight: 900; color: #1e3a5f; letter-spacing: -1px; margin-bottom: 8px; }
  .sub { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 40px; }
  .certifica { font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 16px; }
  .nome { font-size: 38px; font-weight: 900; color: #0f172a; margin-bottom: 24px; }
  .texto { font-size: 15px; color: #475569; line-height: 1.7; margin-bottom: 32px; max-width: 500px; margin-left: auto; margin-right: auto; }
  .modulo { font-size: 22px; font-weight: 900; color: #1e3a5f; background: #eff6ff; padding: 16px 32px; border-radius: 12px; display: inline-block; margin-bottom: 32px; }
  .data { font-size: 13px; color: #94a3b8; margin-bottom: 40px; }
  .assinatura { border-top: 2px solid #e2e8f0; padding-top: 20px; display: inline-block; margin: 0 auto; }
  .ass-nome { font-weight: 700; color: #1e3a5f; font-size: 14px; }
  .ass-cargo { font-size: 12px; color: #94a3b8; }
  .icon { font-size: 48px; margin-bottom: 16px; }
  @media print { body { background: white; } .cert { border: 8px solid #1e3a5f; } }
</style></head><body>
<div class="cert">
  <div class="icon">${mod.icon}</div>
  <div class="logo">JobJump</div>
  <div class="sub">Coach de Carreira</div>
  <div class="certifica">Certifica que</div>
  <div class="nome">${userName || 'Profissional'}</div>
  <p class="texto">concluiu com sucesso todas as lições do módulo</p>
  <div class="modulo">${mod.title}</div>
  <div class="data">Concluído em ${date}</div>
  <div class="assinatura">
    <div class="ass-nome">JobJump Academy</div>
    <div class="ass-cargo">Plataforma de Desenvolvimento de Carreira</div>
  </div>
</div>
<script>window.onload = () => window.print()</script>
</body></html>`

  const win = window.open('', '_blank')
  if (win) { win.document.write(html); win.document.close() }
}

// ─── Notas por lição ───────────────────────────────────────────────────────
function LessonNotes({ lessonId }) {
  const key = `nj_notes_${lessonId}`
  const [note, setNote] = useState(() => LS.get(key, ''))
  const [saved, setSaved] = useState(false)
  const save = () => { LS.set(key, note); setSaved(true); setTimeout(() => setSaved(false), 1500) }
  return (
    <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">📝</span>
          <span className="font-bold text-amber-800 text-sm">Suas notas</span>
        </div>
        <button onClick={save} className="text-xs text-amber-700 hover:text-amber-900 font-semibold underline">
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

// ─── XP Toast ─────────────────────────────────────────────────────────────
function XPToast({ xp, label, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2200); return () => clearTimeout(t) }, [onDone])
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-bold">
      <span className="text-xl">⚡</span>
      <span>+{xp} XP · {label}</span>
    </div>
  )
}

// ─── Badge Toast ──────────────────────────────────────────────────────────
function BadgeToast({ badge, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 3000); return () => clearTimeout(t) }, [onDone])
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in bg-violet-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
      <span className="text-2xl">{badge.icon}</span>
      <div>
        <div className="text-xs text-violet-200 font-semibold uppercase tracking-wider">Conquista desbloqueada!</div>
        <div className="font-black text-sm">{badge.label}</div>
      </div>
    </div>
  )
}

// ─── Quiz ─────────────────────────────────────────────────────────────────
function ModuleQuiz({ questions, mod, onDone, progress, onXP }) {
  const scores = getQuizScores()
  const best      = scores[mod.id] ?? -1

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)

  if (!questions) return (
    <div className="text-center py-8">
      <div className="text-4xl mb-3">📝</div>
      <p className="text-slate-500 text-sm">Quiz em breve para este módulo.</p>
      <Btn onClick={onDone} variant="primary" size="sm" className="mt-4">Voltar ao módulo →</Btn>
    </div>
  )

  const q = questions[current]

  const choose = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    const correct = idx === q.correct
    setTimeout(() => {
      const next = [...answers, correct]
      setAnswers(next)
      if (current < questions.length - 1) {
        setCurrent(current + 1)
        setSelected(null)
      } else {
        const finalScore = next.filter(Boolean).length
        setScore(finalScore)
        setFinished(true)
        const earned = saveQuizScore(mod.id, finalScore)
        if (finalScore >= 3) onXP(finalScore === 5 ? 50 : 25, finalScore === 5 ? 'Quiz perfeito!' : 'Quiz aprovado!')
      }
    }, 900)
  }

  if (finished) {
    const stars = score >= 5 ? '⭐⭐⭐' : score >= 3 ? '⭐⭐' : '⭐'
    const msg   = score === 5 ? 'Perfeito! Você domina este conteúdo.' : score >= 3 ? 'Muito bem! Conteúdo absorvido.' : 'Continue estudando — você consegue melhorar.'
    return (
      <div className="text-center py-6 space-y-4 animate-fade-in">
        <div className="text-4xl">{stars}</div>
        <div className="text-3xl font-black text-slate-800">{score}/5</div>
        <p className="text-slate-600 text-sm">{msg}</p>
        {best >= 0 && best < score && <p className="text-green-600 text-xs font-semibold">🎉 Novo recorde! (anterior: {best}/5)</p>}
        {best === score && best >= 0 && score < 5 && <p className="text-slate-400 text-xs">Recorde mantido: {best}/5</p>}
        <div className="flex justify-center gap-3 pt-2">
          <Btn onClick={() => { setCurrent(0); setSelected(null); setAnswers([]); setFinished(false) }} variant="secondary" size="sm">
            Refazer
          </Btn>
          <Btn onClick={onDone} variant="primary" size="sm">Voltar ao módulo →</Btn>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Questão {current + 1} de {questions.length}</span>
        <div className="flex gap-1">{questions.map((_, i) => (
          <div key={i} className={`w-6 h-1.5 rounded-full transition-colors ${i < current ? 'bg-green-400' : i === current ? 'bg-blue-500' : 'bg-slate-200'}`} />
        ))}</div>
      </div>
      <h3 className="text-base font-bold text-slate-800 leading-relaxed">{q.q}</h3>
      <div className="space-y-2">
        {q.opts.map((opt, i) => {
          let cls = 'border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50'
          if (selected !== null) {
            if (i === q.correct) cls = 'border-green-400 bg-green-50 text-green-800'
            else if (i === selected && selected !== q.correct) cls = 'border-red-400 bg-red-50 text-red-700'
            else cls = 'border-slate-100 bg-slate-50 text-slate-400'
          }
          return (
            <button key={i} onClick={() => choose(i)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${cls} ${selected !== null ? 'cursor-default' : 'cursor-pointer'}`}>
              <span className="font-bold mr-2">{['A', 'B', 'C', 'D'][i]}.</span>{opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Vista da lição ────────────────────────────────────────────────────────
function LessonView({ mod, lesson, user, progress, onMarkDone, onBack, onNext, modules }) {
  const done = progress[lesson.id]
  const [toast, setToast] = useState(null)
  const [badgeToast, setBadgeToast] = useState(null)

  const handleMarkDone = (id) => {
    const wasAlreadyDone = progress[id]
    onMarkDone(id)
    if (!wasAlreadyDone) {
      addXP(XP_LESSON)
      addNotification('xp', 'Lição concluída!', `+${XP_LESSON} XP · ${lesson.title}`)
      setToast({ xp: XP_LESSON, label: 'Lição concluída!' })
      // check if module is now complete
      setTimeout(() => {
        const updatedProgress = { ...progress, [id]: true }
        if (mod.lessons.every((l) => updatedProgress[l.id])) {
          addXP(XP_MODULE)
          addNotification('module', `Módulo concluído! 🎓`, `+${XP_MODULE} XP · "${mod.title}"`)
          setToast({ xp: XP_MODULE, label: `Módulo "${mod.title}" concluído!` })
        }
        const state = buildGamState(updatedProgress, modules || [])
        const newBadges = checkNewBadges(state)
        if (newBadges.length) {
          setBadgeToast(newBadges[0])
          newBadges.forEach((b) =>
            addNotification('badge', `Badge desbloqueado: ${b.label}`, b.desc, b.icon)
          )
        }
      }, 300)
    }
  }

  return (
    <div className="p-6 animate-fade-in">
      {toast && <XPToast xp={toast.xp} label={toast.label} onDone={() => setToast(null)} />}
      {badgeToast && <BadgeToast badge={badgeToast} onDone={() => setBadgeToast(null)} />}

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
          <Btn onClick={() => handleMarkDone(lesson.id)} variant={done ? 'success' : 'secondary'} size="sm">
            {done ? '✓ Concluída' : 'Marcar como concluída'}
          </Btn>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
          {lesson.content == null
            ? (
              <div className="space-y-3 animate-pulse">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`h-4 bg-slate-100 rounded-full ${i === 4 ? 'w-2/3' : 'w-full'}`} />
                ))}
              </div>
            )
            : lesson.content === ''
            ? (
              <div className="text-center py-10 text-slate-400">
                <div className="text-3xl mb-2">🔒</div>
                <p className="text-sm">Conteúdo disponível apenas para utilizadores Pro.</p>
              </div>
            )
            : <div className="prose max-w-none" dangerouslySetInnerHTML={renderMarkdown(lesson.content)} />
          }
        </div>

        <LessonNotes lessonId={lesson.id} />

        <div className="mt-6 flex justify-between items-center">
          <button onClick={onBack} className="text-slate-500 hover:text-slate-700 text-sm flex items-center gap-1">
            ← Voltar ao módulo
          </button>
          <div className="flex gap-2">
            {!done && (
              <Btn onClick={() => handleMarkDone(lesson.id)} variant="secondary" size="sm">
                Marcar concluída
              </Btn>
            )}
            {onNext && (
              <Btn onClick={() => { if (!done) handleMarkDone(lesson.id); onNext() }} variant="primary" size="sm">
                Próxima lição →
              </Btn>
            )}
          </div>
        </div>

        <LessonQA user={user} moduleId={mod.id} lessonId={lesson.id} />
      </div>
    </div>
  )
}

// ─── Vista do módulo ───────────────────────────────────────────────────────
function ModuleView({ mod, user, progress, onOpenLesson, onBack, onOpenQuiz }) {
  const locked     = mod.isPro && !isPaid(user.plan)
  const lessons    = accessibleLessons(mod, user)
  const mCompleted = lessons.filter((l) => progress[l.id]).length
  const pct        = lessons.length ? Math.round((mCompleted / lessons.length) * 100) : 0
  const hasQuiz    = mod.hasQuiz ?? false
  const scores     = getQuizScores()
  const bestScore  = scores[mod.id]
  const allDone    = pct === 100

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
          const done         = progress[l.id]
          const lessonLocked = isLessonLocked(mod, l, user)
          return (
            <div
              key={l.id}
              onClick={() => !lessonLocked && onOpenLesson(l)}
              className={`bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-4 transition-all
                ${lessonLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md hover:border-blue-200'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                ${done ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {done ? '✓' : i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                  {l.title}
                  {!locked && l.isPro && <Badge className="bg-amber-100 text-amber-700 text-[10px]">Pro</Badge>}
                </div>
                <div className="text-slate-400 text-xs">⏱ {l.duration}
                  {LS.get(`nj_notes_${l.id}`) ? ' · 📝 tem notas' : ''}
                </div>
              </div>
              {!lessonLocked && <span className="text-slate-300 text-sm">{done ? '✅' : '→'}</span>}
              {lessonLocked && <span className="text-slate-300">🔒</span>}
            </div>
          )
        })}
      </div>

      {/* Quiz CTA */}
      {hasQuiz && !locked && (
        <div className={`mt-6 rounded-2xl p-5 border ${allDone ? 'bg-violet-50 border-violet-200' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🧠</span>
                <span className="font-bold text-slate-800 text-sm">Quiz do Módulo</span>
                {bestScore !== undefined && (
                  <span className="text-xs bg-violet-100 text-violet-700 font-bold px-2 py-0.5 rounded-full">
                    Melhor: {bestScore}/5
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-xs">
                {allDone ? 'Teste o que você aprendeu — 5 perguntas, +25-50 XP.' : 'Conclua todas as lições para desbloquear o quiz.'}
              </p>
            </div>
            <Btn
              onClick={onOpenQuiz}
              variant={allDone ? 'primary' : 'secondary'}
              size="sm"
              disabled={!allDone}
            >
              {bestScore !== undefined ? 'Refazer' : 'Iniciar'} Quiz →
            </Btn>
          </div>
        </div>
      )}

      {/* Certificate */}
      {allDone && !locked && (
        <div className="mt-6 rounded-2xl p-5 border bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🏆</span>
                <span className="font-bold text-amber-800 text-sm">Certificado de Conclusão</span>
              </div>
              <p className="text-amber-700 text-xs">Você concluiu todas as lições deste módulo. Baixe seu certificado!</p>
            </div>
            <Btn onClick={() => downloadCertificate(mod, user.name)} variant="primary" size="sm" className="flex-shrink-0">
              Baixar certificado →
            </Btn>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Cartão de módulo reutilizável ────────────────────────────────────────────

function ModuleCard({ m, user, progress, onOpenModule, rank }) {
  const locked     = m.isPro && !isPaid(user.plan)
  const lessons    = accessibleLessons(m, user)
  const mCompleted = lessons.filter((l) => progress[l.id]).length
  const pct        = lessons.length ? Math.round((mCompleted / lessons.length) * 100) : 0
  const hasQuiz    = m.hasQuiz ?? false
  return (
    <div
      onClick={() => onOpenModule(m)}
      className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-5 items-start transition-all cursor-pointer hover:shadow-md hover:border-blue-200"
    >
      {rank !== undefined && (
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black flex-shrink-0 mt-1">
          {rank}
        </div>
      )}
      <div className={`w-14 h-14 ${m.color.icon} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}>
        {pct === 100 ? '✅' : locked ? '🔒' : m.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-slate-800">{m.title}</h3>
          <div className="flex gap-1 flex-shrink-0">
            {hasQuiz && <span className="text-xs bg-violet-100 text-violet-600 font-bold px-1.5 py-0.5 rounded-full">Quiz</span>}
            {m.isPro && (
              <Badge className={isPaid(user.plan) ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}>
                {isPaid(user.plan) ? '⭐ Pro' : '🔒 Pro'}
              </Badge>
            )}
          </div>
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
}

// ─── Tabs de navegação de categoria ────────────────────────────────────────────

const CAT_TABS = [
  { id: 'all',           label: 'Todos',         icon: '🌐', selBg: 'bg-slate-800'   },
  { id: 'busca',         label: 'Busca',         icon: '🎯', selBg: 'bg-blue-600'    },
  { id: 'tech',          label: 'Tech',          icon: '💻', selBg: 'bg-violet-600'  },
  { id: 'crescimento',   label: 'Crescimento',   icon: '📈', selBg: 'bg-emerald-600' },
  { id: 'internacional', label: 'Internacional', icon: '🌍', selBg: 'bg-amber-500'   },
  { id: 'areas',         label: 'Áreas',         icon: '🏷️', selBg: 'bg-rose-600'    },
]

// ─── Lista de módulos ──────────────────────────────────────────────────────────

const PRO_TEASER_COUNT = 6

function ModuleList({ user, progress, onOpenModule, onGoToDiagnosis, onUpgrade, modules }) {
  const [search, setSearch]         = useState('')
  const [catFilter, setCatFilter]   = useState('all')
  const [statusFilter, setStatus]   = useState('all')
  const [activeTrilha, setTrilha]   = useState(null)
  const [trilhaOpen, setTrilhaOpen] = useState(false)

  const diagnosis = getDiagnosis()
  const diagIds   = new Set(diagnosis?.roadmap || [])
  const trilhaIds = activeTrilha ? new Set(TRILHAS.find((t) => t.id === activeTrilha)?.ids || []) : null
  const isTrilhasMode = trilhaOpen || !!activeTrilha

  const freeCount = modules.filter((m) => !m.isPro).length
  const proCount  = modules.length - freeCount

  // ── filter ─────────────────────────────────────────────────────────────────
  const filtered = modules.filter((m) => {
    if (trilhaIds) return trilhaIds.has(m.id)
    if (catFilter === 'recommended') return diagIds.has(m.id)

    const q = search.toLowerCase()
    if (q && !m.title.toLowerCase().includes(q) && !m.desc.toLowerCase().includes(q) &&
        !m.lessons.some((l) => l.title.toLowerCase().includes(q))) return false

    if (catFilter !== 'all' && MODULE_CAT[m.id] !== catFilter) return false

    const lessons = accessibleLessons(m, user)
    const pct = lessons.length ? Math.round(lessons.filter((l) => progress[l.id]).length / lessons.length * 100) : 0
    if (statusFilter === 'free')       return !m.isPro
    if (statusFilter === 'pro')        return m.isPro
    if (statusFilter === 'inprogress') return pct > 0 && pct < 100
    if (statusFilter === 'done')       return pct === 100
    return true
  })

  const sorted = activeTrilha
    ? TRILHAS.find((t) => t.id === activeTrilha)?.ids.map((id) => filtered.find((m) => m.id === id)).filter(Boolean) || filtered
    : catFilter === 'recommended'
      ? (diagnosis?.roadmap || []).map((id) => filtered.find((m) => m.id === id)).filter(Boolean)
      : filtered

  // free users browsing the unfiltered list get free modules first, with only a
  // teaser of Pro modules — showing all ~59 locked cards in a row isn't attractive
  const isDefaultView = catFilter === 'all' && statusFilter === 'all' && !search && !isTrilhasMode
  const collapsePro    = isDefaultView && !isPaid(user.plan)
  const freeList       = collapsePro ? sorted.filter((m) => !m.isPro) : []
  const proList        = collapsePro ? sorted.filter((m) => m.isPro) : []
  const proTeaser      = proList.slice(0, PRO_TEASER_COUNT)
  const proHiddenCount = proList.length - proTeaser.length

  // ── handlers ───────────────────────────────────────────────────────────────
  const pickCat = (id) => {
    setCatFilter(id); setTrilha(null); setTrilhaOpen(false); setSearch('')
  }
  const toggleTrilhaPanel = () => {
    const next = !trilhaOpen
    setTrilhaOpen(next)
    if (!next) setTrilha(null)
    setCatFilter('all'); setSearch('')
  }

  // ── render ─────────────────────────────────────────────────────────────────
  return (
    <div className="p-4 sm:p-6 animate-fade-in">

      {/* ── Header ── */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Módulos</h1>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {isPaid(user.plan)
              ? `${modules.length} módulos de carreira`
              : `${freeCount} módulos grátis para começar · ${proCount} Pro`}
          </p>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCatFilter('all'); setTrilha(null); setTrilhaOpen(false) }}
            placeholder="Pesquisar..."
            className="w-36 sm:w-44 pl-8 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          {search && <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">✕</button>}
        </div>
      </div>

      {/* ── Diagnóstico / Para você ── */}
      {diagnosis ? (
        <button
          onClick={() => pickCat(catFilter === 'recommended' ? 'all' : 'recommended')}
          className={`w-full mb-4 rounded-2xl px-4 py-3 flex items-center gap-3 transition-all text-left
            ${catFilter === 'recommended'
              ? 'bg-gradient-to-r from-blue-600 to-violet-600 shadow-md'
              : 'bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm'}`}
        >
          <span className="text-lg">📍</span>
          <div className="flex-1">
            <span className={`font-bold text-sm ${catFilter === 'recommended' ? 'text-white' : 'text-slate-800'}`}>Para você</span>
            <span className={`text-xs ml-2 ${catFilter === 'recommended' ? 'text-white/70' : 'text-slate-400'}`}>{diagnosis.roadmap.length} módulos do seu roteiro</span>
          </div>
          <span className={`text-xs font-semibold ${catFilter === 'recommended' ? 'text-white/70' : 'text-blue-500'}`}>
            {catFilter === 'recommended' ? '✓ ativo' : 'filtrar →'}
          </span>
        </button>
      ) : (
        <button
          onClick={onGoToDiagnosis}
          className="w-full mb-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl px-4 py-3.5 flex items-center gap-3 hover:shadow-md hover:shadow-blue-100 transition-all text-left"
        >
          <span className="text-xl">🗺️</span>
          <div className="flex-1">
            <div className="font-bold text-white text-sm">Descubra sua trilha personalizada</div>
            <div className="text-white/70 text-xs">6 perguntas · módulos certos para o seu perfil</div>
          </div>
          <span className="text-white/60 text-lg">→</span>
        </button>
      )}

      {/* ── Tabs de categoria ── */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-1" style={{ scrollbarWidth: 'none' }}>
        {CAT_TABS.map((t) => {
          const isActive = catFilter === t.id && !isTrilhasMode
          return (
            <button
              key={t.id}
              onClick={() => pickCat(t.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all
                ${isActive
                  ? `${t.selBg} text-white shadow-sm`
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
            >
              {t.icon} {t.label}
            </button>
          )
        })}
        <button
          onClick={toggleTrilhaPanel}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all
            ${isTrilhasMode
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
        >
          🛤️ Trilhas <span className={`transition-transform duration-200 inline-block ${isTrilhasMode ? 'rotate-180' : ''}`}>▾</span>
        </button>
      </div>

      {/* ── Trilha cards (estilo original) ── */}
      {isTrilhasMode && (
        <div className="flex gap-3 overflow-x-auto py-3 mb-1" style={{ scrollbarWidth: 'none' }}>
          {TRILHAS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTrilha(activeTrilha === t.id ? null : t.id)}
              className={`flex-shrink-0 rounded-2xl p-4 text-left border-2 transition-all w-44
                ${activeTrilha === t.id
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm'}`}
            >
              <div className="text-2xl mb-2">{t.icon}</div>
              <div className={`font-bold text-xs mb-1 leading-tight ${activeTrilha === t.id ? 'text-white' : 'text-slate-800'}`}>{t.label}</div>
              <div className={`text-[11px] leading-snug ${activeTrilha === t.id ? 'text-indigo-200' : 'text-slate-400'}`}>{t.desc}</div>
              <div className={`text-[10px] font-semibold mt-2 ${activeTrilha === t.id ? 'text-indigo-300' : 'text-slate-400'}`}>{t.ids.length} módulos</div>
            </button>
          ))}
        </div>
      )}

      {/* ── Status + count ── */}
      <div className="flex items-center gap-1.5 my-4 flex-wrap">
        {[['free','Grátis'],['pro','Pro'],['inprogress','Em progresso'],['done','Concluídos']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setStatus(statusFilter === id ? 'all' : id)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all
              ${statusFilter === id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
          >
            {label}
          </button>
        ))}
        <span className="text-[11px] text-slate-400 ml-auto">
          {activeTrilha && `${TRILHAS.find((t) => t.id === activeTrilha)?.icon} `}{sorted.length} módulos
        </span>
      </div>

      {/* ── Module list ── */}
      {sorted.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-sm">Nenhum módulo encontrado{search ? ` para "${search}"` : ''}.</p>
        </div>
      ) : collapsePro ? (
        <div className="space-y-4">
          {freeList.map((m) => (
            <ModuleCard key={m.id} m={m} user={user} progress={progress} onOpenModule={onOpenModule} />
          ))}

          {proTeaser.length > 0 && (
            <div className="pt-2 pb-1 flex items-center gap-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">⭐ Módulos Pro</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
          )}
          {proTeaser.map((m) => (
            <ModuleCard key={m.id} m={m} user={user} progress={progress} onOpenModule={onOpenModule} />
          ))}

          {proHiddenCount > 0 && (
            <button
              onClick={onUpgrade}
              className="w-full bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-dashed border-amber-300 rounded-2xl p-6 text-center hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-2">🔓</div>
              <div className="font-black text-slate-800 mb-1">+{proHiddenCount} módulos Pro esperando por você</div>
              <p className="text-slate-500 text-sm mb-4">Vendas, Tech, carreira internacional, liderança e muito mais — desbloqueie tudo com o Pro.</p>
              <span className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl group-hover:bg-amber-600 transition-colors">
                ⭐ Ver planos Pro →
              </span>
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {sorted.map((m, i) => (
            <ModuleCard
              key={m.id}
              m={m}
              user={user}
              progress={progress}
              onOpenModule={onOpenModule}
              rank={activeTrilha || catFilter === 'recommended' ? i + 1 : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Componente principal ──────────────────────────────────────────────────
export default function ModulesPage({ user, progress, setProgress, selectedModule: initModule, selectedLesson: initLesson, setSelectedModule, setSelectedLesson, onGoToDiagnosis, onUpgrade }) {
  const [modules, setModules]         = useState([])
  const [modulesLoading, setModLoad]  = useState(true)
  const [view, setView]               = useState(initModule ? (initLesson ? 'lesson' : 'module') : 'list')
  const [mod, setMod]                 = useState(initModule || null)
  const [lesson, setLesson]           = useState(initLesson || null)
  const [quiz, setQuiz]               = useState(null)
  const [xpToast, setXpToast]         = useState(null)

  // Load module list (stubs, no content) on mount
  useEffect(() => {
    getModules().then((list) => { setModules(list); setModLoad(false) })
  }, [])

  // Sync initModule prop changes (navigating from Diagnosis page)
  useEffect(() => {
    if (initModule) {
      // Find matching module in loaded list for correct hasQuiz/etc
      const found = modules.find((m) => m.id === initModule.id)
      setMod(found || initModule)
    }
  }, [initModule, modules])

  const openModule = (m) => { setMod(m); setView('module'); setSelectedModule(m) }

  const openLesson = async (l) => {
    // Navigate immediately with null content (shows skeleton)
    setLesson({ ...l, content: null })
    setView('lesson')
    setSelectedLesson(l)
    const content = await getLessonContent(l.id, mod?.id)
    // content is null if RLS blocked it (free user, pro lesson) → show locked state
    setLesson({ ...l, content: content ?? '' })
  }

  const openQuiz = async () => {
    setQuiz(null)
    setView('quiz')
    if (mod) {
      const questions = await getQuiz(mod.id)
      setQuiz(questions)
    }
  }

  const backToList = () => { setView('list'); setMod(null); setSelectedModule(null) }
  const backToMod  = () => { setView('module'); setLesson(null); setSelectedLesson(null); setQuiz(null) }
  const markDone   = (id) => setProgress((p) => ({ ...p, [id]: !p[id] }))

  const getNextLesson = () => {
    if (!mod || !lesson) return null
    const idx = mod.lessons.findIndex((l) => l.id === lesson.id)
    const next = idx >= 0 && idx < mod.lessons.length - 1 ? mod.lessons[idx + 1] : null
    return next && !isLessonLocked(mod, next, user) ? next : null
  }

  const goNext = () => {
    const next = getNextLesson()
    if (next) openLesson(next)
    else backToMod()
  }

  if (view === 'quiz' && mod) {
    return (
      <div className="p-6 animate-fade-in max-w-2xl">
        {xpToast && <XPToast xp={xpToast.xp} label={xpToast.label} onDone={() => setXpToast(null)} />}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={backToMod} className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm">← {mod.title}</button>
        </div>
        <h1 className="text-xl font-black text-slate-800 mb-1">🧠 Quiz — {mod.title}</h1>
        <p className="text-slate-500 text-sm mb-6">5 perguntas sobre o que você aprendeu. Tire 5/5 para ganhar +50 XP!</p>
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          {quiz === null
            ? <div className="text-center py-8 text-slate-400 text-sm animate-pulse">A carregar quiz…</div>
            : <ModuleQuiz
                questions={quiz}
                mod={mod}
                progress={progress}
                onDone={backToMod}
                onXP={(xp, label) => setXpToast({ xp, label })}
              />
          }
        </div>
      </div>
    )
  }

  if (view === 'lesson' && lesson) {
    return (
      <LessonView
        mod={mod}
        lesson={lesson}
        user={user}
        progress={progress}
        onMarkDone={markDone}
        onBack={backToMod}
        onNext={getNextLesson() ? goNext : null}
        modules={modules}
      />
    )
  }

  if (view === 'module' && mod) {
    return (
      <ModuleView
        mod={mod}
        user={user}
        progress={progress}
        onOpenLesson={openLesson}
        onBack={backToList}
        onOpenQuiz={openQuiz}
      />
    )
  }

  if (modulesLoading) {
    return (
      <div className="p-4 sm:p-6 animate-fade-in">
        <div className="h-8 w-32 bg-slate-200 rounded-lg animate-pulse mb-1" />
        <div className="h-4 w-48 bg-slate-100 rounded animate-pulse mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-3 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-4 w-3/4 bg-slate-200 rounded" />
                  <div className="h-3 w-1/2 bg-slate-100 rounded" />
                </div>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded" />
              <div className="h-3 w-5/6 bg-slate-100 rounded" />
              <div className="h-8 w-full bg-slate-100 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <ModuleList
      user={user}
      progress={progress}
      onOpenModule={openModule}
      onGoToDiagnosis={onGoToDiagnosis}
      onUpgrade={onUpgrade}
      modules={modules}
    />
  )
}
