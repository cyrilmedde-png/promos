import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Bell, ChevronRight, CreditCard, Crown, Eye, Gift, Heart, Mail, Settings, TrendingDown, User } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">Bonjour, Jean ! 👋</h1>
          <p className="text-slate-500 mt-1">Voici un résumé de votre activité</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="vip" className="text-sm px-4 py-1">👑 Membre VIP</Badge>
          <Link href="/dashboard/settings">
            <Button variant="ghost" size="sm"><Settings className="w-4 h-4" /></Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Eye, label: 'Promos consultées', value: '147', color: 'text-blue-500 bg-blue-50' },
          { icon: TrendingDown, label: 'Économies estimées', value: '523€', color: 'text-emerald-500 bg-emerald-50' },
          { icon: Heart, label: 'Favoris', value: '23', color: 'text-pink-500 bg-pink-50' },
          { icon: Bell, label: 'Alertes actives', value: '5', color: 'text-purple-500 bg-purple-50' },
        ].map(stat => (
          <Card key={stat.label} className="p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color} mb-3`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-extrabold text-slate-800">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <Card className="p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-red-500" /> Promos récemment consultées
            </h2>
            <div className="space-y-3">
              {[
                { name: 'AirPods Pro 2', price: '189€', discount: '-32%', time: 'Il y a 2h' },
                { name: 'Nike Air Max 90', price: '74,99€', discount: '-50%', time: 'Il y a 5h' },
                { name: 'Dyson V15 Detect', price: '449€', discount: '-36%', time: 'Hier' },
                { name: 'PS5 Slim + Manette', price: '399€', discount: '-27%', time: 'Hier' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-lg">🏷️</div>
                    <div>
                      <p className="font-medium text-sm text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-500 text-sm">{item.price}</p>
                    <Badge variant="discount" className="text-[10px]">{item.discount}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Alerts */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-800 flex items-center gap-2">
                <Bell className="w-5 h-5 text-purple-500" /> Mes alertes
              </h2>
              <Link href="/dashboard/alerts">
                <Button variant="ghost" size="sm" className="text-xs gap-1">Gérer <ChevronRight className="w-3 h-3" /></Button>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { cat: '💻 Tech & High-Tech', rules: 'Réduction > 30%', active: true },
                { cat: '👗 Mode & Vêtements', rules: 'Réduction > 40%', active: true },
                { cat: '🏠 Maison & Jardin', rules: 'Prix < 100€', active: true },
                { cat: '⚽ Sport & Loisirs', rules: 'Toutes les promos', active: false },
                { cat: '💄 Beauté & Santé', rules: 'Réduction > 50%', active: true },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <div>
                    <p className="font-medium text-sm text-slate-800">{alert.cat}</p>
                    <p className="text-xs text-slate-400">{alert.rules}</p>
                  </div>
                  <div className={`w-10 h-5 rounded-full transition-colors ${alert.active ? 'bg-emerald-500' : 'bg-slate-300'} relative`}>
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${alert.active ? 'left-5' : 'left-0.5'}`} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Card */}
          <Card className="p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-slate-800">Jean Dupont</h3>
              <p className="text-sm text-slate-500">jean@example.com</p>
              <Badge variant="vip" className="mt-2">👑 VIP</Badge>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
              <Link href="/dashboard/settings" className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-sm text-slate-600">
                <Settings className="w-4 h-4" /> Paramètres
              </Link>
              <Link href="/dashboard/subscription" className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-sm text-slate-600">
                <CreditCard className="w-4 h-4" /> Mon abonnement
              </Link>
              <Link href="/dashboard/alerts" className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-sm text-slate-600">
                <Bell className="w-4 h-4" /> Mes alertes
              </Link>
            </div>
          </Card>

          {/* Subscription */}
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-slate-800">Abonnement VIP</h3>
            </div>
            <p className="text-sm text-slate-600">Prochain renouvellement : <span className="font-bold">27 avril 2026</span></p>
            <p className="text-sm text-slate-600 mt-1">Montant : <span className="font-bold">9,99€/mois</span></p>
            <Link href="/dashboard/subscription">
              <Button variant="outline" size="sm" className="w-full mt-4">Gérer mon abonnement</Button>
            </Link>
          </Card>

          {/* Newsletter */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-slate-800">Newsletter</h3>
            </div>
            <div className="space-y-2">
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Flash Promo (quotidienne)</span>
                <input type="checkbox" defaultChecked className="rounded text-red-500 focus:ring-red-500" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">VIP Weekly</span>
                <input type="checkbox" defaultChecked className="rounded text-red-500 focus:ring-red-500" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Alertes catégories</span>
                <input type="checkbox" defaultChecked className="rounded text-red-500 focus:ring-red-500" />
              </label>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
