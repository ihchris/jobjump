import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Btn } from '../ui'

export default function RecoveryPage({ onDone }) {
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const submit = async (event) => {
    event.preventDefault()
    if (password.length < 6) { setError('Use pelo menos 6 caracteres.'); return }
    if (password !== confirmation) { setError('As senhas precisam ser iguais.'); return }
    setLoading(true); setError('')
    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) { setError('Não foi possível atualizar a senha. Solicite um novo link ou tente novamente.'); return }
      setSaved(true)
    } catch { setError('Erro de conexão. Tente novamente.') }
    finally { setLoading(false) }
  }
  return <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <form onSubmit={submit} className="bg-white rounded-2xl border p-8 w-full max-w-md space-y-4">
      <h1 className="text-2xl font-bold text-slate-800">Criar nova senha</h1>
      {saved ? <><p role="status">Senha atualizada com sucesso.</p><Btn onClick={onDone}>Continuar</Btn></> : <>
        <label className="block">Nova senha<input type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full border rounded-xl p-3 mt-1" /></label>
        <label className="block">Confirmar nova senha<input type="password" autoComplete="new-password" value={confirmation} onChange={e => setConfirmation(e.target.value)} className="block w-full border rounded-xl p-3 mt-1" /></label>
        {error && <p role="alert" className="text-red-600">{error}</p>}
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white font-bold rounded-xl p-3 disabled:opacity-50">{loading ? 'Salvando…' : 'Salvar nova senha'}</button>
      </>}
    </form>
  </main>
}
