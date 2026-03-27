import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Promotion } from '@/lib/types'
import { formatPrice, timeAgo } from '@/lib/utils'
import { Clock, ExternalLink, Eye, Lock, TrendingDown, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface PromoCardProps {
  promo: Promotion
  isUserVip?: boolean
}

export default function PromoCard({ promo, isUserVip = false }: PromoCardProps) {
  const isLocked = promo.is_vip && !isUserVip

  return (
    <Card hover className="group relative">
      {/* VIP Lock Overlay */}
      {isLocked && (
        <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl">
          <Lock className="w-8 h-8 text-amber-500 mb-2" />
          <p className="font-bold text-slate-800">Promo VIP Exclusive</p>
          <Link href="/vip">
            <Button variant="vip" size="sm" className="mt-2">
              Devenir VIP - 9,99€/mois
            </Button>
          </Link>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <img
          src={promo.image_url || '/images/placeholder.jpg'}
          alt={promo.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <Badge variant="discount">-{promo.discount_percent}%</Badge>
          {promo.is_vip && <Badge variant="vip">👑 VIP</Badge>}
          {promo.discount_percent >= 50 && <Badge variant="hot">🔥 HOT</Badge>}
        </div>
        {/* Source */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-lg text-slate-600 capitalize">
            {promo.source}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        {promo.category && (
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            {promo.category.icon} {promo.category.name}
          </span>
        )}

        {/* Title */}
        <h3 className="font-bold text-slate-800 mt-1 line-clamp-2 group-hover:text-red-500 transition-colors">
          <Link href={`/promos/${promo.id}`}>{promo.title}</Link>
        </h3>

        {/* Prices */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-2xl font-extrabold text-red-500">{formatPrice(promo.promo_price)}</span>
          <span className="text-sm text-slate-400 line-through">{formatPrice(promo.original_price)}</span>
          <Badge variant="discount" className="ml-auto">
            <TrendingDown className="w-3 h-3 mr-1" />
            -{promo.discount_percent}%
          </Badge>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{timeAgo(promo.created_at)}</span>
            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{promo.click_count}</span>
          </div>
          <Link href={`/go/${promo.id}`} target="_blank">
            <Button size="sm" className="gap-1">
              <Zap className="w-3.5 h-3.5" /> Voir l'offre
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
