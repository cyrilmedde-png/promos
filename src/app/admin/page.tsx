import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { BarChart3, Bell, Crown, DollarSign, Eye, Gift, Link2, Mail, Plus, Settings, ShoppingBag, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">Dashboard Admin</h1>
          <p className="text-slate-500 text-sm mt-1">Gestion de PromosduMoments.com</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/promos/new"><Button size="sm" className="gap-1"><Plus className="w-4 h-4" /> Ajouter promo</Button></Link>
          <Link href="/admin/config"><Button variant="outline" size="sm" className="gap-1"><Settings className="w-4 h-4" /> Configuration</Button></Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Gift, label: 'Promos actives', value: '2,847', change: '+127 aujourd\'hui', color: 'text-red-500 bg-red-50' },
          { icon: Users, label: 'Utilisateurs', value: '15,234', change: '+89 cette semaine', color: 'text-blue-500 bg-blue-50' },
          { icon: Crown, label: 'Abonnés VIP', value: '2,543', change: '+34 cette semaine', color: 'text-amber-500 bg-amber-50' },
          { icon: DollarSign, label: 'Revenus ce mois', value: '25,404€', change: '+12% vs mois dernier', color: 'text-emerald-500 bg-emerald-50' },
        ].map(stat => (
          <Card key={stat.label} className="p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color} mb-3`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-extrabold text-slate-800">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            <p className="text-xs text-emerald-500 font-medium mt-1">{stat.change}</p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Promos */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-800">Dernières promos ajoutées</h2>
              <Link href="/admin/promos"><Button variant="ghost" size="sm">Voir tout →</Button></Link>
            </div>
            <div className="space-y-2">
              {[
                { title: 'AirPods Pro 2', source: 'Amazon', discount: '-32%', clicks: 1247, status: 'active' },
                { title: 'Nike Air Max 90', source: 'Awin/Cdiscount', discount: '-50%', clicks: 892, status: 'active' },
                { title: 'Galaxy S24 Ultra', source: 'CJ/Samsung', discount: '-39%', clicks: 2341, status: 'vip' },
                { title: 'Dyson V15 Detect', source: 'Rakuten', discount: '-36%', clicks: 567, status: 'active' },
                { title: 'PS5 Slim Bundle', source: 'Amazon', discount: '-27%', clicks: 3102, status: 'active' },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <div className="flex items-center gap-3">
                    <Badge variant={p.status === 'vip' ? 'vip' : 'discount'}>{p.discount}</Badge>
                    <div>
                      <p className="font-medium text-sm text-slate-800">{p.title}</p>
                      <p className="text-xs text-slate-400">{p.source}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">{p.clicks} clics</p>
                    {p.status === 'vip' && <Badge variant="vip" className="text-[10px]">VIP</Badge>}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Affiliate Performance */}
          <Card className="p-6">
            <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Link2 className="w-5 h-5 text-purple-500" /> Performance affiliation</h2>
            <div className="space-y-3">
              {[
                { network: 'Amazon Associates', promos: 847, clicks: 12453, revenue: '2,340€', bar: 'w-4/5' },
                { network: 'Awin', promos: 623, clicks: 8921, revenue: '1,567€', bar: 'w-3/5' },
                { network: 'CJ Affiliate', promos: 412, clicks: 5632, revenue: '987€', bar: 'w-2/5' },
                { network: 'Rakuten', promos: 289, clicks: 3421, revenue: '654€', bar: 'w-1/4' },
                { network: 'Tradedoubler', promos: 198, clicks: 2134, revenue: '432€', bar: 'w-1/5' },
              ].map((n, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{n.network}</span>
                    <span className="text-sm font-bold text-emerald-600">{n.revenue}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className={`bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full ${n.bar}`} />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{n.promos} promos • {n.clicks} clics</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Actions rapides</h3>
            <div className="space-y-2">
              {[
                { icon: Plus, label: 'Ajouter une promo', href: '/admin/promos/new', color: 'text-red-500' },
                { icon: Mail, label: 'Envoyer newsletter', href: '/admin/newsletters', color: 'text-blue-500' },
                { icon: Settings, label: 'Config. affiliation', href: '/admin/config', color: 'text-purple-500' },
                { icon: Users, label: 'Gérer utilisateurs', href: '/admin/users', color: 'text-emerald-500' },
                { icon: BarChart3, label: 'Statistiques', href: '/admin/stats', color: 'text-amber-500' },
              ].map((action, i) => (
                <Link key={i} href={action.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                  <span className="text-sm font-medium text-slate-700">{action.label}</span>
                </Link>
              ))}
            </div>
          </Card>

          {/* System Status */}
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Statut système</h3>
            <div className="space-y-2">
              {[
                { label: 'CRON Affiliation', status: 'OK', time: 'Il y a 23 min' },
                { label: 'Emails (Resend)', status: 'OK', time: '99.8% délivré' },
                { label: 'Base de données', status: 'OK', time: '12ms latence' },
                { label: 'Stripe Webhooks', status: 'OK', time: 'Dernière: il y a 4h' },
                { label: 'Cache Redis', status: 'OK', time: 'Hit rate: 94%' },
              ].map((sys, i) => (
                <div key={i} className="flex items-center justify-between p-2">
                  <span className="text-sm text-slate-600">{sys.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{sys.time}</span>
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
