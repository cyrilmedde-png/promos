-- ============================================
-- PromosduMoments.com — Schéma de base de données
-- À exécuter dans Supabase > SQL Editor
-- ============================================

-- ╔══════════════════════════════════════════╗
-- ║  1. TABLES                               ║
-- ╚══════════════════════════════════════════╝

-- Catégories de promotions
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT,
  color TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Profils utilisateurs (lié à auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'free' CHECK (role IN ('free', 'vip', 'admin')),
  stripe_customer_id TEXT,
  subscription_status TEXT CHECK (subscription_status IN ('active', 'cancelled', 'past_due')),
  subscription_end_date TIMESTAMPTZ,
  newsletter_subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Promotions
CREATE TABLE promotions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  original_price DECIMAL(10,2),
  promo_price DECIMAL(10,2) NOT NULL,
  discount_percent INTEGER,
  affiliate_url TEXT NOT NULL,
  original_url TEXT,
  image_url TEXT,
  source TEXT DEFAULT 'manual',
  category_id UUID REFERENCES categories(id),
  is_vip BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  expires_at TIMESTAMPTZ,
  click_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Abonnements VIP
CREATE TABLE subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  stripe_subscription_id TEXT UNIQUE,
  plan TEXT DEFAULT 'vip',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'past_due')),
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Newsletters
CREATE TABLE newsletters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL,
  html_content TEXT,
  target_audience TEXT DEFAULT 'all' CHECK (target_audience IN ('all', 'vip', 'free')),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'sent')),
  scheduled_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  open_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Logs des emails envoyés
CREATE TABLE email_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  type TEXT NOT NULL,
  subject TEXT,
  status TEXT DEFAULT 'sent',
  resend_id TEXT,
  sent_at TIMESTAMPTZ DEFAULT now()
);

-- Configuration des réseaux d'affiliation
CREATE TABLE affiliate_networks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  api_key_encrypted TEXT,
  api_endpoint TEXT,
  commission_rate DECIMAL(5,2),
  is_active BOOLEAN DEFAULT false,
  last_sync_at TIMESTAMPTZ,
  config JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Clics sur les liens d'affiliation
CREATE TABLE affiliate_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  promotion_id UUID REFERENCES promotions(id),
  user_id UUID REFERENCES profiles(id),
  ip_address TEXT,
  user_agent TEXT,
  clicked_at TIMESTAMPTZ DEFAULT now()
);

-- ╔══════════════════════════════════════════╗
-- ║  2. DONNÉES INITIALES                    ║
-- ╚══════════════════════════════════════════╝

INSERT INTO categories (name, slug, icon, color) VALUES
  ('Tech & High-Tech', 'tech', '💻', '#3B82F6'),
  ('Mode & Vêtements', 'mode', '👗', '#EC4899'),
  ('Maison & Jardin', 'maison', '🏠', '#10B981'),
  ('Sport & Loisirs', 'sport', '⚽', '#F59E0B'),
  ('Beauté & Santé', 'beaute', '💄', '#8B5CF6'),
  ('Alimentation', 'alimentation', '🍕', '#EF4444'),
  ('Voyages & Hôtels', 'voyages', '✈️', '#06B6D4'),
  ('Bébé & Enfants', 'bebe', '🧸', '#F97316'),
  ('Auto & Moto', 'auto', '🚗', '#6366F1'),
  ('Services & Abonnements', 'services', '📱', '#14B8A6');

INSERT INTO affiliate_networks (name, slug) VALUES
  ('Amazon Associates', 'amazon'),
  ('Awin', 'awin'),
  ('CJ Affiliate', 'cj'),
  ('Tradedoubler', 'tradedoubler'),
  ('Rakuten Advertising', 'rakuten'),
  ('Impact', 'impact'),
  ('Effiliation', 'effiliation');

-- ╔══════════════════════════════════════════╗
-- ║  3. TRIGGER AUTO-CRÉATION PROFIL         ║
-- ╚══════════════════════════════════════════╝

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ╔══════════════════════════════════════════╗
-- ║  4. ROW LEVEL SECURITY (RLS)             ║
-- ╚══════════════════════════════════════════╝

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;

-- Profils
CREATE POLICY "Profil visible par le propriétaire"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Profil modifiable par le propriétaire"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Promotions (publiques si actives, VIP si abonné)
CREATE POLICY "Promos actives visibles par tous"
  ON promotions FOR SELECT
  USING (is_active = true AND is_vip = false);

CREATE POLICY "Promos VIP visibles par VIP et admin"
  ON promotions FOR SELECT
  USING (
    is_active = true AND is_vip = true AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('vip', 'admin')
    )
  );

-- Abonnements
CREATE POLICY "Abonnement visible par le propriétaire"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- ╔══════════════════════════════════════════╗
-- ║  5. INDEX POUR PERFORMANCE               ║
-- ╚══════════════════════════════════════════╝

CREATE INDEX idx_promotions_active ON promotions(is_active, created_at DESC);
CREATE INDEX idx_promotions_category ON promotions(category_id);
CREATE INDEX idx_promotions_source ON promotions(source);
CREATE INDEX idx_promotions_vip ON promotions(is_vip);
CREATE INDEX idx_affiliate_clicks_promo ON affiliate_clicks(promotion_id);
CREATE INDEX idx_affiliate_clicks_date ON affiliate_clicks(clicked_at DESC);
CREATE INDEX idx_email_logs_user ON email_logs(user_id);
CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_stripe ON subscriptions(stripe_subscription_id);

-- ╔══════════════════════════════════════════╗
-- ║  6. FONCTIONS UTILITAIRES                ║
-- ╚══════════════════════════════════════════╝

-- Incrémenter le compteur de clics d'une promo
CREATE OR REPLACE FUNCTION increment_click_count(promo_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE promotions SET click_count = click_count + 1 WHERE id = promo_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Créer le premier admin (à exécuter UNE FOIS après votre première inscription)
-- Remplacez 'VOTRE_EMAIL' par votre email d'inscription
-- UPDATE profiles SET role = 'admin' WHERE email = 'VOTRE_EMAIL';

-- ============================================
-- FIN DU SCHÉMA
-- ============================================
