import { useState } from 'react'
import { LS } from '../../utils/storage'

const CRM_KEY = 'nj_crm'

const STATUS_OPTIONS = [
  { id: 'to_contact', label: 'Para contatar', color: 'bg-slate-100 text-slate-600' },
  { id: 'contacted', label: 'Contatado', color: 'bg-blue-100 text-blue-700' },
  { id: 'meeting', label: 'Reunião marcada', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'opportunity', label: 'Oportunidade', color: 'bg-green-100 text-green-700' },
  { id: 'inactive', label: 'Inativo', color: 'bg-slate-50 text-slate-400' },
]

const CHANNELS = ['LinkedIn', 'Email', 'Evento', 'Indicação', 'Outro']

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
          <input className={inp} placeholder="Ex: Google Portugal" value={form.company} onChange={set('company')} />
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

export default function NetworkingPage() {
  const [contacts, setContacts] = useState(() => LS.get(CRM_KEY, []))
  const [adding, setAdding] = useState(false)
  const [editId, setEditId] = useState(null)
  const [filter, setFilter] = useState('all')
  const [form, setForm] = useState(EMPTY_FORM)

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

  const startEdit = (c) => {
    setForm({ name: c.name, company: c.company || '', role: c.role || '', channel: c.channel || 'LinkedIn', status: c.status || 'to_contact', lastContact: c.lastContact || '', notes: c.notes || '' })
    setEditId(c.id)
    setAdding(false)
  }

  const cancelEdit = () => { setEditId(null); setForm(EMPTY_FORM) }

  const filtered = filter === 'all' ? contacts : contacts.filter((c) => c.status === filter)
  const overdueCount = contacts.filter((c) => {
    const d = daysSince(c.lastContact)
    return d !== null && d > 14 && c.status !== 'inactive'
  }).length

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-black text-slate-800">CRM de Networking</h1>
          <p className="text-slate-500 text-sm mt-1">Gerencie seus contatos e nunca perca o controle da situação.</p>
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

      {overdueCount > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
          <span className="text-2xl">⏰</span>
          <div>
            <div className="font-bold text-amber-800 text-sm">
              {overdueCount} contato{overdueCount > 1 ? 's' : ''} sem atividade há +14 dias
            </div>
            <div className="text-amber-600 text-xs mt-0.5">
              Considere enviar uma mensagem de follow-up para manter a relação ativa.
            </div>
          </div>
        </div>
      )}

      {adding && (
        <ContactForm
          form={form} setForm={setForm}
          onSave={addContact}
          onCancel={() => { setAdding(false); setForm(EMPTY_FORM) }}
          saveLabel="Adicionar contato →"
        />
      )}

      {contacts.length > 0 && (
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
      )}

      {filtered.length === 0 && !adding && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🤝</div>
          <div className="font-bold text-slate-700 mb-2">
            {contacts.length === 0 ? 'Nenhum contato ainda' : 'Nenhum contato nesta categoria'}
          </div>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            {contacts.length === 0
              ? '70-85% dos empregos são preenchidos por networking. Comece a construir a sua rede aqui.'
              : 'Tente outro filtro ou adiciona novos contatos.'}
          </p>
        </div>
      )}

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
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${status.color}`}>{status.label}</span>
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
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => startEdit(contact)} className="text-xs text-blue-500 hover:text-blue-700">
                    Editar
                  </button>
                  <button onClick={() => deleteContact(contact.id)} className="text-xs text-slate-300 hover:text-red-400">
                    ✕
                  </button>
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
