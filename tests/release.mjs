import assert from 'node:assert/strict'
import { readFile, readdir, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import os from 'node:os'
import path from 'node:path'
import { PUBLIC_MODULES } from '../src/data/publicCatalog.js'
import { QUIZZES } from '../src/data/publicQuizzes.js'
import { TOOLS } from '../src/data/toolCatalog.js'
const excluded = /\b(?:IA|AI|ChatGPT|GPT|Anthropic|Copilot|Gemini)\b|intelig[eê]ncia artificial|machine learning/iu
assert.equal(PUBLIC_MODULES.length, 10)
assert.equal(TOOLS.length, 30)
for (const mod of PUBLIC_MODULES) {
  const { default: lessons } = await import(`../src/data/lessons/${mod.id}.js`)
  assert.equal(excluded.test(JSON.stringify({ mod, lessons, quiz: QUIZZES[mod.id] })), false, `Excluded content in module ${mod.id}`)
  assert.equal(QUIZZES[mod.id].length, 5)
  for (const question of QUIZZES[mod.id]) assert.ok(question.correct >= 0 && question.correct < question.opts.length)
  for (const lesson of mod.lessons) assert.ok(lessons[lesson.id]?.length > 100, `Missing body ${lesson.id}`)
}
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
const entries = Object.keys(manifest)
assert.equal(entries.filter(key => key.startsWith('src/data/lessons/')).length, 10, 'Only public lesson chunks ship')
assert.equal(entries.some(key => /CoachPage|AuthPage|ConnectedApp|CommunityPage|MessagesPage|offerDraft/.test(key)), false)
for (const name of (await readdir('dist/assets')).filter(name => name.endsWith('.js'))) {
  const source = await readFile(`dist/assets/${name}`, 'utf8')
  assert.equal(/api\.anthropic\.com|supabase\.co|Coach IA|TESTIMONIALS|candidatura-clara-v1|priceHypothesis/.test(source), false, `Unreleased integration in ${name}`)
}
const temp = await mkdtemp(path.join(os.tmpdir(), 'jobjump-seo-'))
try {
  await mkdir(path.join(temp, 'dist'))
  const fixture = '<html><head><!-- deployment:canonical --><meta property="og:image" content="/logo.png"></head></html>'
  await writeFile(path.join(temp, 'dist/index.html'), fixture)
  const script = path.resolve('scripts/prepare-deployment.mjs')
  execFileSync(process.execPath, [script], { cwd: temp, env: { ...process.env, SITE_URL: 'https://jobjump.example' }, stdio: 'pipe' })
  assert.match(await readFile(path.join(temp, 'dist/index.html'), 'utf8'), /rel="canonical" href="https:\/\/jobjump\.example\/"/)
  assert.match(await readFile(path.join(temp, 'dist/sitemap.xml'), 'utf8'), /https:\/\/jobjump\.example\//)
  assert.throws(() => execFileSync(process.execPath, [script], { cwd: temp, env: { ...process.env, SITE_URL: 'http://invalid.example' }, stdio: 'pipe' }))
} finally { await rm(temp, { recursive: true, force: true }) }
console.log('PASS: public content completeness, exclusion of unreleased content/integrations, on-demand chunks and production SEO domain validation')
