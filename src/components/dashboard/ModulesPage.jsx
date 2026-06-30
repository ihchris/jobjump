import { useState, useEffect } from 'react'
import { Btn, Badge, ProgressBar } from '../ui'
import { MODULES } from '../../data/modules'
import { QUIZZES } from '../../data/quizzes'
import { renderMarkdown } from '../../utils/markdown'
import { LS } from '../../utils/storage'
import { isPaid } from '../../utils/plans'
import {
  addXP, XP_LESSON, XP_MODULE, saveQuizScore,
  buildGamState, checkNewBadges, getQuizScores, getDiagnosis,
} from '../../utils/gamification'

// ─── Categorias e Trilhas ──────────────────────────────────────────────────────

const CAT_MAP = {
  busca:         { label: 'Busca',         icon: '🎯', ids: [1,2,3,4,5,6,9,11,14,15,16,17,19,22,25,27,28,31,49] },
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
function ModuleQuiz({ mod, onDone, progress, onXP }) {
  const questions = QUIZZES[mod.id]
  const scores    = getQuizScores()
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
function LessonView({ mod, lesson, progress, onMarkDone, onBack, onNext }) {
  const done = progress[lesson.id]
  const [toast, setToast] = useState(null)
  const [badgeToast, setBadgeToast] = useState(null)

  const handleMarkDone = (id) => {
    const wasAlreadyDone = progress[id]
    onMarkDone(id)
    if (!wasAlreadyDone) {
      const newXP = addXP(XP_LESSON)
      setToast({ xp: XP_LESSON, label: 'Lição concluída!' })
      // check if module is now complete
      setTimeout(() => {
        const updatedProgress = { ...progress, [id]: true }
        if (mod.lessons.every((l) => updatedProgress[l.id])) {
          addXP(XP_MODULE)
          setToast({ xp: XP_MODULE, label: `Módulo "${mod.title}" concluído!` })
        }
        const state = buildGamState(updatedProgress, MODULES)
        const newBadges = checkNewBadges(state)
        if (newBadges.length) setBadgeToast(newBadges[0])
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
          <div className="prose max-w-none" dangerouslySetInnerHTML={renderMarkdown(lesson.content)} />
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
      </div>
    </div>
  )
}

// ─── Vista do módulo ───────────────────────────────────────────────────────
function ModuleView({ mod, user, progress, onOpenLesson, onBack, onOpenQuiz }) {
  const locked     = mod.isPro && !isPaid(user.plan)
  const mCompleted = mod.lessons.filter((l) => progress[l.id]).length
  const pct        = Math.round((mCompleted / mod.lessons.length) * 100)
  const hasQuiz    = !!QUIZZES[mod.id]
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
  const mCompleted = m.lessons.filter((l) => progress[l.id]).length
  const pct        = Math.round((mCompleted / m.lessons.length) * 100)
  const hasQuiz    = !!QUIZZES[m.id]
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

// ─── Secção de recomendações do diagnóstico ───────────────────────────────────

function RecommendedSection({ diagnosis, user, progress, onOpenModule, onSeeAll }) {
  const topIds = (diagnosis.roadmap || []).slice(0, 3)
  const modules = topIds.map((id) => MODULES.find((m) => m.id === id)).filter(Boolean)
  if (!modules.length) return null

  const goalLabels = {
    first_job: 'primeiro emprego', new_company: 'mudar de empresa',
    career_change: 'mudar de área', abroad: 'trabalhar no exterior', promotion: 'crescer na empresa',
  }
  const goal = goalLabels[diagnosis.answers?.goal] || 'seu objetivo'

  return (
    <div className="mb-6 bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-lg">📍</span>
            <h2 className="font-black text-slate-800 text-sm">Recomendados para você</h2>
          </div>
          <p className="text-slate-500 text-xs">Com base no seu diagnóstico — foco em {goal}</p>
        </div>
        <button
          onClick={onSeeAll}
          className="text-xs text-blue-600 font-semibold hover:underline flex-shrink-0"
        >
          Ver roteiro completo →
        </button>
      </div>
      <div className="space-y-2">
        {modules.map((m, i) => {
          const locked = m.isPro && !isPaid(user.plan)
          const pct = Math.round(m.lessons.filter((l) => progress[l.id]).length / m.lessons.length * 100)
          return (
            <div
              key={m.id}
              onClick={() => !locked && onOpenModule(m)}
              className={`bg-white rounded-xl p-3 flex items-center gap-3 border border-slate-100 transition-all
                ${locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:border-blue-300 hover:shadow-sm'}`}
            >
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                {i + 1}
              </div>
              <div className={`w-9 h-9 ${m.color.icon} rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                {locked ? '🔒' : m.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-800 text-xs truncate">{m.title}</div>
                <div className="text-slate-400 text-[11px]">{m.lessons.length} lições · {m.duration}{pct > 0 && pct < 100 ? ` · ${pct}% feito` : pct === 100 ? ' · ✓ Concluído' : ''}</div>
              </div>
              {!locked && <span className="text-slate-300 text-sm">→</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Secção de trilhas ────────────────────────────────────────────────────────

function TrilhasSection({ onSelectTrilha, activeTrilha }) {
  return (
    <div className="mb-5">
      <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Trilhas Curadas</h2>
      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
        {TRILHAS.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelectTrilha(activeTrilha === t.id ? null : t.id)}
            className={`flex-shrink-0 rounded-2xl p-4 text-left border transition-all w-44
              ${activeTrilha === t.id
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'}`}
          >
            <div className="text-2xl mb-1.5">{t.icon}</div>
            <div className={`font-bold text-xs mb-0.5 ${activeTrilha === t.id ? 'text-white' : 'text-slate-800'}`}>{t.label}</div>
            <div className={`text-[11px] leading-tight ${activeTrilha === t.id ? 'text-blue-100' : 'text-slate-400'}`}>{t.desc}</div>
            <div className={`text-[10px] font-semibold mt-2 ${activeTrilha === t.id ? 'text-blue-200' : 'text-slate-400'}`}>{t.ids.length} módulos</div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Lista de módulos com filtros ──────────────────────────────────────────

function ModuleList({ user, progress, onOpenModule, onGoToDiagnosis }) {
  const [search, setSearch] = useState('')
  const [catFilter, setCatFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [activeTrilha, setActiveTrilha] = useState(null)

  const diagnosis = getDiagnosis()

  const trilhaIds = activeTrilha ? new Set(TRILHAS.find((t) => t.id === activeTrilha)?.ids || []) : null

  const filtered = MODULES.filter((m) => {
    // trilha override
    if (trilhaIds) return trilhaIds.has(m.id)

    const q = search.toLowerCase()
    const matchSearch = !q || m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) ||
      m.lessons.some((l) => l.title.toLowerCase().includes(q))
    if (!matchSearch) return false

    // category filter
    if (catFilter !== 'all' && MODULE_CAT[m.id] !== catFilter) return false

    // status filter
    const completed = m.lessons.filter((l) => progress[l.id]).length
    const pct = Math.round((completed / m.lessons.length) * 100)
    if (statusFilter === 'free') return !m.isPro
    if (statusFilter === 'pro') return m.isPro
    if (statusFilter === 'inprogress') return pct > 0 && pct < 100
    if (statusFilter === 'done') return pct === 100
    return true
  })

  // keep trilha order when a trilha is active
  const sorted = activeTrilha
    ? TRILHAS.find((t) => t.id === activeTrilha)?.ids.map((id) => filtered.find((m) => m.id === id)).filter(Boolean) || filtered
    : filtered

  const selectTrilha = (id) => {
    setActiveTrilha(id)
    if (id) { setCatFilter('all'); setStatusFilter('all'); setSearch('') }
  }

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-black text-slate-800 mb-1">Módulos de Aprendizagem</h1>
      <p className="text-slate-500 text-sm mb-5">Sua jornada para conseguir o emprego perfeito.</p>

      {/* Recomendados */}
      {diagnosis ? (
        <RecommendedSection
          diagnosis={diagnosis}
          user={user}
          progress={progress}
          onOpenModule={onOpenModule}
          onSeeAll={onGoToDiagnosis}
        />
      ) : (
        <button
          onClick={onGoToDiagnosis}
          className="w-full mb-5 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-300 transition-all text-left"
        >
          <span className="text-3xl">🗺️</span>
          <div>
            <div className="font-bold text-slate-800 text-sm">Descubra sua trilha ideal</div>
            <div className="text-slate-500 text-xs">Faça o diagnóstico de carreira e receba módulos personalizados para o seu perfil.</div>
          </div>
          <span className="ml-auto text-blue-500 font-semibold text-sm flex-shrink-0">Fazer agora →</span>
        </button>
      )}

      {/* Trilhas */}
      <TrilhasSection onSelectTrilha={selectTrilha} activeTrilha={activeTrilha} />

      {/* Search */}
      {!activeTrilha && (
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
      )}

      {/* Filters */}
      {!activeTrilha && (
        <div className="space-y-2 mb-5">
          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {CATEGORY_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setCatFilter(f.id)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0
                  ${catFilter === f.id ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>
          {/* Status filters */}
          <div className="flex gap-2 flex-wrap items-center">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setStatusFilter(f.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all
                  ${statusFilter === f.id ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'}`}
              >
                {f.label}
              </button>
            ))}
            <span className="text-xs text-slate-400 ml-auto">{sorted.length} de {MODULES.length} módulos</span>
          </div>
        </div>
      )}

      {/* Active trilha header */}
      {activeTrilha && (
        <div className="flex items-center gap-3 mb-4">
          {(() => { const t = TRILHAS.find((x) => x.id === activeTrilha); return t ? (
            <>
              <span className="text-2xl">{t.icon}</span>
              <div>
                <div className="font-black text-slate-800 text-sm">{t.label}</div>
                <div className="text-slate-500 text-xs">{t.desc}</div>
              </div>
            </>
          ) : null })()}
          <button
            onClick={() => selectTrilha(null)}
            className="ml-auto text-xs text-slate-400 hover:text-slate-600 border border-slate-200 rounded-full px-3 py-1"
          >
            ✕ Limpar trilha
          </button>
        </div>
      )}

      {sorted.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-sm">Nenhum módulo encontrado{search ? ` para "${search}"` : ''}.</p>
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
              rank={activeTrilha ? i + 1 : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Componente principal ──────────────────────────────────────────────────
export default function ModulesPage({ user, progress, setProgress, selectedModule: initModule, selectedLesson: initLesson, setSelectedModule, setSelectedLesson, onGoToDiagnosis }) {
  const [view, setView]     = useState(initModule ? (initLesson ? 'lesson' : 'module') : 'list')
  const [mod, setMod]       = useState(initModule || null)
  const [lesson, setLesson] = useState(initLesson || null)
  const [xpToast, setXpToast] = useState(null)

  const openModule  = (m) => { setMod(m); setView('module'); setSelectedModule(m) }
  const openLesson  = (l) => { setLesson(l); setView('lesson'); setSelectedLesson(l) }
  const openQuiz    = ()  => setView('quiz')
  const backToList  = ()  => { setView('list'); setMod(null); setSelectedModule(null) }
  const backToMod   = ()  => { setView('module'); setLesson(null); setSelectedLesson(null) }

  const markDone = (id) => setProgress((p) => ({ ...p, [id]: !p[id] }))

  const getNextLesson = () => {
    if (!mod || !lesson) return null
    const idx = mod.lessons.findIndex((l) => l.id === lesson.id)
    return idx >= 0 && idx < mod.lessons.length - 1 ? mod.lessons[idx + 1] : null
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
          <ModuleQuiz
            mod={mod}
            progress={progress}
            onDone={backToMod}
            onXP={(xp, label) => setXpToast({ xp, label })}
          />
        </div>
      </div>
    )
  }

  if (view === 'lesson' && lesson) {
    return (
      <LessonView
        mod={mod}
        lesson={lesson}
        progress={progress}
        onMarkDone={markDone}
        onBack={backToMod}
        onNext={getNextLesson() ? goNext : null}
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

  return <ModuleList user={user} progress={progress} onOpenModule={openModule} onGoToDiagnosis={onGoToDiagnosis} />
}
