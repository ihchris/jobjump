import { buildRoadmap, roadmapReason } from '../../lib/roadmap'
import { PRACTICE_TASKS } from '../../data/practiceTasks'
import { getPractice } from '../../utils/practice'
import { useState, useEffect } from 'react'
import { Btn } from '../ui'
import { getModules } from '../../lib/content'
import { saveDiagnosis, getDiagnosis, XP_DIAGNOSIS } from '../../utils/gamification'
import { hasContentAccess } from '../../utils/plans'

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
    getOptions: (answers) => {
      const hasJob = ['employed', 'freelancer'].includes(answers.status)
      return [
        ...(hasJob ? [] : [{ value: 'first_job',   label: 'Conseguir um novo emprego',              icon: '🚀' }]),
        ...(hasJob ?    [{ value: 'new_company',   label: 'Mudar de empresa (mesma área)',           icon: '🏢' }] : []),
        { value: 'career_change', label: 'Mudar de área ou função',                                   icon: '🔀' },
        { value: 'abroad',        label: 'Trabalhar no exterior ou remoto internacional',             icon: '🌍' },
        ...(hasJob ?    [{ value: 'promotion',     label: 'Crescer na empresa atual',                 icon: '📈' }] : []),
      ]
    },
  },
  {
    id: 'area',
    question: 'Em qual área você trabalha ou tem interesse?',
    icon: '🏷️',
    grid: true,
    options: [
      { value: 'tech',        label: 'Tecnologia / Dev', icon: '💻' },
      { value: 'product_ux',  label: 'Product Design / UX', icon: '🎨' },
      { value: 'data_ai',     label: 'Dados e Analytics', icon: '📊' },
      { value: 'marketing',   label: 'Marketing / Comunicação', icon: '📣' },
      { value: 'sales',       label: 'Vendas / Comercial', icon: '🤝' },
      { value: 'hr',          label: 'RH / Pessoas', icon: '👥' },
      { value: 'finance',     label: 'Financeiro / Controladoria', icon: '💹' },
      { value: 'management',  label: 'Gestão / Operações', icon: '⚙️' },
      { value: 'consulting',  label: 'Consultoria', icon: '📈' },
      { value: 'law',         label: 'Direito / Jurídico', icon: '⚖️' },
      { value: 'engineering', label: 'Engenharia (Civil/Mecânica/Química)', icon: '🏗️' },
      { value: 'agro',        label: 'Agronegócio', icon: '🌾' },
      { value: 'health',      label: 'Saúde e Ciências da Vida', icon: '🩺' },
      { value: 'education',   label: 'Educação / EdTech', icon: '📚' },
      { value: 'logistics',   label: 'Logística / Supply Chain', icon: '📦' },
      { value: 'security',    label: 'Segurança da Informação', icon: '🔐' },
      { value: 'investment',  label: 'Mercado Financeiro / Banking', icon: '🏦' },
      { value: 'creative',    label: 'Audiovisual, Arquitetura e Design', icon: '🎬' },
      { value: 'media',       label: 'Jornalismo e Mídia Digital', icon: '📰' },
      { value: 'hospitality', label: 'Turismo e Hotelaria', icon: '🏨' },
      { value: 'fashion',     label: 'Moda e Varejo', icon: '👗' },
      { value: 'public',      label: 'Concursos Públicos', icon: '🏛️' },
      { value: 'startup',     label: 'Startups e Empreendedorismo', icon: '🚀' },
      { value: 'purpose',     label: 'ESG e Terceiro Setor', icon: '🌱' },
      { value: 'other',       label: 'Outra área / Ainda não sei', icon: '🔀' },
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
function RoadmapResult({ answers, roadmap, user, onNavigate, onReset, allModules }) {
  const currentRoadmap = buildRoadmap(answers, allModules)
  const practice = getPractice()
  const modules = currentRoadmap.map((id) => allModules.find((m) => m.id === id)).filter(Boolean)

  const firstModule = modules.find(m => !practice[m.id]?.completedAt && (!m.isPro || hasContentAccess(user.plan)))

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-brand-navy rounded-2xl p-6 text-white">
        <div className="text-3xl mb-2">🗺️</div>
        <h2 className="text-xl font-black mb-1">Seu Roteiro Personalizado</h2>
        <p className="text-brand-muted text-sm">
          Três prioridades sugeridas pelas suas respostas, usando o catálogo geral da demonstração.
          Comece por uma aula e aplique a tarefa; o roteiro não avalia seu currículo nem garante resultados.
        </p>
        <div className="mt-3 text-xs text-brand-muted bg-white/10 rounded-xl px-3 py-2 inline-block">
          Roteiro de estudo · {modules.length} prioridades de prática · Dados apenas neste navegador
        </div>
      </div>

      {firstModule && (
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <p className="text-xs font-bold uppercase text-blue-700 mb-2">Sua primeira tarefa</p>
          <h3 className="font-bold text-slate-800">{PRACTICE_TASKS[firstModule.id]?.title || firstModule.title}</h3>
          <p className="text-sm text-slate-600 mt-2 mb-4">Leia a aula de apoio ({firstModule.lessons[0]?.duration || firstModule.duration}) e confira os critérios da tarefa prática. O registro de leitura não substitui a aplicação.</p>
          <Btn onClick={() => onNavigate(firstModule, firstModule.lessons[0])}>Começar primeira aula →</Btn>
        </section>
      )}
      {!firstModule && modules.length > 0 && <p role="status" className="text-slate-700">As três tarefas do roteiro foram declaradas como concluídas. Você pode revisá-las ou refazer o diagnóstico.</p>}
      <div className="space-y-3">
        {modules.map((m, i) => {
          const locked = m.isPro && !hasContentAccess(user.plan)
          return (
            <button
              type="button"
              disabled={locked}
              key={m.id}
              onClick={() => !locked && onNavigate(m)}
              className={`w-full text-left bg-white rounded-2xl border p-4 flex items-center gap-4 transition-all
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
                <div className="text-slate-600 text-xs mt-1">{roadmapReason(m.id, answers)}</div>
                <div className="text-slate-500 text-xs mt-1">{practice[m.id]?.completedAt ? '✓ Tarefa declarada como concluída' : PRACTICE_TASKS[m.id]?.title}</div>
              </div>
              {m.isPro && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${hasContentAccess(user.plan) ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'}`}>
                  {hasContentAccess(user.plan) ? '⭐ Pro' : '🔒 Pro'}
                </span>
              )}
              {!locked && <span className="text-slate-300">→</span>}
            </button>
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
  const [allModules, setAllModules] = useState([])
  useEffect(() => { getModules().then(setAllModules) }, [])

  const existing = getDiagnosis()
  const [step, setStep] = useState(existing ? 'result' : 0)
  const [answers, setAnswers] = useState(existing?.answers || {})
  const [roadmap, setRoadmap] = useState(existing?.roadmap || [])

  const currentStep = STEPS[step]
  const progress = typeof step === 'number' ? Math.round((step / STEPS.length) * 100) : 100

  const select = (value) => {
    if (!allModules.length) return
    const next = { ...answers, [currentStep.id]: value }
    setAnswers(next)
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      const rm = buildRoadmap(next, allModules)
      setRoadmap(rm)
      saveDiagnosis({ answers: next, roadmap: rm, version: 2 })
      setStep('result')
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setRoadmap([])
  }

  if (!allModules.length) return <p role="status" className="p-6 text-slate-600">Preparando seu roteiro…</p>

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
          allModules={allModules}
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
          className="h-full bg-brand-accent rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="text-3xl mb-3">{currentStep.icon}</div>
        <h2 className="text-lg font-black text-slate-800 mb-4">{currentStep.question}</h2>
        {currentStep.grid ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(currentStep.getOptions ? currentStep.getOptions(answers) : currentStep.options).map((opt) => (
              <button
                disabled={!allModules.length}
                key={opt.value}
                onClick={() => select(opt.value)}
                className="flex flex-col items-center text-center gap-1.5 bg-white border border-slate-200 rounded-xl p-3 hover:border-blue-400 hover:bg-blue-50 transition-all group"
              >
                <span className="text-xl">{opt.icon}</span>
                <span className="font-semibold text-slate-700 text-xs leading-tight group-hover:text-blue-700">{opt.label}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {(currentStep.getOptions ? currentStep.getOptions(answers) : currentStep.options).map((opt) => (
              <button
                disabled={!allModules.length}
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
        )}
      </div>

      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
          ← Voltar
        </button>
      )}
    </div>
  )
}
