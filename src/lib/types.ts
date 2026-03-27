export interface User {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  role: 'free' | 'vip' | 'admin'
  stripe_customer_id: string | null
  subscription_status: 'active' | 'cancelled' | 'past_due' | null
  subscription_end_date: string | null
  newsletter_subscribed: boolean
  created_at: string
}

export interface Promotion {
  id: string
  title: string
  description: string
  original_price: number
  promo_price: number
  discount_percent: number
  affiliate_url: string
  original_url: string
  image_url: string
  source: 'amazon' | 'awin' | 'cj' | 'tradedoubler' | 'rakuten' | 'impact' | 'effiliation' | 'manual'
  category_id: string
  category?: Category
  is_vip: boolean
  is_active: boolean
  expires_at: string | null
  click_count: number
  created_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  color: string
}

export interface Subscription {
  id: string
  user_id: string
  stripe_subscription_id: string
  plan: string
  status: 'active' | 'cancelled' | 'past_due'
  current_period_start: string
  current_period_end: string
  created_at: string
}

export interface Newsletter {
  id: string
  subject: string
  html_content: string
  target_audience: 'all' | 'vip' | 'free'
  status: 'draft' | 'scheduled' | 'sent'
  scheduled_at: string | null
  sent_at: string | null
  open_count: number
  click_count: number
}

export interface EmailLog {
  id: string
  user_id: string
  type: 'welcome' | 'verification' | 'reset' | 'newsletter' | 'vip_welcome' | 'promo_alert'
  subject: string
  status: 'sent' | 'delivered' | 'bounced' | 'failed'
  resend_id: string | null
  sent_at: string
}

export interface AffiliateNetwork {
  id: string
  name: string
  slug: string
  api_key_encrypted: string
  api_endpoint: string
  commission_rate: number
  is_active: boolean
  last_sync_at: string | null
  config: Record<string, string>
}

export interface AffiliateConfig {
  network: string
  slug: string
  logo: string
  fields: AffiliateField[]
  signupUrl: string
  description: string
  commissionRange: string
}

export interface AffiliateField {
  key: string
  label: string
  type: 'text' | 'password'
  placeholder: string
  helpText?: string
  helpUrl?: string
}
