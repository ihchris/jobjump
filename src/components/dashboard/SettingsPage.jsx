import { useState, useEffect } from 'react'
import { supabase, supabaseConfigured } from '../../lib/supabase'
import { LS } from '../../utils/storage'
import { Btn, Badge, Modal } from '../ui'
import { isPaid, planLabel, planDesc } from '../../utils/plans'

function ReferralSection({ userId }) {
  const [copied, setCopied] = useState(false)
  const refCode = userId?.substring(0, 8) || 'xxxxxxxx'
  const refLink = `https://www.jobjump.com.br/?ref=${refCode}`
  const copy = () => {
    navigator.clipboard.writeText(refLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-5 shadow-sm">
      <h2 className="font-bold text-slate-700 mb-1">Programa de referidos</h2>
      <p className="text-slate-500 text-sm mb-4">
        Compartilhe o JobJump com amigos. Por cada amigo que fizer upgrade para Pro através do seu link, envia-nos um email e recebe <strong>1 mês grátis</strong>.
      </p>
      <div className="flex gap-2">
        <div className="flex-1 px-3 py-2 bg-white border border-blue-200 rounded-lg text-sm text-slate-600 font-mono truncate">
          {refLink}
        </div>
        <button
          onClick={copy}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          {copied ? '✓ Copiado!' : 'Copiar link'}
        </button>
      </div>
      <p className="text-xs text-slate-400 mt-3">
        Depois de o seu amigo fazer upgrade, envia o email <strong>chrisafonsocontato@gmail.com</strong> com o assunto "Referido — {refCode}" para ativar o seu mês grátis.
      </p>
    </div>
  )
}

const AREA_OPTIONS = [
  { value: '', label: 'Selecione a sua área...' },
  { value: 'tech', label: 'Tecnologia / Dev' },
  { value: 'product_ux', label: 'Product Design / UX' },
  { value: 'data_ai', label: 'Dados, Analytics e IA' },
  { value: 'marketing', label: 'Marketing / Comunicação' },
  { value: 'sales', label: 'Vendas / Comercial' },
  { value: 'hr', label: 'RH / Pessoas' },
  { value: 'finance', label: 'Financeiro / Controladoria' },
  { value: 'management', label: 'Gestão / Operações' },
  { value: 'consulting', label: 'Consultoria' },
  { value: 'law', label: 'Direito / Jurídico' },
  { value: 'engineering', label: 'Engenharia' },
  { value: 'agro', label: 'Agronegócio' },
  { value: 'health', label: 'Saúde e Ciências da Vida' },
  { value: 'education', label: 'Educação / EdTech' },
  { value: 'logistics', label: 'Logística' },
  { value: 'security', label: 'Segurança da Informação' },
  { value: 'investment', label: 'Mercado Financeiro' },
  { value: 'creative', label: 'Audiovisual e Design' },
  { value: 'media', label: 'Jornalismo e Mídia' },
  { value: 'hospitality', label: 'Turismo e Hotelaria' },
  { value: 'fashion', label: 'Moda e Varejo' },
  { value: 'public', label: 'Concursos Públicos' },
  { value: 'startup', label: 'Startups e Empreendedorismo' },
  { value: 'purpose', label: 'ESG e Terceiro Setor' },
]

export default function SettingsPage({ user, onLogout, refreshUser }) {
  const [name, setName] = useState(user.name)
  const [saved, setSaved] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [checkoutStatus, setCheckoutStatus] = useState(null)
  const [upgradeLoading, setUpgradeLoading] = useState(false)
  const [profilePrivate, setProfilePrivate] = useState(false)
  const [netProfile, setNetProfile] = useState({ area: '', bio: '', open_to_mentor: false, looking_for_peer: false })
  const [netSaved, setNetSaved] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const status = params.get('checkout')
    if (status) {
      setCheckoutStatus(status)
      window.history.replaceState({}, '', window.location.pathname)
      if (status === 'success') refreshUser()
    }
  }, [])

  useEffect(() => {
    if (supabaseConfigured && user?.id) {
      supabase.from('profiles')
        .select('profile_private, area, bio, open_to_mentor, looking_for_peer')
        .eq('id', user.id).single()
        .then(({ data }) => {
          if (!data) return
          setProfilePrivate(data.profile_private ?? false)
          setNetProfile({ area: data.area || '', bio: data.bio || '', open_to_mentor: data.open_to_mentor || false, looking_for_peer: data.looking_for_peer || false })
        })
    } else {
      setProfilePrivate(LS.get('nj_profile_private', false))
      const saved = LS.get('nj_net_profile', null)
      if (saved) setNetProfile({ area: saved.area || '', bio: saved.bio || '', open_to_mentor: saved.open_to_mentor || false, looking_for_peer: saved.looking_for_peer || false })
    }
  }, [user?.id])

  const toggleProfilePrivate = async () => {
    const next = !profilePrivate
    setProfilePrivate(next)
    if (supabaseConfigured && user?.id) {
      await supabase.from('profiles').update({ profile_private: next }).eq('id', user.id)
    } else {
      LS.set('nj_profile_private', next)
    }
  }

  const saveNetProfile = async () => {
    if (supabaseConfigured && user?.id) {
      await supabase.from('profiles').update(netProfile).eq('id', user.id)
    } else {
      LS.set('nj_net_profile', netProfile)
    }
    setNetSaved(true)
    setTimeout(() => setNetSaved(false), 2000)
  }

  const saveName = async () => {
    const newName = name.trim() || user.name
    const { error } = await supabase
      .from('profiles')
      .update({ name: newName })
      .eq('id', user.id)
    if (!error) {
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    }
  }

  const handleUpgrade = async () => {
    setUpgradeLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { returnUrl: window.location.href },
      })
      if (error) throw error
      if (data?.url) window.location.href = data.url
    } catch {
      alert('Erro ao iniciar checkout. Tente novamente.')
    }
    setUpgradeLoading(false)
  }

  const handleDeleteAccount = async () => {
    await supabase.auth.signOut()
  }

  const inp =
    'flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  return (
    <div className="p-6 animate-fade-in max-w-xl">
      <h1 className="text-2xl font-black text-slate-800 mb-6">Configurações</h1>

      {checkoutStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 font-medium text-sm animate-fade-in">
          🎉 Pagamento processado com sucesso! {planLabel(user.plan)} ativado. Aproveite o acesso total!
        </div>
      )}
      {checkoutStatus === 'cancelled' && (
        <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm animate-fade-in">
          Checkout cancelado. Você pode fazer upgrade a qualquer momento.
        </div>
      )}

      <div className="space-y-4">
        {/* Perfil de Networking */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <h2 className="font-bold text-slate-700 mb-1">Perfil de Networking</h2>
          <p className="text-slate-400 text-xs mb-4">Visível para outros membros na aba Comunidade e Networking.</p>

          {/* Preview */}
          {netProfile.area && (
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 bg-blue-500`}>
                {(user.name || 'U').slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-slate-800 text-sm">{user.name}</div>
                <div className="text-blue-600 text-xs font-semibold mt-0.5">
                  {AREA_OPTIONS.find((o) => o.value === netProfile.area)?.label}
                </div>
                {netProfile.bio && <p className="text-slate-500 text-xs mt-1 leading-relaxed line-clamp-2">{netProfile.bio}</p>}
                <div className="flex gap-1.5 mt-1.5 flex-wrap">
                  {netProfile.open_to_mentor && <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 font-semibold">🧭 Mentor(a)</span>}
                  {netProfile.looking_for_peer && <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">🔎 Parceiro(a)</span>}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Área de atuação</label>
              <select
                value={netProfile.area}
                onChange={(e) => setNetProfile((p) => ({ ...p, area: e.target.value }))}
                className={inp}
              >
                {AREA_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Bio <span className="font-normal normal-case text-slate-400">(em que você trabalha, o que está buscando...)</span></label>
              <textarea
                rows={3}
                maxLength={280}
                value={netProfile.bio}
                onChange={(e) => setNetProfile((p) => ({ ...p, bio: e.target.value }))}
                placeholder="Ex: Desenvolvedora frontend com 3 anos de exp., buscando vaga sênior em produto..."
                className={`${inp} resize-none`}
              />
              <div className="text-right text-xs text-slate-300 mt-0.5">{netProfile.bio.length}/280</div>
            </div>
            <div className="flex flex-col gap-2.5 pt-1">
              {[
                { key: 'open_to_mentor', icon: '🧭', label: 'Disponível para mentoria', desc: 'Apareço como mentor(a) no diretório' },
                { key: 'looking_for_peer', icon: '🔎', label: 'Buscando parceiro(a)', desc: 'Quero encontrar alguém para estudo/responsabilidade' },
              ].map(({ key, icon, label, desc }) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer group">
                  <div
                    onClick={() => setNetProfile((p) => ({ ...p, [key]: !p[key] }))}
                    className={`relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 cursor-pointer ${netProfile[key] ? 'bg-blue-600' : 'bg-slate-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ${netProfile[key] ? 'translate-x-4' : 'translate-x-0'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">{icon} {label}</div>
                    <div className="text-xs text-slate-400">{desc}</div>
                  </div>
                </label>
              ))}
            </div>
            <Btn onClick={saveNetProfile} variant="primary" size="sm" disabled={!netProfile.area}>
              {netSaved ? '✓ Perfil guardado' : 'Guardar perfil'}
            </Btn>
          </div>
        </div>

        {/* Conta */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <h2 className="font-bold text-slate-700 mb-4">Informações da conta</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Nome
              </label>
              <div className="flex gap-2">
                <input value={name} onChange={(e) => setName(e.target.value)} className={inp} />
                <Btn onClick={saveName} variant="secondary" size="sm">
                  {saved ? '✓ Salvo' : 'Salvar'}
                </Btn>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                E-mail
              </label>
              <div className="px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-500">
                {user.email}
              </div>
            </div>
          </div>
        </div>

        {/* Plano */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <h2 className="font-bold text-slate-700 mb-4">Plano atual</h2>
          <div className={`rounded-xl p-4 mb-4 ${isPaid(user.plan)
            ? 'bg-amber-50 border border-amber-200'
            : 'bg-slate-50 border border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <div className={`font-bold ${isPaid(user.plan) ? 'text-amber-700' : 'text-slate-700'}`}>
                  {planLabel(user.plan)}
                </div>
                <div className={`text-sm ${isPaid(user.plan) ? 'text-amber-600' : 'text-slate-500'}`}>
                  {planDesc(user.plan)}
                </div>
              </div>
              {isPaid(user.plan) && (
                <Badge className="bg-amber-400/20 text-amber-700">Ativo</Badge>
              )}
            </div>
          </div>
          {!isPaid(user.plan) ? (
            <Btn
              onClick={handleUpgrade}
              variant="primary"
              size="md"
              className="w-full"
              disabled={upgradeLoading}
            >
              {upgradeLoading ? 'Redirecionando...' : '⭐ Fazer upgrade para Pro — R$29,90/mês'}
            </Btn>
          ) : (
            <p className="text-xs text-slate-400 text-center">
              Para cancelar a assinatura, acesse o{' '}
              <a
                href="https://billing.stripe.com/p/login/test_xxx"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-slate-600"
              >
                portal de faturamento
              </a>
              .
            </p>
          )}
        </div>

        {/* Referidos */}
        <ReferralSection userId={user.id} />

        {/* Visibilidade do perfil */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <h2 className="font-bold text-slate-700 mb-1">Visibilidade do perfil</h2>
          <p className="text-slate-400 text-xs mb-4">Controla se outros membros podem ver o seu perfil de networking ao clicar no seu nome na comunidade.</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-700">
                {profilePrivate ? '🔒 Perfil privado' : '🌐 Perfil público'}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {profilePrivate
                  ? 'O seu perfil não é visível para outros membros.'
                  : 'Outros membros podem ver a sua área, bio e interesses.'}
              </div>
            </div>
            <button
              onClick={toggleProfilePrivate}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                profilePrivate ? 'bg-slate-300' : 'bg-blue-600'
              }`}
              role="switch"
              aria-checked={!profilePrivate}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                  profilePrivate ? 'translate-x-0' : 'translate-x-5'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Dados */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <h2 className="font-bold text-slate-700 mb-4">Dados e privacidade</h2>
          <div className="space-y-3">
            <button
              onClick={() => { localStorage.removeItem('nj_progress'); window.location.reload() }}
              className="text-sm text-slate-500 hover:text-red-500 transition-colors block"
            >
              Reiniciar progresso das aulas
            </button>
            <button
              onClick={() => localStorage.removeItem('nj_chat')}
              className="text-sm text-slate-500 hover:text-red-500 transition-colors block"
            >
              Excluir histórico do Coach IA
            </button>
            <div className="pt-2 border-t border-slate-100">
              {!showDeleteConfirm ? (
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="text-sm text-red-400 hover:text-red-600 transition-colors"
                >
                  Excluir conta e todos os dados
                </button>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-700 text-sm font-semibold mb-3">
                    Tem certeza? Esta ação é irreversível.
                  </p>
                  <div className="flex gap-2">
                    <Btn variant="danger" size="sm" onClick={handleDeleteAccount}>
                      Excluir tudo
                    </Btn>
                    <Btn variant="secondary" size="sm" onClick={() => setShowDeleteConfirm(false)}>
                      Cancelar
                    </Btn>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Btn onClick={onLogout} variant="danger" size="md">Sair</Btn>
      </div>
    </div>
  )
}
