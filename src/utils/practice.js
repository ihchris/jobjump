import { LS } from './storage'
import { PRACTICE_TASKS } from '../data/practiceTasks'
export const PRACTICE_KEY = 'nj_practice_tasks'
export const getPractice = () => LS.get(PRACTICE_KEY, {})
export function savePractice(moduleId, checks, complete = false) {
  const task = PRACTICE_TASKS[moduleId]
  if (!task || !Array.isArray(checks) || checks.length !== task.checks.length) return null
  const values = checks.map(value => value === true)
  const entry = { checks: values, completedAt: complete && values.every(Boolean) ? new Date().toISOString() : null }
  LS.set(PRACTICE_KEY, { ...getPractice(), [moduleId]: entry })
  window.dispatchEvent(new Event('nj:practice'))
  return entry
}
export function practiceBrief(moduleId, entry) {
  const task = PRACTICE_TASKS[moduleId]
  if (!task) return ''
  return ['JobJump — roteiro de prática', '', task.title, '', 'Resultado a preparar:', task.output, '', 'Critérios de autoavaliação:', ...task.checks.map((text, index) => `${entry?.checks?.[index] ? '[x]' : '[ ]'} ${text}`), '', entry?.completedAt ? 'Conclusão declarada por você neste navegador.' : 'Tarefa ainda não declarada como concluída.', 'A marcação é uma autoavaliação; não comprova qualidade, contratação ou resultado profissional.', 'Faça a aplicação em uma cópia privada, fora do site. Nas ferramentas, use exemplos fictícios sem nomes, contatos ou dados pessoais.'].join('\n')
}
