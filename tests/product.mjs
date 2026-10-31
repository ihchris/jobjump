import assert from 'node:assert/strict'
import { buildRoadmap, roadmapReason } from '../src/lib/roadmap.js'
import { PUBLIC_MODULES } from '../src/data/publicCatalog.js'
import { PRACTICE_TASKS } from '../src/data/practiceTasks.js'
import { TOOLS } from '../src/data/toolCatalog.js'
import { TEMPLATES } from '../src/data/templates.js'
import { OFFER_DRAFT } from '../src/data/offerDraft.js'
const challenges = { cv: 1, interview: 4, network: 5, salary: 6, motivation: 9 }
for (const [challenge, first] of Object.entries(challenges)) for (const goal of ['first_job', 'new_company', 'career_change', 'abroad', 'promotion']) {
  const answers = { challenge, goal, status: 'unemployed', urgency: 'urgent', area: 'tech', experience: 'none' }
  const route = buildRoadmap(answers, PUBLIC_MODULES)
  assert.equal(route.length, 3); assert.equal(new Set(route).size, 3)
  assert.equal(route[0], first, 'Stated difficulty must be the first priority')
  assert.ok(route.every(id => PUBLIC_MODULES.some(mod => mod.id === id)))
  assert.match(roadmapReason(first, answers), /maior dificuldade/)
}
assert.deepEqual(buildRoadmap({}, []), [])
assert.equal(buildRoadmap({ goal: 'abroad', challenge: 'cv' }, PUBLIC_MODULES)[1], 10)
assert.equal(buildRoadmap({ goal: 'career_change', challenge: 'interview' }, PUBLIC_MODULES)[1], 7)
for (const mod of PUBLIC_MODULES) {
  const task = PRACTICE_TASKS[mod.id]
  assert.ok(task?.title && task.output)
  assert.equal(task.checks.length, 3)
  assert.ok(TOOLS.some(tool => tool.id === task.toolId))
  assert.ok(TEMPLATES.some(template => template.id === task.templateId))
}
for (const id of OFFER_DRAFT.moduleIds) assert.ok(PUBLIC_MODULES.some(mod => mod.id === id))
for (const id of OFFER_DRAFT.toolIds) assert.ok(TOOLS.some(tool => tool.id === id))
for (const id of OFFER_DRAFT.templateIds) assert.ok(TEMPLATES.some(template => template.id === id))
assert.equal(OFFER_DRAFT.purchasesEnabled, false)
assert.equal(OFFER_DRAFT.status, 'research_only')
assert.equal(OFFER_DRAFT.paymentModel, 'one_time')
assert.ok(TEMPLATES.every(template => ['DOC', 'PDF', 'CSV'].includes(template.format)))
console.log('PASS: 25 diagnosis profiles, available-only priorities, task/tool/template consistency and inactive one-time offer contract')
