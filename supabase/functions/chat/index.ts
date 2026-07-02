import Anthropic from 'npm:@anthropic-ai/sdk'
import { createClient } from 'npm:@supabase/supabase-js'

const anthropic = new Anthropic({ apiKey: Deno.env.get('ANTHROPIC_API_KEY') })

const SYSTEM_PROMPT =
  'És um coach de carreira especialista em ajudar pessoas a conseguir emprego em Portugal e no Brasil. ' +
  'Dás conselhos práticos, diretos e motivadores. Respondes sempre em português. ' +
  'Mantém as respostas concisas e accionáveis.'

const FREE_DAILY_LIMIT = 5
const COOLDOWN_SECONDS = 5

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

  const token = authHeader.replace('Bearer ', '')
  const { data: { user }, error: authError } = await supabase.auth.getUser(token)
  if (authError || !user) return new Response('Unauthorized', { status: 401 })

  const { data: profile } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', user.id)
    .single()

  const isPro = profile?.plan === 'pro' || profile?.plan === 'annual'

  if (!isPro) {
    const today = new Date().toISOString().split('T')[0]
    const { data: usage } = await supabase
      .from('coach_usage')
      .select('count, last_request_at')
      .eq('user_id', user.id)
      .eq('date', today)
      .single()

    const currentCount = usage?.count ?? 0

    // Cooldown entre pedidos para prevenir spam
    if (usage?.last_request_at) {
      const secondsSince = (Date.now() - new Date(usage.last_request_at).getTime()) / 1000
      if (secondsSince < COOLDOWN_SECONDS) {
        const retryAfter = Math.ceil(COOLDOWN_SECONDS - secondsSince)
        return new Response(
          JSON.stringify({
            error: 'cooldown',
            message: `Aguarda ${retryAfter} segundos antes do próximo pedido.`,
            retryAfter,
          }),
          { status: 429, headers: { 'Content-Type': 'application/json', ...cors } }
        )
      }
    }

    if (currentCount >= FREE_DAILY_LIMIT) {
      return new Response(
        JSON.stringify({
          error: 'limit_reached',
          message: `Atingiste o limite de ${FREE_DAILY_LIMIT} mensagens diárias do plano Grátis. Faz upgrade para Pro para acesso ilimitado.`,
        }),
        { status: 429, headers: { 'Content-Type': 'application/json', ...cors } }
      )
    }

    await supabase.from('coach_usage').upsert(
      { user_id: user.id, date: today, count: currentCount + 1, last_request_at: new Date().toISOString() },
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
