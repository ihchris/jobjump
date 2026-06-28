import { useState } from 'react'
import { Btn } from '../ui'
import { MODULES } from '../../data/modules'
import { saveDiagnosis, getDiagnosis, XP_DIAGNOSIS } from '../../utils/gamification'
import { isPaid } from '../../utils/plans'

// ─── Mapa de prioridades por perfil ──────────────────────────────────────────
function buildRoadmap(answers) {
  const { status, area, experience, goal, urgency, challenge } = answers

  const score = {}
  const add = (ids, pts) => ids.forEach((id) => { score[id] = (score[id] || 0) + pts })

  // sempre útil
  add([1, 2, 3], 10)

  // por status
  if (status === 'unemployed')  add([9, 19, 14], 20)
  if (status === 'employed')    add([18, 5, 6], 15)
  if (status === 'freelancer')  add([12, 6, 8], 15)
  if (status === 'student')     add([20, 14, 30], 15)

  // por objetivo
  if (goal === 'first_job')     add([1, 2, 3, 20, 14], 20)
  if (goal === 'new_company')   add([4, 5, 6, 9], 20)
  if (goal === 'career_change') add([7, 8, 22, 30], 20)
  if (goal === 'abroad')        add([10, 15, 21, 32], 25)
  if (goal === 'promotion')     add([18, 13, 35], 20)

  // por área
  if (area === 'tech')          add([26, 17, 36, 33], 15)
  if (area === 'marketing')     add([8, 22, 11], 15)
  if (area === 'sales')         add([5, 6, 35], 15)
  if (area === 'hr')            add([5, 13, 20], 15)
  if (area === 'finance')       add([25, 39, 6], 15)
  if (area === 'management')    add([13, 35, 40], 15)

  // por experiência
  if (experience === 'none')    add([20, 14, 30, 22], 15)
  if (experience === '1-3')     add([4, 5, 9], 10)
  if (experience === '3-7')     add([6, 7, 8], 10)
  if (experience === '7plus')   add([29, 6, 13, 40], 15)

  // por urgência
  if (urgency === 'urgent')     add([28, 9, 4], 20)
  if (urgency === 'medium')     add([5, 8, 6], 10)

  // por desafio
  if (challenge === 'cv')       add([1, 2, 11, 27], 20)
  if (challenge === 'interview') add([4, 16, 15, 35], 20)
  if (challenge === 'network')  add([5, 37, 3], 20)
  if (challenge === 'salary')   add([6, 25, 39], 20)
  if (challenge === 'motivation') add([14, 34, 30, 9], 20)

  // ordenar por score, filtrar módulos existentes
  const validIds = new Set(MODULES.map((m) => m.id))
  return Object.entries(score)
    .filter(([id]) => validIds.has(Number(id)))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([id]) => Number(id))
}

// ─── Passos do questionário ───────────────────────────────────────────────────
const STEPS = [
  {
    id: 'status',
    question: 'Qual é a sua situação atual?',
    icon: '🧭',
    options: [
      { value: 'unemployed', label: 'Estou desempregado(a)', icon: '🔍' },
      { value: 'employed',   label: 'Estou empregado(a) mas quero mudar', icon: '🔄' },
      { value: 'freelancer', label: 'Trabalho por conta própria / freelance', icon: '💼' },
      { value: 'student',    label: 'Sou estudante ou recém-formado(a)', icon: '🎓' },
    ],
  },
  {
    id: 'goal',
    question: 'Qual é o seu objetivo principal agora?',
    icon: '🎯',
    options: [
      { value: 'first_job',     label: 'Conseguir o primeiro emprego', icon: '🚀' },
      { value: 'new_company',   label: 'Mudar de empresa (mesma área)', icon: '🏢' },
      { value: 'career_change', label: 'Mudar de área ou função', icon: '🔀' },
      { value: 'abroad',        label: 'Trabalhar no exterior ou remoto internacional', icon: '🌍' },
      { value: 'promotion',     label: 'Crescer na empresa atual', icon: '📈' },
    ],
  },
  {
    id: 'area',
    question: 'Em qual área você trabalha ou quer trabalhar?',
    icon: '🏷️',
    options: [
      { value: 'tech',       label: 'Tecnologia / Desenvolvimento', icon: '💻' },
      { value: 'marketing',  label: 'Marketing / Comunicação', icon: '📣' },
      { value: 'sales',      label: 'Vendas / Comercial', icon: '🤝' },
      { value: 'hr',         label: 'RH / Pessoas', icon: '👥' },
      { value: 'finance',    label: 'Financeiro / Controladoria', icon: '💹' },
      { value: 'management', label: 'Gestão / Operações / Outra', icon: '⚙️' },
    ],
  },
  {
    id: 'experience',
    question: 'Quantos anos de experiência profissional você tem?',
    icon: '📅',
    options: [
      { value: 'none',  label: 'Sem experiência formal ainda', icon: '🌱' },
      { value: '1-3',   label: '1 a 3 anos', icon: '🌿' },
      { value: '3-7',   label: '3 a 7 anos', icon: '🌳' },
      { value: '7plus', label: '7 anos ou mais', icon: '🌲' },
    ],
  },
  {
    id: 'challenge',
    question: 'Qual é a sua maior dificuldade hoje?',
    icon: '🧩',
    options: [
      { value: 'cv',         label: 'CV, candidaturas e ATS', icon: '📄' },
      { value: 'interview',  label: 'Entrevistas e processos seletivos', icon: '🎤' },
      { value: 'network',    label: 'Networking e visibilidade', icon: '🔗' },
      { value: 'salary',     label: 'Negociação salarial e proposta', icon: '💰' },
      { value: 'motivation', label: 'Motivação, organização e saúde mental', icon: '🧠' },
    ],
  },
  {
    id: 'urgency',
    question: 'Qual é a sua urgência?',
    icon: '⏰',
    options: [
      { value: 'urgent', label: 'Preciso de resultados em menos de 1 mês', icon: '🚨' },
      { value: 'medium', label: 'Tenho 1 a 3 meses de margem', icon: '⚡' },
      { value: 'calm',   label: 'Estou bem, mas quer crescer nos próximos meses', icon: '🌊' },
      { value: 'explore', label: 'Estou explorando possibilidades sem pressa', icon: '🧭' },
    ],
  },
]

// ─── Resultado / Roadmap ──────────────────────────────────────────────────────
function RoadmapResult({ answers, roadmap, user, onNavigate, onReset }) {
  const modules = roadmap.map((id) => MODULES.find((m) => m.id === id)).filter(Boolean)

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
        <div className="text-3xl mb-2">🗺️</div>
        <h2 className="text-xl font-black mb-1">Seu Roteiro Personalizado</h2>
        <p className="text-blue-100 text-sm">
          Com base no seu perfil, estes são os módulos que vão gerar mais impacto para você agora.
          Siga a ordem — cada um prepara o terreno para o próximo.
        </p>
        <div className="mt-3 text-xs text-blue-200 bg-white/10 rounded-xl px-3 py-2 inline-block">
          +{XP_DIAGNOSIS} XP conquistados por completar o diagnóstico!
        </div>
      </div>

      <div className="space-y-3">
        {modules.map((m, i) => {
          const locked = m.isPro && !isPaid(user.plan)
          return (
            <div
              key={m.id}
              onClick={() => !locked && onNavigate(m)}
              className={`bg-white rounded-2xl border p-4 flex items-center gap-4 transition-all
                ${locked ? 'opacity-60 cursor-not-allowed border-slate-100' : 'cursor-pointer hover:shadow-md hover:border-blue-200 border-slate-100'}`}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                {i + 1}
              </div>
              <div className={`w-10 h-10 ${m.color.icon} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                {locked ? '🔒' : m.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-800 text-sm">{m.title}</div>
                <div className="text-slate-400 text-xs">{m.lessons.length} lições · {m.duration}</div>
              </div>
              {m.isPro && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${isPaid(user.plan) ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'}`}>
                  {isPaid(user.plan) ? '⭐ Pro' : '🔒 Pro'}
                </span>
              )}
              {!locked && <span className="text-slate-300">→</span>}
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <button onClick={onReset} className="text-xs text-slate-400 hover:text-slate-600 underline">
          Refazer diagnóstico
        </button>
      </div>
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function DiagnosisPage({ user, onNavigateModule }) {
  const existing = getDiagnosis()
  const [step, setStep] = useState(existing ? 'result' : 0)
  const [answers, setAnswers] = useState(existing?.answers || {})
  const [roadmap, setRoadmap] = useState(existing?.roadmap || [])

  const currentStep = STEPS[step]
  const progress = typeof step === 'number' ? Math.round((step / STEPS.length) * 100) : 100

  const select = (value) => {
    const next = { ...answers, [currentStep.id]: value }
    setAnswers(next)
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      const rm = buildRoadmap(next)
      setRoadmap(rm)
      saveDiagnosis({ answers: next, roadmap: rm })
      setStep('result')
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setRoadmap([])
  }

  if (step === 'result') {
    return (
      <div className="p-6 animate-fade-in max-w-2xl">
        <h1 className="text-2xl font-black text-slate-800 mb-2">Diagnóstico de Carreira</h1>
        <p className="text-slate-500 text-sm mb-6">Seu roteiro personalizado está pronto.</p>
        <RoadmapResult
          answers={answers}
          roadmap={roadmap}
          user={user}
          onNavigate={onNavigateModule}
          onReset={reset}
        />
      </div>
    )
  }

  return (
    <div className="p-6 animate-fade-in max-w-xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-black text-slate-800">Diagnóstico de Carreira</h1>
        <span className="text-xs text-slate-400 font-semibold">{step + 1}/{STEPS.length}</span>
      </div>
      <p className="text-slate-500 text-sm mb-4">
        Responda 6 perguntas rápidas e receba um roteiro personalizado dos módulos mais importantes para você.
      </p>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-100 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="text-3xl mb-3">{currentStep.icon}</div>
        <h2 className="text-lg font-black text-slate-800 mb-4">{currentStep.question}</h2>
        <div className="space-y-2">
          {currentStep.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => select(opt.value)}
              className="w-full flex items-center gap-4 text-left bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-400 hover:bg-blue-50 transition-all group"
            >
              <span className="text-2xl flex-shrink-0">{opt.icon}</span>
              <span className="font-semibold text-slate-700 text-sm group-hover:text-blue-700">{opt.label}</span>
              <span className="ml-auto text-slate-300 group-hover:text-blue-400">→</span>
            </button>
          ))}
        </div>
      </div>

      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
          ← Voltar
        </button>
      )}
    </div>
  )
}
