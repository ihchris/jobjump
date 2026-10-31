import { useState, useEffect } from 'react'
import { Btn, ProgressBar } from '../ui'
import { getModules } from '../../lib/content'
import { buildRoadmap, roadmapReason } from '../../lib/roadmap'
import { PRACTICE_TASKS } from '../../data/practiceTasks'
import { getPractice } from '../../utils/practice'
import { getDiagnosis, getXP, getLevel, getStreak, touchStreak } from '../../utils/gamification'

export default function DashHome({ user, progress, setTab, setSelectedModule, setSelectedLesson }) {
  const [modules, setModules] = useState([])
  const [practice, setPractice] = useState(getPractice)
  useEffect(() => { let active = true; getModules().then(value => { if (active) setModules(value) }); return () => { active = false } }, [])
  useEffect(() => { touchStreak(); const refresh = () => setPractice(getPractice()); window.addEventListener('nj:practice', refresh); return () => window.removeEventListener('nj:practice', refresh) }, [])
  const diagnosis = getDiagnosis()
  const roadmap = diagnosis ? buildRoadmap(diagnosis.answers, modules).map(id => modules.find(mod => mod.id === id)).filter(Boolean) : []
  const finished = roadmap.filter(mod => practice[mod.id]?.completedAt).length
  const next = roadmap.find(mod => !practice[mod.id]?.completedAt)
  const lessons = modules.flatMap(mod => mod.lessons)
  const read = lessons.filter(lesson => progress[lesson.id]).length
  const level = getLevel(getXP())
  const open = mod => { setSelectedModule(mod); setSelectedLesson(mod.lessons[0]); setTab('modules') }
  return <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
    <div><h1 className="text-2xl font-black text-slate-800">Olá, {user.name?.split(' ')[0]}! 👋</h1><p className="text-slate-600 mt-2">Seu próximo passo é aplicar uma melhoria, não apenas terminar uma leitura.</p></div>
    <section className="bg-brand-navy text-white rounded-2xl p-5 sm:p-6">
      <p className="text-brand-muted text-xs uppercase font-bold mb-2">Seu próximo passo</p>
      <h2 className="text-xl font-bold">{!diagnosis ? 'Escolha uma prioridade para começar' : next ? PRACTICE_TASKS[next.id].title : roadmap.length ? 'Você concluiu a autoavaliação das três tarefas' : 'Preparando suas prioridades…'}</h2>
      <p className="text-brand-muted text-sm mt-3 mb-5">{!diagnosis ? 'Responda a seis perguntas e receba três sugestões de prática.' : next ? PRACTICE_TASKS[next.id].output : 'Revise os materiais que preparou fora do site. Esta conclusão é declarada por você e não comprova qualidade ou resultado profissional.'}</p>
      <Btn variant="white" onClick={() => next ? open(next) : setTab('diagnosis')}>{next ? 'Abrir aula e tarefa →' : diagnosis ? 'Revisar meu roteiro →' : 'Fazer diagnóstico →'}</Btn>
    </section>
    {diagnosis && roadmap.length > 0 && <section className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4" aria-label="Progresso prático do roteiro"><div className="flex flex-wrap gap-2 justify-between"><h2 className="font-bold text-slate-800">Aplicação do seu roteiro</h2><span className="text-sm text-slate-600">{finished} de {roadmap.length} tarefas declaradas como concluídas</span></div><ProgressBar pct={finished / roadmap.length * 100} /><p className="text-sm text-slate-600">Leituras e tarefas são registradas separadamente. Os critérios de aplicação são uma autoavaliação local.</p><ol className="space-y-3">{roadmap.map((mod, i) => <li key={mod.id}><button onClick={() => open(mod)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:bg-slate-50"><span className="font-bold text-slate-800">{practice[mod.id]?.completedAt ? '✓' : `${i + 1}.`} {PRACTICE_TASKS[mod.id].title}</span><span className="block mt-1 text-sm text-slate-600">{roadmapReason(mod.id, diagnosis.answers)}</span></button></li>)}</ol></section>}
    <section className="grid sm:grid-cols-3 gap-3" aria-label="Resumo de estudo"><div className="bg-white border border-slate-200 rounded-2xl p-5"><p className="text-sm text-slate-600">Leituras concluídas</p><p className="text-2xl font-bold text-slate-800 mt-2">{read}/{lessons.length}</p></div><div className="bg-white border border-slate-200 rounded-2xl p-5"><p className="text-sm text-slate-600">Tarefas do roteiro</p><p className="text-2xl font-bold text-slate-800 mt-2">{finished}/{roadmap.length}</p></div><div className="bg-white border border-slate-200 rounded-2xl p-5"><p className="text-sm text-slate-600">Continuidade de estudo</p><p className="font-bold text-slate-800 mt-2">{getStreak()} dias · {getXP()} XP</p><p className="text-xs text-slate-600 mt-1">Nível {level.level} · {level.label}</p></div></section>
    <div className="grid sm:grid-cols-3 gap-3">{[['tools', 'Ferramentas de treino', 'Prepare exemplos com modelos e regras locais.'], ['templates', 'Modelos para adaptar', 'Arquivos de apoio: confira o formato antes de baixar.'], ['planner', 'Plano Semanal', 'Escolha um prazo realista para sua próxima ação.']].map(([tab, title, description]) => <button key={tab} onClick={() => setTab(tab)} className="text-left bg-white border border-slate-200 rounded-2xl p-5 hover:bg-slate-50"><h2 className="font-bold text-slate-800">{title}</h2><p className="text-sm text-slate-600 mt-2">{description}</p></button>)}</div>
  </div>
}
