# Segurança — NailJob

> Documento atualizado em 2026-06-26.
> Os 4 problemas críticos foram **corrigidos** com a integração de Supabase + Stripe.

---

## ✅ CRÍTICO 1 — Password verificada (CORRIGIDO)

**Fix aplicado:** `src/components/auth/AuthPage.jsx`

Substituído o sistema de localStorage por `supabase.auth.signUp()` e
`supabase.auth.signInWithPassword()`. A Supabase gere passwords com bcrypt
server-side. O frontend nunca recebe nem armazena a password.

---

## ✅ CRÍTICO 2 — Plano Pro verificado server-side (CORRIGIDO)

**Fix aplicado:** `supabase/migrations/001_schema.sql` + `supabase/functions/chat/index.ts`

O plano está agora na tabela `profiles` no Supabase (PostgreSQL), com RLS que
impede o utilizador de alterar o próprio plano. O plano só é atualizado pelo
webhook do Stripe (`supabase/functions/stripe-webhook/index.ts`).

O Coach IA verifica o plano na Edge Function antes de processar qualquer
mensagem — o cliente nunca pode forjar acesso Pro.

> Nota: o conteúdo dos módulos está no bundle JS (dados estáticos). Para
> proteção completa seria necessário servir o conteúdo via API. Isso pode
> ser feito numa fase futura com Supabase Storage + RLS.

---

## ✅ CRÍTICO 3 — API Key Anthropic não exposta (CORRIGIDO)

**Fix aplicado:** `supabase/functions/chat/index.ts`

A chamada à API da Anthropic é feita exclusivamente dentro da Supabase Edge
Function. A `ANTHROPIC_API_KEY` é uma variável de ambiente do servidor,
configurada com `supabase secrets set`. O browser nunca recebe nem vê a chave.

---

## ✅ CRÍTICO 4 — API Key não armazenada no cliente (CORRIGIDO)

**Fix aplicado:** `src/components/dashboard/CoachPage.jsx`

Removido o campo de input de API key e o `LS.set('nj_apikey', ...)`.
O utilizador nunca precisa de introduzir uma chave — a autenticação é feita
via JWT da sessão Supabase, que é passado no header `Authorization`.

---

## Roteiro de ativação

Para colocar o backend a funcionar:

| Passo | Ação |
|---|---|
| 1 | Criar projeto em [app.supabase.com](https://app.supabase.com) |
| 2 | Correr `supabase/migrations/001_schema.sql` no SQL Editor |
| 3 | Criar produto e preço no [Stripe Dashboard](https://dashboard.stripe.com) |
| 4 | Copiar `.env.example` para `.env` e preencher as variáveis |
| 5 | Instalar [Supabase CLI](https://supabase.com/docs/guides/cli) |
| 6 | Configurar secrets nas Edge Functions: |
|   | `supabase secrets set ANTHROPIC_API_KEY=sk-ant-...` |
|   | `supabase secrets set STRIPE_SECRET_KEY=sk_live_...` |
|   | `supabase secrets set STRIPE_PRO_PRICE_ID=price_...` |
|   | `supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...` |
| 7 | Deploy das funções: `supabase functions deploy` |
| 8 | Configurar webhook no Stripe → URL da função `stripe-webhook` |
| 9 | Atualizar URL do portal de faturação em `SettingsPage.jsx` |

**Custo estimado até 500 utilizadores:** $0/mês (tiers gratuitos de Supabase + Vercel)
