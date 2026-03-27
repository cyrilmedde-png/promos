import PromoCard from '@/components/PromoCard'
import Button from '@/components/ui/Button'
import { CATEGORIES } from '@/lib/constants'
import { Promotion } from '@/lib/types'
import { Filter, Flame, SlidersHorizontal, TrendingDown } from 'lucide-react'
import Link from 'next/link'

const allPromos: Promotion[] = [
  { id: '1', title: 'AirPods Pro 2 - Prix cassé !', description: '', original_price: 279, promo_price: 189, discount_percent: 32, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=AirPods+Pro', source: 'amazon', category_id: '1', category: { id: '1', name: 'Tech', slug: 'tech', icon: '💻', color: '#3B82F6' }, is_vip: false, is_active: true, expires_at: null, click_count: 1247, created_at: new Date(Date.now() - 3600000).toISOString() },
  { id: '2', title: 'Nike Air Max 90 - 50% de réduction', description: '', original_price: 149.99, promo_price: 74.99, discount_percent: 50, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Nike+Air+Max', source: 'awin', category_id: '2', category: { id: '2', name: 'Mode', slug: 'mode', icon: '👗', color: '#EC4899' }, is_vip: false, is_active: true, expires_at: null, click_count: 892, created_at: new Date(Date.now() - 7200000).toISOString() },
  { id: '3', title: 'Samsung Galaxy S24 Ultra 256Go', description: '', original_price: 1469, promo_price: 899, discount_percent: 39, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Galaxy+S24', source: 'cj', category_id: '1', category: { id: '1', name: 'Tech', slug: 'tech', icon: '💻', color: '#3B82F6' }, is_vip: true, is_active: true, expires_at: null, click_count: 2341, created_at: new Date(Date.now() - 1800000).toISOString() },
  { id: '4', title: 'Dyson V15 Detect Absolute', description: '', original_price: 699, promo_price: 449, discount_percent: 36, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Dyson+V15', source: 'rakuten', category_id: '3', category: { id: '3', name: 'Maison', slug: 'maison', icon: '🏠', color: '#10B981' }, is_vip: false, is_active: true, expires_at: null, click_count: 567, created_at: new Date(Date.now() - 5400000).toISOString() },
  { id: '5', title: 'PS5 Slim + 2ème manette', description: '', original_price: 549, promo_price: 399, discount_percent: 27, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=PS5+Slim', source: 'amazon', category_id: '1', category: { id: '1', name: 'Tech', slug: 'tech', icon: '💻', color: '#3B82F6' }, is_vip: false, is_active: true, expires_at: null, click_count: 3102, created_at: new Date(Date.now() - 900000).toISOString() },
  { id: '6', title: 'Coffret Dior Sauvage complet', description: '', original_price: 135, promo_price: 62, discount_percent: 54, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Dior+Sauvage', source: 'awin', category_id: '5', category: { id: '5', name: 'Beauté', slug: 'beaute', icon: '💄', color: '#8B5CF6' }, is_vip: true, is_active: true, expires_at: null, click_count: 1856, created_at: new Date(Date.now() - 600000).toISOString() },
  { id: '7', title: 'Robot aspirateur iRobot Roomba i7+', description: '', original_price: 599, promo_price: 329, discount_percent: 45, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Roomba+i7', source: 'amazon', category_id: '3', category: { id: '3', name: 'Maison', slug: 'maison', icon: '🏠', color: '#10B981' }, is_vip: false, is_active: true, expires_at: null, click_count: 734, created_at: new Date(Date.now() - 10800000).toISOString() },
  { id: '8', title: 'Adidas Ultraboost 23', description: '', original_price: 190, promo_price: 95, discount_percent: 50, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=Ultraboost', source: 'tradedoubler', category_id: '4', category: { id: '4', name: 'Sport', slug: 'sport', icon: '⚽', color: '#F59E0B' }, is_vip: false, is_active: true, expires_at: null, click_count: 421, created_at: new Date(Date.now() - 14400000).toISOString() },
  { id: '9', title: 'MacBook Air M3 15 pouces', description: '', original_price: 1599, promo_price: 1199, discount_percent: 25, affiliate_url: '#', original_url: '#', image_url: 'https://placehold.co/400x400/f8fafc/1d3557?text=MacBook+M3', source: 'amazon', category_id: '1', category: { id: '1', name: 'Tech', slug: 'tech', icon: '💻', color: '#3B82F6' }, is_vip: true, is_active: true, expires_at: null, click_count: 4521, created_at: new Date(Date.now() - 2700000).toISOString() },
]

export default function PromosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 flex items-center gap-2">
            <Flame className="w-8 h-8 text-red-500" /> Toutes les promotions
          </h1>
          <p className="text-slate-500 mt-1">2,847 promos actives en ce moment</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20">
            <option>Plus récentes</option>
            <option>Plus populaires</option>
            <option>Plus grosses réductions</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
          </select>
          <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50">
            <SlidersHorizontal className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sticky top-24">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4" /> Filtres
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Catégories</h4>
                <div className="space-y-1">
                  {CATEGORIES.map(cat => (
                    <label key={cat.slug} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-sm">
                      <input type="checkbox" className="rounded border-slate-300 text-red-500 focus:ring-red-500" />
                      <span>{cat.icon}</span>
                      <span className="text-slate-700">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-slate-100" />

              <div>
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Réduction minimum</h4>
                <div className="space-y-1">
                  {['10%+', '20%+', '30%+', '50%+', '70%+'].map(d => (
                    <label key={d} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-sm">
                      <input type="radio" name="discount" className="border-slate-300 text-red-500 focus:ring-red-500" />
                      <TrendingDown className="w-3 h-3 text-red-500" />
                      <span className="text-slate-700">{d}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-slate-100" />

              <div>
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Source</h4>
                <div className="space-y-1">
                  {['Amazon', 'Cdiscount', 'Fnac', 'Darty', 'Autres'].map(s => (
                    <label key={s} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-sm">
                      <input type="checkbox" className="rounded border-slate-300 text-red-500 focus:ring-red-500" />
                      <span className="text-slate-700">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button variant="primary" size="sm" className="w-full mt-4">Appliquer les filtres</Button>
            </div>
          </div>
        </aside>

        {/* Promo Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {allPromos.map(promo => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="gap-2">
              Charger plus de promos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
