import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { ArrowLeft, Calendar, Check, CreditCard, Crown, Download, Shield } from 'lucide-react'
import Link from 'next/link'

export default function SubscriptionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/dashboard" className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour au tableau de bord
      </Link>

      <h1 className="text-2xl font-extrabold text-slate-800 mb-8">Mon abonnement</h1>

      {/* Current Plan */}
      <Card className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Crown className="w-5 h-5 text-amber-500" />
              <h2 className="font-bold text-slate-800 text-lg">Plan VIP</h2>
              <Badge variant="vip">Actif</Badge>
            </div>
            <p className="text-slate-600 text-sm">9,99€/mois • Renouvellement automatique</p>
          </div>
          <p className="text-3xl font-extrabold text-slate-800">9,99€<span className="text-sm font-normal text-slate-400">/mois</span></p>
        </div>
      </Card>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-slate-800">Période actuelle</h3>
          </div>
          <p className="text-sm text-slate-600">Du <span className="font-medium">27 mars 2026</span></p>
          <p className="text-sm text-slate-600">Au <span className="font-medium">27 avril 2026</span></p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-slate-800">Moyen de paiement</h3>
          </div>
          <p className="text-sm text-slate-600">Visa •••• 4242</p>
          <p className="text-sm text-slate-400">Expire 12/2028</p>
        </Card>
      </div>

      {/* Invoices */}
      <Card className="p-6 mb-6">
        <h3 className="font-bold text-slate-800 mb-4">Historique de facturation</h3>
        <div className="space-y-2">
          {[
            { date: '27 mars 2026', amount: '9,99€', status: 'Payé' },
            { date: '27 février 2026', amount: '9,99€', status: 'Payé' },
            { date: '27 janvier 2026', amount: '9,99€', status: 'Payé' },
          ].map((inv, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
              <div>
                <p className="text-sm font-medium text-slate-800">{inv.date}</p>
                <p className="text-xs text-slate-400">{inv.amount}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="new" className="text-[10px]">{inv.status}</Badge>
                <button className="text-slate-400 hover:text-slate-600"><Download className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" className="gap-2"><CreditCard className="w-4 h-4" /> Changer de carte</Button>
        <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">Annuler l'abonnement</Button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
        <Shield className="w-3 h-3" /> Paiements sécurisés par Stripe • Annulation à tout moment
      </div>
    </div>
  )
}
