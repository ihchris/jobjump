import { useId, useState } from 'react'
import { Btn } from '../ui'
import { PRACTICE_TASKS } from '../../data/practiceTasks'
import { getPractice, savePractice, practiceBrief } from '../../utils/practice'

export default function PracticeTask({ moduleId, onOpenTool, onOpenTemplates }) {
  const titleId = useId()
  const task = PRACTICE_TASKS[moduleId]
  const [entry, setEntry] = useState(() => getPractice()[moduleId] || { checks: task?.checks.map(() => false) || [], completedAt: null })
  if (!task) return null
  const update = (index, checked) => {
    const next = task.checks.map((_, i) => i === index ? checked : entry.checks[i] === true)
    setEntry(savePractice(moduleId, next))
  }
  const download = () => {
    const url = URL.createObjectURL(new Blob([practiceBrief(moduleId, entry)], { type: 'text/plain;charset=utf-8' }))
    const link = document.createElement('a'); link.href = url; link.download = `JobJump-tarefa-${moduleId}.txt`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <section aria-labelledby={titleId} className="mt-6 scroll-mt-20 rounded-2xl border border-slate-300 bg-white p-4 sm:p-6 space-y-4">
    <div><p className="text-xs font-bold uppercase text-slate-500 mb-2">Da leitura à aplicação</p><h2 id={titleId} className="text-xl font-bold text-slate-800">{task.title}</h2></div>
    <p className="text-slate-700 text-sm"><strong>Resultado a preparar:</strong> {task.output}</p>
    <p className="text-slate-600 text-sm">Aplique o exercício em uma cópia privada, fora do site. Nas ferramentas de treino, use exemplos fictícios e não informe nomes, contatos ou outros dados pessoais. Não enviamos candidaturas ou mensagens.</p>
    <div className="flex flex-col sm:flex-row flex-wrap gap-3"><Btn onClick={() => onOpenTool(task.toolId)} variant="secondary">{task.toolLabel} →</Btn><Btn onClick={() => onOpenTemplates(task.templateId)} variant="secondary">Abrir modelo de apoio</Btn></div>
    <fieldset className="space-y-3"><legend className="font-semibold text-slate-800 mb-3">Confira sua aplicação</legend>{task.checks.map((text, index) => <label key={text} className="flex items-start gap-3 cursor-pointer text-sm text-slate-700"><input type="checkbox" checked={entry.checks[index] === true} onChange={e => update(index, e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-black" /><span>{text}</span></label>)}</fieldset>
    <div className="flex flex-col sm:flex-row flex-wrap gap-3"><Btn onClick={() => setEntry(savePractice(moduleId, entry.checks, true))} disabled={Boolean(entry.completedAt) || !task.checks.every((_, i) => entry.checks[i] === true)}>{entry.completedAt ? '✓ Tarefa concluída' : 'Concluir tarefa prática'}</Btn><Btn onClick={download} variant="secondary">Baixar roteiro da tarefa</Btn></div>
    {entry.completedAt && <p role="status" className="text-sm font-semibold text-slate-800">Tarefa prática concluída por você. Veja o próximo passo no Início.</p>}
    <p className="text-xs text-slate-600">Uma tarefa por módulo, compartilhada entre suas aulas. Autoavaliação local: os critérios registram sua declaração, sem verificar o currículo ou comprovar resultados. Concluir leitura e concluir tarefa são ações diferentes.</p>
  </section>
}
