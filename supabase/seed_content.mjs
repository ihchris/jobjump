#!/usr/bin/env node
/**
 * Gera SQL para popular as tabelas de conteúdo no Supabase.
 *
 * Uso:
 *   node supabase/seed_content.mjs > supabase/seed_content.sql
 *
 * Depois cola o SQL gerado no editor SQL do Supabase Dashboard.
 * Requer Node 18+ (suporte nativo a ESM e import()).
 */

import { createRequire } from 'module'
import { pathToFileURL } from 'url'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

// Importa os módulos e quizzes locais via dynamic import
const { MODULES }  = await import(pathToFileURL(path.join(root, 'src/data/modules.js')).href)
const { QUIZZES }  = await import(pathToFileURL(path.join(root, 'src/data/quizzes.js')).href)

// Escapa aspas simples para SQL
const esc = (s) => String(s ?? '').replace(/'/g, "''")

// Serializa JSON escapando aspas simples
const json = (v) => esc(JSON.stringify(v))

const lines = []
const line  = (...args) => lines.push(args.join(''))

line('-- Auto-gerado por supabase/seed_content.mjs — não editar manualmente')
line('-- Execute no SQL Editor do Supabase Dashboard')
line()
line('BEGIN;')
line()
line('-- Limpa dados anteriores (em ordem de FK)')
line('TRUNCATE public.quizzes, public.lesson_content, public.lessons, public.modules CASCADE;')
line()

// ── Modules ──────────────────────────────────────────────────────────────────
line('-- ── Modules ──────────────────────────────────────────────────────────')
for (const m of MODULES) {
  const hasQuiz = !!QUIZZES[m.id]
  line(
    `INSERT INTO public.modules (id, title, description, duration, icon, is_pro, has_quiz, color_config, sort_order) VALUES (`,
    `${m.id}, `,
    `'${esc(m.title)}', `,
    `'${esc(m.desc)}', `,
    `'${esc(m.duration)}', `,
    `'${esc(m.icon)}', `,
    `${m.isPro ? 'true' : 'false'}, `,
    `${hasQuiz ? 'true' : 'false'}, `,
    `'${json(m.color)}', `,
    `${m.id}`,
    `);`,
  )
}
line()

// ── Lessons (stubs) ───────────────────────────────────────────────────────────
line('-- ── Lesson stubs ─────────────────────────────────────────────────────')
for (const m of MODULES) {
  for (let i = 0; i < m.lessons.length; i++) {
    const l = m.lessons[i]
    line(
      `INSERT INTO public.lessons (id, module_id, title, duration, is_pro, sort_order) VALUES (`,
      `'${esc(l.id)}', `,
      `${m.id}, `,
      `'${esc(l.title)}', `,
      `'${esc(l.duration ?? '')}', `,
      `${l.isPro ? 'true' : 'false'}, `,
      `${i}`,
      `);`,
    )
  }
}
line()

// ── Lesson content ────────────────────────────────────────────────────────────
line('-- ── Lesson content ───────────────────────────────────────────────────')
for (const m of MODULES) {
  for (const l of m.lessons) {
    line(
      `INSERT INTO public.lesson_content (lesson_id, content) VALUES (`,
      `'${esc(l.id)}', `,
      `'${esc(l.content ?? '')}');\n`,
    )
  }
}

// ── Quizzes ───────────────────────────────────────────────────────────────────
line('-- ── Quizzes ──────────────────────────────────────────────────────────')
for (const [moduleId, questions] of Object.entries(QUIZZES)) {
  line(
    `INSERT INTO public.quizzes (module_id, questions) VALUES (`,
    `${moduleId}, `,
    `'${json(questions)}'`,
    `);`,
  )
}
line()
line('COMMIT;')

process.stdout.write(lines.join('\n'))
process.stdout.write('\n')
