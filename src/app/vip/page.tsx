import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Award, Bell, Check, ChevronRight, Clock, Crown, Gift, Heart, LineChart, Shield, Star, X, Zap } from 'lucide-react'
import Link from 'next/link'

export default function VipPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Club VIP Exclusif</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Des promos <span className="text-amber-400">impossibles</span> à trouver ailleurs
          </h1>
          <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
            Rejoignez +2,500 membres VIP qui économisent en moyenne 340€/mois grâce à nos offres exclusives réservées aux abonnés.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button variant="vip" size="lg" className="text-lg px-10 py-4 gap-2">
              <Crown className="w-6 h-6" /> Devenir VIP — 9,99€/mois
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-4">Sans engagement • Annulable en 1 clic • Satisfait ou remboursé 30 jours</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Free */}
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-slate-800">Gratuit</h3>
              <p className="text-3xl font-extrabold text-slate-800 mt-2">0€<span className="text-base font-normal text-slate-400">/mois</span></p>
              <ul className="mt-6 space-y-3">
                {[
                  { text: 'Accès aux promos standards', ok: true },
                  { text: 'Newsletter quotidienne', ok: true },
                  { text: '1 alerte catégorie', ok: true },
                  { text: 'Promos VIP exclusives', ok: false },
                  { text: 'Accès anticipé 2h', ok: false },
                  { text: 'Historique des prix', ok: false },
                  { text: 'Alertes illimitées', ok: false },
                  { text: 'Navigation sans pub', ok: false },
                  { text: 'Support prioritaire', ok: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {item.ok ? <Check className="w-4 h-4 text-emerald-500 shrink-0" /> : <X className="w-4 h-4 text-slate-300 shrink-0" />}
                    <span className={item.ok ? 'text-slate-700' : 'text-slate-400'}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/auth/register">
                <Button variant="outline" size="lg" className="w-full mt-8">S'inscrire gratuitement</Button>
              </Link>
            </div>
            {/* VIP */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-amber-50 to-yellow-50 border-l border-amber-100 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="vip" className="text-xs px-3">POPULAIRE</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-500" /> VIP
              </h3>
              <p className="mt-2">
                <span className="text-3xl font-extrabold text-slate-800">9,99€</span>
                <span className="text-base font-normal text-slate-400">/mois</span>
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Accès aux promos standards',
                  'Newsletter quotidienne + VIP',
                  'Alertes illimitées',
                  'Promos VIP exclusives (-50% et plus)',
                  'Accès anticipé 2h avant tout le monde',
                  'Historique complet des prix',
                  'Alertes personnalisées illimitées',
                  'Navigation sans publicité',
                  'Support prioritaire 24/7',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="vip" size="lg" className="w-full mt-8 gap-2">
                <Crown className="w-5 h-5" /> Commencer maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-12">Pourquoi les VIP adorent notre service</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: 'Accès anticipé', desc: 'Recevez les promos 2 heures avant leur publication publique. Les meilleures offres partent en quelques minutes !', color: 'bg-blue-50 text-blue-500' },
            { icon: Zap, title: 'Promos exclusives', desc: 'Des réductions négociées en direct avec les marchands. Jusqu\'à -70% sur des produits de grandes marques.', color: 'bg-red-50 text-red-500' },
            { icon: LineChart, title: 'Historique des prix', desc: 'Consultez l\'évolution du prix sur 12 mois. Ne tombez jamais dans le piège des fausses promotions.', color: 'bg-emerald-50 text-emerald-500' },
            { icon: Bell, title: 'Alertes personnalisées', desc: 'Définissez vos critères (catégorie, marque, prix max) et soyez notifié instantanément.', color: 'bg-purple-50 text-purple-500' },
            { icon: Shield, title: 'Sans publicité', desc: 'Naviguez sereinement sans aucune publicité. Une expérience pure et focalisée sur les économies.', color: 'bg-amber-50 text-amber-500' },
            { icon: Heart, title: 'Support prioritaire', desc: 'Un problème avec une commande ? Notre équipe vous répond en moins de 2h, 7j/7.', color: 'bg-pink-50 text-pink-500' },
          ].map((feat) => (
            <Card key={feat.title} className="p-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.color} mb-4`}>
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{feat.title}</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">{feat.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-center text-slate-800 mb-10">Ce que disent nos membres VIP</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sophie M.', text: "J'ai économisé 420€ le premier mois grâce aux alertes VIP. L'abonnement est rentabilisé dès le premier achat !", stars: 5 },
              { name: 'Thomas L.', text: "L'accès anticipé est un game-changer. J'ai eu un PS5 à prix cassé avant que l'offre soit publique.", stars: 5 },
              { name: 'Marie D.', text: "L'historique des prix m'a évité plusieurs fausses promos. Indispensable pour les achats tech.", stars: 5 },
            ].map((review, i) => (
              <Card key={i} className="p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">"{review.text}"</p>
                <p className="text-sm font-bold text-slate-800 mt-3">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-yellow-500 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Crown className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-slate-900">Prêt à économiser gros ?</h2>
          <p className="text-slate-800/80 mt-3 text-lg">Rejoignez le club VIP maintenant et accédez aux meilleures offres exclusives.</p>
          <Button size="lg" className="mt-8 text-lg px-10 bg-slate-900 hover:bg-slate-800 text-white gap-2">
            Commencer pour 9,99€/mois <ChevronRight className="w-5 h-5" />
          </Button>
          <p className="text-slate-800/60 text-sm mt-4">Sans engagement • Annulable à tout moment • Paiement sécurisé par Stripe</p>
        </div>
      </section>
    </div>
  )
}
