// Transparent rules for the released catalog, not a professional assessment.
const challengeModules = { cv: 1, interview: 4, network: 5, salary: 6, motivation: 9 }
const goalModules = { first_job: [1, 2, 4], new_company: [4, 5, 6], career_change: [7, 8, 4], abroad: [10, 1, 4], promotion: [6, 8, 5] }
const areaModules = { sales: 5, marketing: 8, creative: 8, media: 8, finance: 6, investment: 6, hr: 5 }

export function buildRoadmap(answers = {}, modules = []) {
  const available = new Set(modules.map(mod => mod.id))
  const candidates = [
    challengeModules[answers.challenge],
    ...(answers.goal === 'abroad' || answers.goal === 'career_change' ? goalModules[answers.goal].slice(0, 1) : []),
    ...(answers.urgency === 'urgent' || answers.status === 'unemployed' ? [9] : []),
    ...(goalModules[answers.goal] || [1, 4, 5]),
    ...(answers.experience === 'none' ? [2] : [6]),
    areaModules[answers.area], 1, 4, 5, ...modules.map(mod => mod.id),
  ]
  return [...new Set(candidates)].filter(id => available.has(id)).slice(0, 3)
}

export function roadmapReason(moduleId, answers = {}) {
  if (challengeModules[answers.challenge] === moduleId) return 'Você indicou este tema como sua maior dificuldade.'
  if ((goalModules[answers.goal] || []).includes(moduleId)) return 'Este módulo apoia o objetivo que você escolheu.'
  if (moduleId === 9 && (answers.urgency === 'urgent' || answers.status === 'unemployed')) return 'Organizar as próximas ações pode ajudar a lidar com a urgência informada.'
  return 'Uma base complementar para praticar sua preparação profissional.'
}
