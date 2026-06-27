import Anthropic from 'npm:@anthropic-ai/sdk'
import { createClient } from 'npm:@supabase/supabase-js'

const anthropic = new Anthropic({ apiKey: Deno.env.get('ANTHROPIC_API_KEY') })

const SYSTEM_PROMPT =
  'És um coach de carreira especialista em ajudar pessoas a conseguir emprego em Portugal e no Brasil. ' +
  'Dás conselhos práticos, diretos e motivadores. Respondes sempre em português. ' +
  'Mantém as respostas concisas e accionáveis.'

const FREE_DAILY_LIMIT = 5

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })

  const authHeader = req.headers.get('Authorization')
  if (!authHeader) return new Response('Unauthorized', { status: 401 })

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  // Verificar JWT e obter utilizador
  const token = authHeader.replace('Bearer ', '')
  const { data: { user }, error: authError } = await supabase.auth.getUser(token)
  if (authError || !user) return new Response('Unauthorized', { status: 401 })

  // Verificar plano
  const { data: profile } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', user.id)
    .single()
  const isPro = profile?.plan === 'pro'

  // Aplicar limite diário para plano grátis
  if (!isPro) {
    const today = new Date().toISOString().split('T')[0]
    const { data: usage } = await supabase
      .from('coach_usage')
      .select('count')
      .eq('user_id', user.id)
      .eq('date', today)
      .single()

    const currentCount = usage?.count ?? 0
    if (currentCount >= FREE_DAILY_LIMIT) {
      return new Response(
        JSON.stringify({
          error: 'limit_reached',
          message: `Atingiste o limite de ${FREE_DAILY_LIMIT} mensagens diárias do plano Grátis. Faz upgrade para Pro para acesso ilimitado.`,
        }),
        { status: 429, headers: { 'Content-Type': 'application/json', ...cors } }
      )
    }

    // Incrementar contador (upsert)
    await supabase.from('coach_usage').upsert(
      { user_id: user.id, date: today, count: currentCount + 1 },
      { onConflict: 'user_id,date' }
    )
  }

  const { messages } = await req.json()

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
  })

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json', ...cors },
  })
})
