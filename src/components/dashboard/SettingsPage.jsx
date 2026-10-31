import { useState } from 'react'
import { Btn, Modal } from '../ui'
import { storageAvailable } from '../../utils/storage'

// Only demonstration data; never export legacy credentials or authentication tokens.
const demoKey = key => /^(nj_(progress|practice_tasks|bookmarks|journal|notifications|streak|streak_best|streak_date|star_library|checklist|tracker|networking_week|networking_week_meta|networking_week_tasks|tracker_followup_dismissed|journal_free_truncated|cv_analyses|theme|onboarded)$|nj_gam_|nj_goals_|nj_day_|nj_weekly_prep_|nj_notes_)/.test(key)
export default function SettingsPage({ onTerms, onPrivacy }) {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('nj_theme') || 'system' } catch { return 'system' } })
  const [clear, setClear] = useState(false)
  const [message, setMessage] = useState('')
  const available = storageAvailable()
  const changeTheme = value => {
    setTheme(value)
    try { localStorage.setItem('nj_theme', value) } catch { setMessage('Preferência aplicada apenas nesta sessão.') }
    document.documentElement.classList.toggle('dark', value === 'dark' || (value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches))
  }
  const exportData = () => {
    try {
      const data = Object.fromEntries(Object.keys(localStorage).filter(demoKey).map(key => { const raw = localStorage.getItem(key); let value; try { value = JSON.parse(raw) } catch { value = raw } return [key, value] }))
      const url = URL.createObjectURL(new Blob([JSON.stringify({ format: 'jobjump-demo-v1', exportedAt: new Date().toISOString(), data }, null, 2)], { type: 'application/json' }))
      const link = document.createElement('a'); link.href = url; link.download = 'jobjump-demonstracao.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
      setMessage('Exportação iniciada. O arquivo pode conter anotações pessoais; guarde-o com cuidado.')
    } catch { setMessage('Não foi possível exportar os dados deste navegador.') }
  }
  const clearData = () => {
    try { Object.keys(localStorage).filter(demoKey).forEach(key => localStorage.removeItem(key)); window.location.reload() }
    catch { setMessage('Não foi possível limpar o armazenamento. Use as configurações do seu navegador.'); setClear(false) }
  }
  return <div className="p-4 sm:p-6 max-w-3xl space-y-6">
    <div><h1 className="text-2xl font-black text-slate-800">Configurações</h1><p className="text-slate-600 mt-2">Preferências e dados desta demonstração. Não há uma conta ou assinatura associada.</p></div>
    <section className="bg-white rounded-2xl border border-slate-200 p-5"><h2 className="font-bold text-lg text-slate-800 mb-4">Aparência</h2><label htmlFor="theme" className="block text-sm text-slate-700 mb-2">Tema do site</label><select id="theme" value={theme} onChange={e => changeTheme(e.target.value)} className="border border-slate-300 rounded-xl p-3 w-full"><option value="system">Seguir o dispositivo</option><option value="light">Claro</option><option value="dark">Escuro</option></select></section>
    <section className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4"><h2 className="font-bold text-lg text-slate-800">Seus dados neste navegador</h2><p className="text-slate-600 text-sm">Progresso, diagnóstico, favoritos e anotações ficam no dispositivo. Não são enviados a uma base de dados nem sincronizados. A limpeza do navegador pode apagá-los.</p>{!available && <p role="status" className="text-amber-700">O armazenamento está indisponível. Os dados podem durar apenas nesta sessão.</p>}<div className="flex flex-col sm:flex-row gap-3"><Btn onClick={exportData} variant="secondary">Exportar dados locais</Btn><Btn onClick={() => setClear(true)} variant="danger">Apagar dados da demonstração</Btn></div></section>
    <section className="bg-white rounded-2xl border border-slate-200 p-5"><h2 className="font-bold text-lg text-slate-800">Disponibilidade</h2><p className="text-slate-600 text-sm mt-3">Esta versão não oferece cadastro, cobrança ou plano pago. Contas e pagamentos só serão disponibilizados após configuração e validação.</p><div className="flex gap-5 mt-4"><button onClick={onPrivacy} className="text-blue-600 underline">Privacidade</button><button onClick={onTerms} className="text-blue-600 underline">Termos de uso</button></div></section>
    {message && <p role="status" className="text-slate-700 text-sm">{message}</p>}
    <Modal open={clear} onClose={() => setClear(false)} title="Apagar dados locais?"><p className="text-slate-600 text-sm mb-5">Isso apaga o progresso e as anotações da demonstração neste navegador. Exporte uma cópia antes de continuar se quiser guardar seus registros.</p><div className="flex flex-wrap gap-3"><Btn onClick={() => setClear(false)} variant="secondary">Cancelar</Btn><Btn onClick={clearData} variant="danger">Confirmar exclusão</Btn></div></Modal>
  </div>
}
