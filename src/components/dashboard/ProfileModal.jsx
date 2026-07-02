import { useState, useEffect } from 'react'
import { supabase, supabaseConfigured } from '../../lib/supabase'
import { LS } from '../../utils/storage'

const AREA_LABELS = {
  tech:'Tecnologia / Dev', product_ux:'Product Design / UX', data_ai:'Dados, Analytics e IA',
  marketing:'Marketing / Comunicação', sales:'Vendas / Comercial', hr:'RH / Pessoas',
  finance:'Financeiro / Controladoria', management:'Gestão / Operações', consulting:'Consultoria',
  law:'Direito / Jurídico', engineering:'Engenharia', agro:'Agronegócio',
  health:'Saúde e Ciências da Vida', education:'Educação / EdTech', logistics:'Logística',
  security:'Segurança da Informação', investment:'Mercado Financeiro', creative:'Audiovisual e Design',
  media:'Jornalismo e Mídia', hospitality:'Turismo e Hotelaria', fashion:'Moda e Varejo',
  public:'Concursos Públicos', startup:'Startups e Empreendedorismo', purpose:'ESG e Terceiro Setor',
}

const AVATAR_COLORS = ['bg-blue-500','bg-indigo-500','bg-violet-500','bg-emerald-500','bg-orange-500','bg-rose-500','bg-cyan-500','bg-teal-500']
function avatarColor(name) {
  let h = 0
  for (const c of (name || '')) h = ((h * 31) + c.charCodeAt(0)) | 0
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length]
}

/**
 * ProfileModal — compact card by default, expandable to full profile.
 *
 * Props:
 *   name            — display name (fallback if profile not loaded yet)
 *   userId          — Supabase user ID (used for DM check and fetching if no prefetchedProfile)
 *   prefetchedProfile — if provided the data is used directly, no fetch is made
 *   onClose         — () => void
 *   onMessage       — (userId) => void — if provided, "Enviar mensagem" button appears
 *   currentUser     — logged-in user object — prevents DMing yourself
 */
export default function ProfileModal({ name, userId, prefetchedProfile, onClose, onMessage, currentUser }) {
  const [profile, setProfile] = useState(prefetchedProfile || null)
  const [loading, setLoading] = useState(!prefetchedProfile)
  const [expanded, setExpanded] = useState(false)
  const [imgErr, setImgErr] = useState(false)

  useEffect(() => {
    if (prefetchedProfile) return
    let cancelled = false
    const load = async () => {
      if (supabaseConfigured && userId && userId !== 'seed') {
        const { data } = await supabase
          .from('profiles')
          .select('name, area, bio, open_to_mentor, looking_for_peer, profile_private, avatar_url, job_title, location, linkedin_url, skills')
          .eq('id', userId)
          .single()
        if (!cancelled) setProfile(data || { name })
      } else {
        // demo mode: show logged-in user's own LS profile
        const saved = LS.get('nj_net_profile', null)
        if (!cancelled) setProfile(saved ? { name, ...saved } : { name })
      }
      if (!cancelled) setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [userId, name, prefetchedProfile])

  const displayName = profile?.name || name
  const isSeed = !userId || userId === 'seed' || (userId && userId.startsWith('seed_'))
  const canDM = !profile?.profile_private && onMessage && !isSeed && userId !== currentUser?.id

  const AvatarDisplay = ({ sizeClass, textClass }) => {
    if (profile?.avatar_url && !imgErr) {
      return <img src={profile.avatar_url} alt={displayName} className={`${sizeClass} rounded-full object-cover flex-shrink-0`} onError={() => setImgErr(true)} />
    }
    return (
      <div className={`${sizeClass} ${avatarColor(displayName)} rounded-full flex items-center justify-center text-white font-black flex-shrink-0`}>
        <span className={textClass}>{displayName.slice(0, 2).toUpperCase()}</span>
      </div>
    )
  }

  // ── Perfil expandido ─────────────────────────────────────────────────────────
  if (expanded) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4 animate-fade-in" onClick={onClose}>
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 pt-6 pb-14 relative flex-shrink-0">
            <button onClick={() => setExpanded(false)} className="absolute top-4 left-4 flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors">
              ← Voltar
            </button>
            <button onClick={onClose} className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-lg transition-colors">×</button>
          </div>

          <div className="-mt-10 px-6 flex items-end justify-between flex-shrink-0">
            <div className="border-4 border-white rounded-full shadow-lg">
              <AvatarDisplay sizeClass="w-20 h-20" textClass="text-2xl" />
            </div>
            {canDM && (
              <button onClick={() => { onClose(); onMessage(userId) }}
                className="mb-1 flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow">
                💬 Mensagem
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-7 bg-slate-200 rounded w-48" />
                <div className="h-4 bg-slate-100 rounded w-32" />
              </div>
            ) : profile?.profile_private ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🔒</div>
                <h2 className="font-black text-slate-800 text-xl mb-2">{displayName}</h2>
                <p className="text-slate-400 text-sm">Este utilizador optou por manter o perfil privado.</p>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="font-black text-slate-800 text-xl leading-tight">{displayName}</h2>
                  {profile?.job_title && <p className="text-slate-500 text-sm mt-0.5">{profile.job_title}</p>}
                  {profile?.location && <p className="text-slate-400 text-xs mt-1 flex items-center gap-1"><span>📍</span>{profile.location}</p>}
                </div>

                {profile?.area && (
                  <span className="inline-block text-blue-600 text-xs font-semibold px-3 py-1 bg-blue-50 rounded-full">
                    {AREA_LABELS[profile.area] || profile.area}
                  </span>
                )}

                {profile?.bio && (
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Sobre</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{profile.bio}</p>
                  </div>
                )}

                {profile?.skills?.length > 0 && (
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {(profile?.open_to_mentor || profile?.looking_for_peer) && (
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Disponibilidade</p>
                    <div className="flex gap-2 flex-wrap">
                      {profile.open_to_mentor && <span className="text-xs px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 font-semibold">🧭 Disponível para mentoria</span>}
                      {profile.looking_for_peer && <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">🔎 Busca parceiro(a)</span>}
                    </div>
                  </div>
                )}

                {profile?.linkedin_url && (
                  <a href={profile.linkedin_url.startsWith('http') ? profile.linkedin_url : `https://${profile.linkedin_url}`}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    🔗 Ver LinkedIn
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── Card compacto ────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <AvatarDisplay sizeClass="w-16 h-16" textClass="text-2xl" />
          </div>

          {loading ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-5 bg-slate-200 rounded-lg w-36 mx-auto" />
              <div className="h-3 bg-slate-100 rounded w-24 mx-auto" />
            </div>
          ) : profile?.profile_private ? (
            <>
              <h2 className="font-black text-slate-800 text-lg mb-4">{displayName}</h2>
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <span className="text-3xl">🔒</span>
                <span className="text-sm">Este utilizador optou por manter o perfil privado.</span>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-black text-slate-800 text-lg leading-tight">{displayName}</h2>
              {profile?.job_title && <p className="text-slate-500 text-xs mt-0.5 mb-1">{profile.job_title}</p>}
              {profile?.location && <p className="text-slate-400 text-[11px] mb-2">📍 {profile.location}</p>}
              {profile?.area && (
                <span className="inline-block text-blue-600 text-xs font-semibold px-3 py-1 bg-blue-50 rounded-full mb-3">
                  {AREA_LABELS[profile.area] || profile.area}
                </span>
              )}
              {profile?.bio ? (
                <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-3">{profile.bio}</p>
              ) : (
                <p className="text-slate-400 text-sm mb-3">Perfil de networking não preenchido.</p>
              )}
              {(profile?.open_to_mentor || profile?.looking_for_peer) && (
                <div className="flex justify-center gap-2 flex-wrap mb-3">
                  {profile.open_to_mentor && <span className="text-xs px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 font-semibold">🧭 Mentoria</span>}
                  {profile.looking_for_peer && <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">🔎 Parceiro(a)</span>}
                </div>
              )}
              <button onClick={() => setExpanded(true)} className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Ver perfil completo →
              </button>
            </>
          )}
        </div>
        <div className="border-t border-slate-100 px-6 py-3 flex items-center justify-between gap-3">
          <button onClick={onClose} className="text-sm text-slate-500 hover:text-slate-700 font-semibold transition-colors">
            Fechar
          </button>
          {!loading && canDM && (
            <button onClick={() => { onClose(); onMessage(userId) }}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors">
              💬 Enviar mensagem
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
