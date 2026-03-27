import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { formatPrice } from '@/lib/utils'
import { ArrowLeft, Clock, Copy, ExternalLink, Eye, Heart, Share2, ShoppingCart, Star, TrendingDown, Zap } from 'lucide-react'
import Link from 'next/link'

// Demo data
const promo = {
  id: '1', title: 'Apple AirPods Pro 2 (2ème génération) - USB-C - Réduction incroyable !',
  description: "Les AirPods Pro 2 avec boîtier de charge MagSafe (USB‑C) offrent jusqu'à 2x plus de réduction de bruit active, la Transparence adaptative et un Audio spatial personnalisé avec détection dynamique de la tête. Jusqu'à 6 heures d'écoute avec l'ANC activé. Résistance à la poussière, la sueur et l'eau IPX4.",
  original_price: 279, promo_price: 189, discount_percent: 32,
  affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/600x600/f8fafc/1d3557?text=AirPods+Pro+2',
  source: 'amazon', category: { id: '1', name: 'Tech & High-Tech', slug: 'tech', icon: '💻', color: '#3B82F6' },
  is_vip: false, is_active: true, expires_at: '2026-04-01T00:00:00Z', click_count: 1247, created_at: new Date(Date.now() - 3600000).toISOString(),
}

export default function PromoDetailPage({ params }: { params: { id: string } }) {
  const savings = promo.original_price - promo.promo_price

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/promos" className="flex items-center gap-1 hover:text-red-500 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Toutes les promos
        </Link>
        <span>/</span>
        <Link href={`/categories/${promo.category.slug}`} className="hover:text-red-500 transition-colors">
          {promo.category.icon} {promo.category.name}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium truncate max-w-xs">{promo.title}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 flex items-center justify-center">
          <div className="relative">
            <img src={promo.image_url} alt={promo.title} className="max-w-full max-h-[400px] object-contain" />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge variant="discount" className="text-sm px-3 py-1">-{promo.discount_percent}%</Badge>
              {promo.is_vip && <Badge variant="vip" className="text-sm px-3 py-1">👑 VIP</Badge>}
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide bg-slate-100 px-2 py-1 rounded">
              {promo.category.icon} {promo.category.name}
            </span>
            <span className="text-xs text-slate-400 capitalize bg-slate-50 px-2 py-1 rounded">via {promo.source}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">{promo.title}</h1>

          <div className="flex items-center gap-3 mt-2 text-sm text-slate-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Ajouté il y a 1h</span>
            <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {promo.click_count} vues</span>
          </div>

          {/* Price Box */}
          <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
            <div className="flex items-end gap-4">
              <span className="text-4xl font-extrabold text-red-500">{formatPrice(promo.promo_price)}</span>
              <span className="text-xl text-slate-400 line-through mb-1">{formatPrice(promo.original_price)}</span>
              <Badge variant="discount" className="text-base px-3 py-1 mb-1">
                <TrendingDown className="w-4 h-4 mr-1" /> -{promo.discount_percent}%
              </Badge>
            </div>
            <p className="text-emerald-600 font-bold mt-2 text-sm">
              🎉 Vous économisez {formatPrice(savings)} sur ce produit !
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link href={`/go/${promo.id}`} target="_blank" className="flex-1">
              <Button size="lg" className="w-full gap-2 text-base">
                <ShoppingCart className="w-5 h-5" /> Profiter de l'offre
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="lg" className="gap-2">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="font-bold text-slate-800 text-lg mb-3">Description</h2>
            <p className="text-slate-600 leading-relaxed">{promo.description}</p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              { label: 'Marchant', value: promo.source.charAt(0).toUpperCase() + promo.source.slice(1) },
              { label: 'Catégorie', value: promo.category.name },
              { label: 'Expire le', value: promo.expires_at ? new Date(promo.expires_at).toLocaleDateString('fr-FR') : 'Illimité' },
              { label: 'Popularité', value: `${promo.click_count} clics` },
            ].map(info => (
              <div key={info.label} className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">{info.label}</p>
                <p className="font-semibold text-slate-800 text-sm">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Promos */}
      <section className="mt-16">
        <h2 className="text-xl font-extrabold text-slate-800 mb-6">🔥 Promos similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['iPad Air M2', 'Samsung Buds3 Pro', 'Sony WH-1000XM5', 'Google Pixel 8'].map((name, i) => (
            <Card key={i} hover className="p-4">
              <div className="aspect-square bg-slate-50 rounded-xl mb-3 flex items-center justify-center">
                <img src={`https://placehold.co/200x200/f8fafc/1d3557?text=${encodeURIComponent(name)}`} alt={name} className="w-3/4" />
              </div>
              <h3 className="font-bold text-sm text-slate-800">{name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-extrabold text-red-500 text-lg">{formatPrice(199 + i * 50)}</span>
                <Badge variant="discount">-{25 + i * 5}%</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
