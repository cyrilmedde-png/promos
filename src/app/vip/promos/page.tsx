import Badge from '@/components/ui/Badge'
import PromoCard from '@/components/PromoCard'
import { Promotion } from '@/lib/types'
import { Crown, Lock } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const vipPromos: Promotion[] = [
  { id: 'v1', title: 'MacBook Pro M3 Pro 14" - Prix négocié exclusif', description: '', original_price: 2399, promo_price: 1499, discount_percent: 37, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=MacBook+Pro', source: 'amazon', category_id: '1', category: { id: '1', name: 'Tech', slug: 'tech', icon: '💻', color: '#3B82F6' }, is_vip: true, is_active: true, expires_at: null, click_count: 3421, created_at: new Date(Date.now() - 1800000).toISOString() },
  { id: 'v2', title: 'TV LG OLED C4 65" - Offre flash', description: '', original_price: 2499, promo_price: 1199, discount_percent: 52, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=LG+OLED+C4', source: 'awin', category_id: '1', category: { id: '1', name: 'Tech', slug: 'tech', icon: '💻', color: '#3B82F6' }, is_vip: true, is_active: true, expires_at: null, click_count: 2198, created_at: new Date(Date.now() - 3600000).toISOString() },
  { id: 'v3', title: 'Dyson Airwrap Complete Long - 55% de réduction', description: '', original_price: 549, promo_price: 249, discount_percent: 55, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Dyson+Airwrap', source: 'rakuten', category_id: '5', category: { id: '5', name: 'Beauté', slug: 'beaute', icon: '💄', color: '#8B5CF6' }, is_vip: true, is_active: true, expires_at: null, click_count: 1567, created_at: new Date(Date.now() - 7200000).toISOString() },
  { id: 'v4', title: 'Canada Goose Expedition Parka - Soldes privées', description: '', original_price: 1295, promo_price: 599, discount_percent: 54, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Canada+Goose', source: 'cj', category_id: '2', category: { id: '2', name: 'Mode', slug: 'mode', icon: '👗', color: '#EC4899' }, is_vip: true, is_active: true, expires_at: null, click_count: 987, created_at: new Date(Date.now() - 5400000).toISOString() },
  { id: 'v5', title: 'Robot Thermomix TM6 - Offre exclusive', description: '', original_price: 1399, promo_price: 899, discount_percent: 36, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Thermomix', source: 'effiliation', category_id: '3', category: { id: '3', name: 'Maison', slug: 'maison', icon: '🏠', color: '#10B981' }, is_vip: true, is_active: true, expires_at: null, click_count: 2543, created_at: new Date(Date.now() - 900000).toISOString() },
  { id: 'v6', title: 'Bose QuietComfort Ultra Headphones', description: '', original_price: 449, promo_price: 219, discount_percent: 51, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Bose+QC', source: 'amazon', category_id: '1', category: { id: '1', name: 'Tech', slug: 'tech', icon: '💻', color: '#3B82F6' }, is_vip: true, is_active: true, expires_at: null, click_count: 1876, created_at: new Date(Date.now() - 2700000).toISOString() },
]

export default function VipPromosPage() {
  // In real app: check auth & VIP status
  const isVip = true

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12 mb-8 border border-amber-500/20">
        <div className="flex items-center gap-3 mb-2">
          <Crown className="w-8 h-8 text-amber-400" />
          <Badge variant="vip" className="text-sm px-4">ESPACE VIP</Badge>
        </div>
        <h1 className="text-3xl font-extrabold text-white mt-2">Vos promos exclusives</h1>
        <p className="text-slate-400 mt-2">Des offres négociées en direct, disponibles uniquement pour nos membres VIP.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vipPromos.map(promo => (
          <PromoCard key={promo.id} promo={promo} isUserVip={isVip} />
        ))}
      </div>
    </div>
  )
}
