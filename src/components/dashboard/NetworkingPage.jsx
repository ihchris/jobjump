import { useState, useMemo } from 'react'
import { LS } from '../../utils/storage'

const CRM_KEY = 'nj_crm'

const STATUS_OPTIONS = [
  { id: 'to_contact', label: 'Para contatar', color: 'bg-slate-100 text-slate-600', dot: 'bg-slate-400' },
  { id: 'contacted', label: 'Contatado', color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  { id: 'meeting', label: 'Reunião marcada', color: 'bg-yellow-100 text-yellow-700', dot: 'bg-yellow-500' },
  { id: 'opportunity', label: 'Oportunidade', color: 'bg-green-100 text-green-700', dot: 'bg-green-500' },
  { id: 'inactive', label: 'Inativo', color: 'bg-slate-50 text-slate-400', dot: 'bg-slate-200' },
]

const CHANNELS = ['LinkedIn', 'Email', 'Evento', 'Indicação', 'Outro']

const SCRIPTS = [
  {
    id: 'cold_linkedin',
    label: 'Conexão fria no LinkedIn',
    icon: '💬',
    template: (name, role, company) =>
      `Olá ${name || '[Nome]'},\n\nEncontrei seu perfil e me impressionei com sua trajetória${role ? ` como ${role}` : ''}${company ? ` na ${company}` : ''}. Estou expandindo minha rede com profissionais da área e adoraria conectar.\n\nAbraço,\n[Seu nome]`,
  },
  {
    id: 'coffee_chat',
    label: 'Pedir conversa rápida',
    icon: '☕',
    template: (name, role, company) =>
      `Olá ${name || '[Nome]'},\n\nEstou explorando oportunidades em [área] e sua experiência${role ? ` como ${role}` : ''}${company ? ` na ${company}` : ''} parece muito relevante. Seria possível uma conversa de 20 minutos para entender melhor sua perspectiva sobre o mercado?\n\nSem pressão se estiver ocupado!\n\n[Seu nome]`,
  },
  {
    id: 'followup',
    label: 'Follow-up após contato',
    icon: '🔁',
    template: (name) =>
      `Olá ${name || '[Nome]'},\n\nPassando para reforçar meu interesse em continuar a conversa que tivemos. Qualquer atualização da sua parte seria muito bem-vinda!\n\nObrigado pela atenção,\n[Seu nome]`,
  },
  {
    id: 'post_meeting',
    label: 'Agradecimento pós-reunião',
    icon: '🙏',
    template: (name) =>
      `Olá ${name || '[Nome]'},\n\nObrigado pela conversa de hoje! Foi muito enriquecedor ouvir sua perspectiva. Vou seguir com [próximo passo que combinamos] e me volto em breve.\n\nGrande abraço,\n[Seu nome]`,
  },
  {
    id: 'referral_ask',
    label: 'Pedir indicação',
    icon: '🎯',
    template: (name, role, company) =>
      `Olá ${name || '[Nome]'},\n\nEstou em busca de novas oportunidades em [área] e me lembrei imediatamente de você${company ? ` pela sua conexão com a ${company}` : ''}. Caso conheça alguém ou saiba de vagas relevantes, ficaria muito grato por uma indicação ou introdução.\n\nDe qualquer forma, como vai você?\n\n[Seu nome]`,
  },
]

function daysSince(dateStr) {
  if (!dateStr) return null
  const d = new Date(dateStr)
  if (isNaN(d)) return null
  return Math.floor((Date.now() - d.getTime()) / 86400000)
}

const EMPTY_FORM = { name: '', company: '', role: '', channel: 'LinkedIn', status: 'to_contact', lastContact: '', notes: '' }

function ContactForm({ form, setForm, onSave, onCancel, saveLabel }) {
  const inp = 'w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Nome *</label>
          <input className={inp} placeholder="Ex: Ana Sousa" value={form.name} onChange={set('name')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Empresa</label>
          <input className={inp} placeholder="Ex: Google" value={form.company} onChange={set('company')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cargo</label>
          <input className={inp} placeholder="Ex: Engineering Manager" value={form.role} onChange={set('role')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Canal</label>
          <select className={inp} value={form.channel} onChange={set('channel')}>
            {CHANNELS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Último contato</label>
          <input type="date" className={inp} value={form.lastContact} onChange={set('lastContact')} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Estado</label>
          <select className={inp} value={form.status} onChange={set('status')}>
            {STATUS_OPTIONS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Notas</label>
        <textarea className={inp} rows={2} placeholder="Contexto, tópicos discutidos, próximo passo..." value={form.notes} onChange={set('notes')} />
      </div>
      <div className="flex gap-2">
        <button
          onClick={onSave}
          disabled={!form.name.trim()}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${form.name.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
        >
          {saveLabel}
        </button>
        <button onClick={onCancel} className="px-4 py-2 rounded-xl text-sm text-slate-500 hover:text-slate-700">
          Cancelar
        </button>
      </div>
    </div>
  )
}

function ScriptsModal({ contact, onClose }) {
  const [selected, setSelected] = useState(SCRIPTS[0].id)
  const [copied, setCopied] = useState(false)

  const script = SCRIPTS.find(s => s.id === selected)
  const text = script?.template(contact.name, contact.role, contact.company) || ''

  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div>
            <div className="font-bold text-slate-800">Scripts prontos</div>
            <div className="text-slate-400 text-xs mt-0.5">para {contact.name}</div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none">✕</button>
        </div>
        <div className="p-5 space-y-4">
          <div className="flex flex-wrap gap-2">
            {SCRIPTS.map(s => (
              <button
                key={s.id}
                onClick={() => { setSelected(s.id); setCopied(false) }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${selected === s.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <span>{s.icon}</span> {s.label}
              </button>
            ))}
          </div>
          <textarea
            readOnly
            value={text}
            className="w-full border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none bg-slate-50 focus:outline-none"
            rows={8}
          />
          <div className="flex gap-2">
            <button
              onClick={copy}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              {copied ? '✓ Copiado!' : 'Copiar mensagem'}
            </button>
            <button onClick={onClose} className="px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:text-slate-700 border border-slate-200">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsBar({ contacts }) {
  const total = contacts.length
  if (total === 0) return null

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
      {STATUS_OPTIONS.map(s => {
        const count = contacts.filter(c => c.status === s.id).length
        const pct = total > 0 ? Math.round(count / total * 100) : 0
        return (
          <div key={s.id} className="bg-white rounded-xl border border-slate-100 p-3 text-center">
            <div className={`w-2 h-2 rounded-full ${s.dot} mx-auto mb-1.5`} />
            <div className="text-lg font-black text-slate-800">{count}</div>
            <div className="text-xs text-slate-400 leading-tight">{s.label}</div>
            {pct > 0 && <div className="text-xs text-slate-300 mt-0.5">{pct}%</div>}
          </div>
        )
      })}
    </div>
  )
}

export default function NetworkingPage() {
  const [contacts, setContacts] = useState(() => LS.get(CRM_KEY, []))
  const [adding, setAdding] = useState(false)
  const [editId, setEditId] = useState(null)
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('recent')
  const [form, setForm] = useState(EMPTY_FORM)
  const [search, setSearch] = useState('')
  const [scriptsFor, setScriptsFor] = useState(null)

  const save = (updated) => { setContacts(updated); LS.set(CRM_KEY, updated) }

  const addContact = () => {
    if (!form.name.trim()) return
    save([{ ...form, id: Date.now(), name: form.name.trim() }, ...contacts])
    setForm(EMPTY_FORM)
    setAdding(false)
  }

  const updateContact = () => {
    save(contacts.map((c) => c.id === editId ? { ...form, id: editId } : c))
    setEditId(null)
    setForm(EMPTY_FORM)
  }

  const deleteContact = (id) => save(contacts.filter((c) => c.id !== id))

  const quickStatus = (id, newStatus) => {
    const updated = contacts.map(c => c.id === id ? { ...c, status: newStatus, lastContact: new Date().toISOString().split('T')[0] } : c)
    save(updated)
  }

  const startEdit = (c) => {
    setForm({ name: c.name, company: c.company || '', role: c.role || '', channel: c.channel || 'LinkedIn', status: c.status || 'to_contact', lastContact: c.lastContact || '', notes: c.notes || '' })
    setEditId(c.id)
    setAdding(false)
  }

  const cancelEdit = () => { setEditId(null); setForm(EMPTY_FORM) }

  const overdueCount = contacts.filter((c) => {
    const d = daysSince(c.lastContact)
    return d !== null && d > 14 && c.status !== 'inactive'
  }).length

  const filtered = useMemo(() => {
    let list = filter === 'all' ? contacts : contacts.filter(c => c.status === filter)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        (c.company || '').toLowerCase().includes(q) ||
        (c.role || '').toLowerCase().includes(q)
      )
    }
    if (sort === 'overdue') {
      list = [...list].sort((a, b) => {
        const da = daysSince(a.lastContact) ?? -1
        const db = daysSince(b.lastContact) ?? -1
        return db - da
      })
    } else if (sort === 'alpha') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    }
    return list
  }, [contacts, filter, search, sort])

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      {scriptsFor && <ScriptsModal contact={scriptsFor} onClose={() => setScriptsFor(null)} />}

      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-black text-slate-800">CRM de Networking</h1>
          <p className="text-slate-500 text-sm mt-1">70-85% dos empregos são preenchidos por networking. Gerencie cada contato.</p>
        </div>
        {!adding && !editId && (
          <button
            onClick={() => setAdding(true)}
            className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            + Novo contato
          </button>
        )}
      </div>

      {/* Stats */}
      <StatsBar contacts={contacts} />

      {/* Alerta overdue */}
      {overdueCount > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
          <span className="text-2xl">⏰</span>
          <div>
            <div className="font-bold text-amber-800 text-sm">
              {overdueCount} contato{overdueCount > 1 ? 's' : ''} sem atividade há +14 dias
            </div>
            <div className="text-amber-600 text-xs mt-0.5">
              Use os scripts prontos para retomar a conversa rapidamente.
            </div>
          </div>
        </div>
      )}

      {/* Formulário novo contato */}
      {adding && (
        <ContactForm
          form={form} setForm={setForm}
          onSave={addContact}
          onCancel={() => { setAdding(false); setForm(EMPTY_FORM) }}
          saveLabel="Adicionar contato →"
        />
      )}

      {/* Busca + filtros */}
      {contacts.length > 0 && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar por nome, empresa ou cargo..."
                className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recent">Mais recentes</option>
              <option value="overdue">Mais atrasados</option>
              <option value="alpha">A–Z</option>
            </select>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
            >
              Todos ({contacts.length})
            </button>
            {STATUS_OPTIONS.map((s) => {
              const count = contacts.filter((c) => c.status === s.id).length
              if (count === 0) return null
              return (
                <button
                  key={s.id}
                  onClick={() => setFilter(s.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${filter === s.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                >
                  {s.label} ({count})
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && !adding && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🤝</div>
          <div className="font-bold text-slate-700 mb-2">
            {contacts.length === 0 ? 'Nenhum contato ainda' : 'Nenhum resultado para a busca'}
          </div>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            {contacts.length === 0
              ? 'Adicione seus contatos e use os scripts prontos para nunca ficar sem saber o que escrever.'
              : 'Tente outro termo ou remova os filtros.'}
          </p>
        </div>
      )}

      {/* Lista de contatos */}
      <div className="space-y-3">
        {filtered.map((contact) => {
          const status = STATUS_OPTIONS.find((s) => s.id === contact.status) || STATUS_OPTIONS[0]
          const days = daysSince(contact.lastContact)
          const overdue = days !== null && days > 14 && contact.status !== 'inactive'

          if (editId === contact.id) {
            return (
              <div key={contact.id}>
                <ContactForm
                  form={form} setForm={setForm}
                  onSave={updateContact}
                  onCancel={cancelEdit}
                  saveLabel="Salvar alterações →"
                />
              </div>
            )
          }

          return (
            <div
              key={contact.id}
              className={`bg-white rounded-2xl border p-4 transition-all ${overdue ? 'border-amber-200' : 'border-slate-100'}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-black text-sm flex-shrink-0">
                  {contact.name[0]?.toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-800 text-sm">{contact.name}</span>
                    {/* Quick status selector */}
                    <select
                      value={contact.status}
                      onChange={e => quickStatus(contact.id, e.target.value)}
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 ${status.color}`}
                    >
                      {STATUS_OPTIONS.map(s => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                    {overdue && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-amber-100 text-amber-700">
                        ⏰ {days}d sem contato
                      </span>
                    )}
                  </div>
                  {(contact.role || contact.company) && (
                    <div className="text-slate-500 text-xs mt-0.5">
                      {contact.role}{contact.role && contact.company ? ' · ' : ''}{contact.company}
                    </div>
                  )}
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    {contact.channel && <span className="text-xs text-slate-400">via {contact.channel}</span>}
                    {contact.lastContact && (
                      <span className="text-xs text-slate-400">
                        Último contato: {new Date(contact.lastContact + 'T00:00:00').toLocaleDateString('pt-BR')}
                      </span>
                    )}
                  </div>
                  {contact.notes && <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{contact.notes}</p>}

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => setScriptsFor(contact)}
                      className="text-xs text-blue-500 hover:text-blue-700 font-semibold flex items-center gap-1"
                    >
                      💬 Scripts prontos
                    </button>
                    <button onClick={() => startEdit(contact)} className="text-xs text-slate-400 hover:text-slate-600">
                      Editar
                    </button>
                    <button onClick={() => deleteContact(contact.id)} className="text-xs text-slate-200 hover:text-red-400">
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {contacts.length > 0 && (
        <p className="text-xs text-slate-400">Dados salvos localmente no seu navegador.</p>
      )}
    </div>
  )
}
