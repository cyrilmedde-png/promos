import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PromosduMoments - Les meilleures promotions du moment',
  description: 'Découvrez les meilleures promotions et bons plans du moment. Promos vérifiées, mises à jour en temps réel. Rejoignez le club VIP pour des offres exclusives !',
  keywords: 'promotions, bons plans, réductions, promo, soldes, codes promo, affiliation',
  openGraph: {
    title: 'PromosduMoments - Les meilleures promotions du moment',
    description: 'Découvrez les meilleures promotions et bons plans du moment.',
    url: 'https://promos.talosprimes.com',
    siteName: 'PromosduMoments',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
