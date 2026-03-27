import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PromoCard from '@/components/PromoCard'
import { CATEGORIES } from '@/lib/constants'
import { Promotion } from '@/lib/types'
import { ArrowRight, Award, Bell, Clock, Crown, Flame, Gift, Shield, Star, TrendingDown, Zap } from 'lucide-react'
import Link from 'next/link'

// Demo promos for initial display
const demoPromos: Promotion[] = [
  {
    id: '1', title: 'AirPods Pro 2 - Prix cassé !', description: 'Apple AirPods Pro 2ème génération avec boîtier MagSafe USB-C', original_price: 279, promo_price: 189, discount_percent: 32,
    affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=AirPods+Pro+2', source: 'amazon',
    category_id: '1', category: { id: '1', name: 'Tech & High-Tech', slug: 'tech', icon: '💻', color: '#3B82F6' },
    is_vip: false, is_active: true, expires_at: null, click_count: 1247, created_at: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: '2', title: 'Nike Air Max 90 - Soldes exceptionnelles', description: 'Chaussures Nike Air Max 90 - Plusieurs coloris', original_price: 149.99, promo_price: 74.99, discount_percent: 50,
    affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Nike+Air+Max', source: 'awin',
    category_id: '2', category: { id: '2', name: 'Mode & Vêtements', slug: 'mode', icon: '👗', color: '#EC4899' },
    is_vip: false, is_active: true, expires_at: null, click_count: 892, created_at: new Date(Date.now() - 7200000).toISOString()
  },
  {
    id: '3', title: 'Samsung Galaxy S24 Ultra 256Go', description: 'Samsung Galaxy S24 Ultra 256Go - Titanium Gray', original_price: 1469, promo_price: 899, discount_percent: 39,
    affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Galaxy+S24', source: 'cj',
    category_id: '1', category: { id: '1', name: 'Tech & High-Tech', slug: 'tech', icon: '💻', color: '#3B82F6' },
    is_vip: true, is_active: true, expires_at: null, click_count: 2341, created_at: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: '4', title: 'Dyson V15 Detect Absolute', description: 'Aspirateur balai Dyson V15 avec laser', original_price: 699, promo_price: 449, discount_percent: 36,
    affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Dyson+V15', source: 'rakuten',
    category_id: '3', category: { id: '3', name: 'Maison & Jardin', slug: 'maison', icon: '🏠', color: '#10B981' },
    is_vip: false, is_active: true, expires_at: null, click_count: 567, created_at: new Date(Date.now() - 5400000).toISOString()
  },
  {
    id: '5', title: 'PS5 Slim + 2ème manette', description: 'Console PlayStation 5 Slim Edition Standard + DualSense supplémentaire', original_price: 549, promo_price: 399, discount_percent: 27,
    affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=PS5+Slim', source: 'amazon',
    category_id: '1', category: { id: '1', name: 'Tech & High-Tech', slug: 'tech', icon: '💻', color: '#3B82F6' },
    is_vip: false, is_active: true, expires_at: null, click_count: 3102, created_at: new Date(Date.now() - 900000).toISOString()
  },
  {
    id: '6', title: 'Lot 3 parfums Dior Sauvage', description: 'Coffret Dior Sauvage EDT 100ml + Gel douche + Déodorant', original_price: 135, promo_price: 62, discount_percent: 54,
    affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Dior+Sauvage', source: 'awin',
    category_id: '5', category: { id: '5', name: 'Beauté & Santé', slug: 'beaute', icon: '💄', color: '#8B5CF6' },
    is_vip: true, is_active: true, expires_at: null, click_count: 1856, created_at: new Date(Date.now() - 600000).toISOString()
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="hot" className="mb-4 text-sm px-4 py-1">
              🔥 +500 nouvelles promos aujourd'hui
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Les <span className="text-gradient from-red-400 to-orange-400">meilleures promos</span> du moment
            </h1>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
              Économisez jusqu'à 70% sur des milliers de produits. Nos robots scannent les meilleures offres 24h/24 sur Amazon, Cdiscount, Fnac et +100 marchands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <Link href="/promos">
                <Button size="lg" className="gap-2 text-base">
                  <Flame className="w-5 h-5" /> Voir les promos
                </Button>
              </Link>
              <Link href="/vip">
                <Button variant="vip" size="lg" className="gap-2 text-base">
                  <Crown className="w-5 h-5" /> Devenir VIP — 9,99€/mois
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Gift, label: 'Promos actives', value: '2,847' },
              { icon: TrendingDown, label: 'Économie moyenne', value: '-42%' },
              { icon: Zap, label: 'Mises à jour', value: '24h/24' },
              { icon: Star, label: 'Utilisateurs', value: '15K+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-slate-800">🏷️ Catégories</h2>
            <Link href="/categories" className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1">
              Tout voir <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`}
                className="flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200">
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-red-500 transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Promos */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
              <Flame className="w-6 h-6 text-red-500" /> Promos tendance
            </h2>
            <p className="text-slate-500 text-sm mt-1">Les offres les plus populaires en ce moment</p>
          </div>
          <Link href="/promos">
            <Button variant="outline" size="sm" className="gap-1">
              Tout voir <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoPromos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </section>

      {/* VIP Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="vip" className="text-sm px-4 py-1 mb-4">👑 Club VIP</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Accédez aux <span className="text-amber-400">promos exclusives</span>
            </h2>
            <p className="text-slate-300 mt-4">
              Rejoignez notre cercle VIP et profitez des meilleures réductions avant tout le monde.
              Promos jusqu'à -70% réservées uniquement aux membres.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: 'Accès anticipé', desc: 'Voyez les promos 2h avant les autres' },
              { icon: Award, title: 'Promos exclusives', desc: 'Offres VIP avec +50% de réduction' },
              { icon: Bell, title: 'Alertes personnalisées', desc: 'Notifications sur vos catégories préférées' },
            ].map((feat) => (
              <div key={feat.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 text-center">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feat.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white">{feat.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{feat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/vip">
              <Button variant="vip" size="lg" className="gap-2 text-base">
                <Crown className="w-5 h-5" /> Devenir VIP — 9,99€/mois
              </Button>
            </Link>
            <p className="text-slate-500 text-xs mt-3">Sans engagement • Annulable à tout moment</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Promos vérifiées', desc: 'Chaque offre est vérifiée automatiquement et manuellement avant publication.' },
            { icon: Zap, title: 'Mise à jour en temps réel', desc: 'Nos robots scannent +100 marchands toutes les 2 heures pour trouver les meilleures offres.' },
            { icon: Star, title: '100% gratuit', desc: "L'accès aux promos est totalement gratuit. Le VIP est optionnel pour les chasseurs d'offres exigeants." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
