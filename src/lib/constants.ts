import { AffiliateConfig } from './types'

export const SITE_NAME = 'PromosduMoments'
export const SITE_DESCRIPTION = 'Les meilleures promotions du moment, mises à jour en temps réel'
export const VIP_PRICE = 9.99
export const VIP_PRICE_DISPLAY = '9,99€'

export const CATEGORIES = [
  { name: 'Tech & High-Tech', slug: 'tech', icon: '💻', color: '#3B82F6' },
  { name: 'Mode & Vêtements', slug: 'mode', icon: '👗', color: '#EC4899' },
  { name: 'Maison & Jardin', slug: 'maison', icon: '🏠', color: '#10B981' },
  { name: 'Sport & Loisirs', slug: 'sport', icon: '⚽', color: '#F59E0B' },
  { name: 'Beauté & Santé', slug: 'beaute', icon: '💄', color: '#8B5CF6' },
  { name: 'Alimentation', slug: 'alimentation', icon: '🍕', color: '#EF4444' },
  { name: 'Voyages & Hôtels', slug: 'voyages', icon: '✈️', color: '#06B6D4' },
  { name: 'Bébé & Enfants', slug: 'bebe', icon: '🧸', color: '#F97316' },
  { name: 'Auto & Moto', slug: 'auto', icon: '🚗', color: '#6366F1' },
  { name: 'Services & Abonnements', slug: 'services', icon: '📱', color: '#14B8A6' },
]

export const AFFILIATE_NETWORKS: AffiliateConfig[] = [
  {
    network: 'Amazon Associates',
    slug: 'amazon',
    logo: '/images/affiliates/amazon.svg',
    description: "Le programme d'affiliation Amazon. Commissions sur tous les produits Amazon.fr achetés via vos liens.",
    commissionRange: '3% - 12%',
    signupUrl: 'https://partenaires.amazon.fr/',
    fields: [
      { key: 'AMAZON_ASSOCIATE_TAG', label: 'Tag Associé', type: 'text', placeholder: 'ex: monsite-21', helpText: "Votre identifiant d'associé Amazon", helpUrl: 'https://partenaires.amazon.fr/help/node/topic/GJKQBDKGMFRS7MN6' },
      { key: 'AMAZON_ACCESS_KEY', label: 'Access Key (PA-API)', type: 'password', placeholder: 'AKIAIOSFODNN7EXAMPLE', helpText: 'Clé d\'accès pour l\'API Product Advertising', helpUrl: 'https://webservices.amazon.fr/paapi5/documentation/register-for-pa-api.html' },
      { key: 'AMAZON_SECRET_KEY', label: 'Secret Key (PA-API)', type: 'password', placeholder: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY', helpText: 'Clé secrète pour l\'API Product Advertising' },
    ],
  },
  {
    network: 'Awin',
    slug: 'awin',
    logo: '/images/affiliates/awin.svg',
    description: 'Réseau d\'affiliation européen. Accès à Cdiscount, Fnac, Darty, Boulanger, et des centaines d\'autres marchands.',
    commissionRange: '2% - 8%',
    signupUrl: 'https://www.awin.com/fr/affilies',
    fields: [
      { key: 'AWIN_API_KEY', label: 'API Token', type: 'password', placeholder: 'Votre token API Awin', helpText: 'Disponible dans Awin > Outils > API', helpUrl: 'https://wiki.awin.com/index.php/API_Authentication' },
      { key: 'AWIN_PUBLISHER_ID', label: 'Publisher ID', type: 'text', placeholder: 'ex: 123456', helpText: 'Votre ID éditeur Awin (visible dans votre tableau de bord)' },
    ],
  },
  {
    network: 'CJ Affiliate',
    slug: 'cj',
    logo: '/images/affiliates/cj.svg',
    description: 'Commission Junction - l\'un des plus grands réseaux d\'affiliation mondiaux. Samsung, Nike, Adidas et plus.',
    commissionRange: '3% - 10%',
    signupUrl: 'https://www.cj.com/fr',
    fields: [
      { key: 'CJ_API_KEY', label: 'Personal Access Token', type: 'password', placeholder: 'Votre token CJ', helpText: 'Générez un token dans CJ > Account > Personal Access Tokens', helpUrl: 'https://developers.cj.com/docs/getting-started' },
      { key: 'CJ_WEBSITE_ID', label: 'Website ID (PID)', type: 'text', placeholder: 'ex: 9876543', helpText: 'L\'ID de votre site dans CJ' },
    ],
  },
  {
    network: 'Tradedoubler',
    slug: 'tradedoubler',
    logo: '/images/affiliates/tradedoubler.svg',
    description: 'Réseau d\'affiliation européen avec La Redoute, Zalando, et de nombreux marchands mode & lifestyle.',
    commissionRange: '4% - 8%',
    signupUrl: 'https://www.tradedoubler.com/fr/',
    fields: [
      { key: 'TRADEDOUBLER_API_KEY', label: 'API Token', type: 'password', placeholder: 'Votre token Tradedoubler', helpText: 'Disponible dans votre espace éditeur Tradedoubler' },
      { key: 'TRADEDOUBLER_SITE_ID', label: 'Site ID', type: 'text', placeholder: 'ex: 2345678', helpText: 'L\'ID de votre site dans Tradedoubler' },
    ],
  },
  {
    network: 'Rakuten Advertising',
    slug: 'rakuten',
    logo: '/images/affiliates/rakuten.svg',
    description: 'Anciennement LinkShare. Accès à AliExpress, Sephora, et des marchands internationaux premium.',
    commissionRange: '2% - 7%',
    signupUrl: 'https://rakutenadvertising.com/fr/',
    fields: [
      { key: 'RAKUTEN_API_KEY', label: 'API Key / Bearer Token', type: 'password', placeholder: 'Votre clé API Rakuten', helpText: 'Générez votre token dans le dashboard Rakuten', helpUrl: 'https://developers.rakutenadvertising.com/' },
      { key: 'RAKUTEN_SID', label: 'Site ID (SID)', type: 'text', placeholder: 'ex: 3456789', helpText: 'L\'identifiant de votre site chez Rakuten' },
    ],
  },
  {
    network: 'Impact',
    slug: 'impact',
    logo: '/images/affiliates/impact.svg',
    description: 'Plateforme de partenariat moderne. Airbnb, Uber, Shopify et des centaines de marques tech & lifestyle.',
    commissionRange: 'Variable',
    signupUrl: 'https://impact.com/',
    fields: [
      { key: 'IMPACT_ACCOUNT_SID', label: 'Account SID', type: 'text', placeholder: 'IRxxxxxxxxxxxxxxxx', helpText: 'Visible dans Impact > Settings > API', helpUrl: 'https://integrations.impact.com/impact-brand/reference/getting-started-with-the-api' },
      { key: 'IMPACT_AUTH_TOKEN', label: 'Auth Token', type: 'password', placeholder: 'Votre token d\'authentification Impact', helpText: 'Disponible dans Impact > Settings > API' },
    ],
  },
  {
    network: 'Effiliation',
    slug: 'effiliation',
    logo: '/images/affiliates/effiliation.svg',
    description: 'Réseau d\'affiliation 100% français. Idéal pour les marchands FR locaux et les marques françaises.',
    commissionRange: '3% - 8%',
    signupUrl: 'https://www.effiliation.com/',
    fields: [
      { key: 'EFFILIATION_API_KEY', label: 'Clé API', type: 'password', placeholder: 'Votre clé API Effiliation', helpText: 'Disponible dans votre espace éditeur Effiliation' },
    ],
  },
]
