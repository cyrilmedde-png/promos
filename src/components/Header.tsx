'use client'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Crown, Flame, Menu, Search, Tag, User, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-1.5 text-sm font-medium">
        <span className="animate-pulse mr-1">🔥</span>
        Jusqu'à -70% sur des centaines de produits !
        <Link href="/vip" className="ml-2 underline font-bold">Devenir VIP →</Link>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Tag className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-xl text-slate-800">Promos</span>
              <span className="font-extrabold text-xl text-red-500">duMoments</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="search"
                placeholder="Rechercher une promo, un produit, une marque..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              />
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/promos" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-500 transition-colors">
              <Flame className="w-4 h-4" /> Promos
            </Link>
            <Link href="/vip" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-amber-600 hover:bg-amber-50 transition-colors">
              <Crown className="w-4 h-4" /> VIP
            </Link>
            <div className="w-px h-6 bg-slate-200 mx-2" />
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="gap-1.5">
                <User className="w-4 h-4" /> Connexion
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">S'inscrire</Button>
            </Link>
          </nav>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-lg hover:bg-slate-50">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg hover:bg-slate-50">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="search" placeholder="Rechercher..." className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-100 pt-3 space-y-2">
            <Link href="/promos" className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50"><Flame className="w-4 h-4 text-red-500" /> Toutes les promos</Link>
            <Link href="/vip" className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-amber-600 hover:bg-amber-50 font-medium"><Crown className="w-4 h-4" /> Espace VIP</Link>
            <hr className="border-slate-100" />
            <div className="flex gap-2 pt-1">
              <Link href="/auth/login" className="flex-1"><Button variant="outline" size="sm" className="w-full">Connexion</Button></Link>
              <Link href="/auth/register" className="flex-1"><Button size="sm" className="w-full">S'inscrire</Button></Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
