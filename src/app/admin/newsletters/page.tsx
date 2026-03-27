'use client'
import { useState } from 'react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { ArrowLeft, Calendar, Check, Clock, Crown, Edit, Eye, Mail, Plus, Send, Trash2, Users } from 'lucide-react'
import Link from 'next/link'

const demoNewsletters = [
  { id: '1', subject: 'Flash Promo : -50% sur les AirPods Pro 2 !', audience: 'all', status: 'sent', sentAt: '27 mars 2026 08:00', opens: 4521, clicks: 1892 },
  { id: '2', subject: 'VIP Weekly : Les 10 meilleures offres de la semaine', audience: 'vip', status: 'sent', sentAt: '26 mars 2026 10:00', opens: 1234, clicks: 567 },
  { id: '3', subject: 'Alerte : Samsung Galaxy S24 à -39% !', audience: 'all', status: 'sent', sentAt: '25 mars 2026 14:30', opens: 6789, clicks: 3421 },
  { id: '4', subject: 'Soldes de printemps : jusqu\'à -70% sur la mode', audience: 'all', status: 'scheduled', sentAt: '28 mars 2026 09:00', opens: 0, clicks: 0 },
  { id: '5', subject: 'VIP Exclusif : Dyson à prix cassé ce weekend', audience: 'vip', status: 'draft', sentAt: null, opens: 0, clicks: 0 },
]

export default function AdminNewslettersPage() {
  const [showComposer, setShowComposer] = useState(false)
  const [subject, setSubject] = useState('')
  const [audience, setAudience] = useState('all')
  const [content, setContent] = useState('')

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/admin" className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour au dashboard
      </Link>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
            <Mail className="w-7 h-7 text-blue-500" /> Newsletters
          </h1>
          <p className="text-slate-500 text-sm mt-1">Créez et envoyez des newsletters à vos abonnés</p>
        </div>
        <Button className="gap-2" onClick={() => setShowComposer(!showComposer)}>
          <Plus className="w-4 h-4" /> Nouvelle newsletter
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, label: 'Abonnés total', value: '12,543', color: 'text-blue-500 bg-blue-50' },
          { icon: Crown, label: 'Abonnés VIP', value: '2,543', color: 'text-amber-500 bg-amber-50' },
          { icon: Mail, label: 'Newsletters envoyées', value: '47', color: 'text-emerald-500 bg-emerald-50' },
          { icon: Eye, label: 'Taux d\'ouverture moyen', value: '34.2%', color: 'text-purple-500 bg-purple-50' },
        ].map(stat => (
          <Card key={stat.label} className="p-4">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.color} mb-2`}>
              <stat.icon className="w-4 h-4" />
            </div>
            <p className="text-xl font-extrabold text-slate-800">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Composer */}
      {showComposer && (
        <Card className="p-6 mb-8 border-blue-200 bg-blue-50/30">
          <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Edit className="w-5 h-5 text-blue-500" /> Composer une newsletter
          </h2>
          <div className="space-y-4">
            <Input
              label="Objet de l'email"
              placeholder="Ex: Flash Promo : -50% sur les AirPods Pro 2 !"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Audience cible</label>
              <div className="flex gap-2">
                {[
                  { id: 'all', label: 'Tous les abonnés', count: '12,543' },
                  { id: 'vip', label: 'VIP uniquement', count: '2,543' },
                  { id: 'free', label: 'Gratuits uniquement', count: '10,000' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setAudience(opt.id)}
                    className={`flex-1 p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                      audience === opt.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    {opt.label}
                    <span className="block text-xs text-slate-400 mt-0.5">{opt.count} destinataires</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contenu (HTML)</label>
              <textarea
                className="w-full h-48 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                placeholder="<h1>Les meilleures promos du jour !</h1>&#10;<p>Découvrez nos offres sélectionnées...</p>"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <Button className="gap-2"><Send className="w-4 h-4" /> Envoyer maintenant</Button>
              <Button variant="outline" className="gap-2"><Calendar className="w-4 h-4" /> Programmer</Button>
              <Button variant="ghost" className="gap-2"><Eye className="w-4 h-4" /> Prévisualiser</Button>
              <Button variant="ghost" onClick={() => setShowComposer(false)}>Annuler</Button>
            </div>
          </div>
        </Card>
      )}

      {/* Newsletter List */}
      <Card className="overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h2 className="font-bold text-slate-800">Historique des newsletters</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {demoNewsletters.map(nl => (
            <div key={nl.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4 min-w-0">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  nl.status === 'sent' ? 'bg-emerald-50' : nl.status === 'scheduled' ? 'bg-blue-50' : 'bg-slate-50'
                }`}>
                  {nl.status === 'sent' ? <Check className="w-5 h-5 text-emerald-500" /> :
                   nl.status === 'scheduled' ? <Clock className="w-5 h-5 text-blue-500" /> :
                   <Edit className="w-5 h-5 text-slate-400" />}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm text-slate-800 truncate">{nl.subject}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge variant={nl.audience === 'vip' ? 'vip' : 'default'} className="text-[10px]">
                      {nl.audience === 'vip' ? '👑 VIP' : '📧 Tous'}
                    </Badge>
                    <span className="text-xs text-slate-400">
                      {nl.status === 'sent' ? `Envoyé le ${nl.sentAt}` :
                       nl.status === 'scheduled' ? `Programmé : ${nl.sentAt}` :
                       'Brouillon'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                {nl.status === 'sent' && (
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-slate-500">{nl.opens.toLocaleString()} ouvertures</p>
                    <p className="text-xs text-slate-400">{nl.clicks.toLocaleString()} clics</p>
                  </div>
                )}
                <div className="flex gap-1">
                  <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                    <Eye className="w-4 h-4" />
                  </button>
                  {nl.status === 'draft' && (
                    <button className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
