import Link from 'next/link'
import { Crown, Heart, Mail, Shield, Tag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h3 className="text-xl font-bold flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-5 h-5" /> Ne ratez plus aucune promo !
              </h3>
              <p className="text-white/80 text-sm mt-1">Recevez les meilleures offres directement dans votre boîte mail</p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input type="email" placeholder="votre@email.com" className="flex-1 md:w-72 px-4 py-2.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors whitespace-nowrap">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Tag className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">PromosduMoments</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Les meilleures promotions du moment, mises à jour en temps réel grâce à notre technologie d'agrégation automatique.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/promos" className="hover:text-red-400 transition-colors">Toutes les promos</Link></li>
              <li><Link href="/categories" className="hover:text-red-400 transition-colors">Catégories</Link></li>
              <li><Link href="/vip" className="hover:text-red-400 transition-colors flex items-center gap-1"><Crown className="w-3 h-3 text-amber-500" /> Espace VIP</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Compte</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/auth/login" className="hover:text-red-400 transition-colors">Connexion</Link></li>
              <li><Link href="/auth/register" className="hover:text-red-400 transition-colors">Inscription</Link></li>
              <li><Link href="/dashboard" className="hover:text-red-400 transition-colors">Mon espace</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/mentions" className="hover:text-red-400 transition-colors">Mentions légales</Link></li>
              <li><Link href="/legal/cgv" className="hover:text-red-400 transition-colors">CGV</Link></li>
              <li><Link href="/legal/confidentialite" className="hover:text-red-400 transition-colors flex items-center gap-1"><Shield className="w-3 h-3" /> Confidentialité</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© 2026 PromosduMoments.com — Tous droits réservés</p>
          <p className="flex items-center gap-1">Fait avec <Heart className="w-3 h-3 text-red-500" /> pour les chasseurs de bons plans</p>
        </div>
      </div>
    </footer>
  )
}
