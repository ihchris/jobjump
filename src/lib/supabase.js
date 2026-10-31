import { PUBLIC_DEMO } from './release'
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseConfigured = !PUBLIC_DEMO && Boolean(url && key)

export const supabase = supabaseConfigured
  ? createClient(url, key)
  : null
