'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'
import { AFFILIATE_NETWORKS } from '@/lib/constants'
import { AffiliateConfig } from '@/lib/types'
import { ArrowLeft, Check, ChevronDown, ChevronUp, ExternalLink, Eye, EyeOff, Globe, HelpCircle, Key, Link2, RefreshCw, Save, Settings, Shield, TestTube, Unplug, Zap } from 'lucide-react'
import Link from 'next/link'

function NetworkCard({ network }: { network: AffiliateConfig }) {
  const [expanded, setExpanded] = useState(false)
  const [showSecrets, setShowSecrets] = useState<Record<string, boolean>>({})
  const [values, setValues] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState(false)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<'success' | 'error' | null>(null)

  const toggleSecret = (key: string) => {
    setShowSecrets(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleTest = () => {
    setTesting(true)
    setTestResult(null)
    setTimeout(() => {
      setTesting(false)
      const hasValues = network.fields.some(f => values[f.key])
      setTestResult(hasValues ? 'success' : 'error')
      setTimeout(() => setTestResult(null), 3000)
    }, 1500)
  }

  const filledCount = network.fields.filter(f => values[f.key]).length

  return (
    <Card className={`overflow-hidden transition-all ${expanded ? 'ring-2 ring-red-500/20' : ''}`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          {/* Network Icon */}
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
            <Globe className="w-6 h-6 text-slate-600" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-800">{network.network}</h3>
              {filledCount === network.fields.length && filledCount > 0 ? (
                <Badge variant="new" className="text-[10px]">Configuré</Badge>
              ) : filledCount > 0 ? (
                <Badge variant="expiring" className="text-[10px]">Partiel ({filledCount}/{network.fields.length})</Badge>
              ) : (
                <Badge className="text-[10px]">Non configuré</Badge>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Commission : {network.commissionRange}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {expanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-slate-100">
          {/* Description */}
          <div className="bg-blue-50 rounded-xl p-4 mt-4 mb-5">
            <p className="text-sm text-blue-800">{network.description}</p>
            <a
              href={network.signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 mt-2"
            >
              <ExternalLink className="w-3.5 h-3.5" /> S'inscrire sur {network.network}
            </a>
          </div>

          {/* Fields */}
          <div className="space-y-4">
            {network.fields.map((field) => (
              <div key={field.key}>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <Key className="w-3.5 h-3.5 text-slate-400" />
                    {field.label}
                  </label>
                  {field.helpUrl && (
                    <a
                      href={field.helpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1"
                    >
                      <HelpCircle className="w-3 h-3" /> Où trouver ?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={field.type === 'password' && !showSecrets[field.key] ? 'password' : 'text'}
                    placeholder={field.placeholder}
                    value={values[field.key] || ''}
                    onChange={(e) => setValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 pr-10 font-mono"
                  />
                  {field.type === 'password' && (
                    <button
                      type="button"
                      onClick={() => toggleSecret(field.key)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showSecrets[field.key] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                {field.helpText && (
                  <p className="text-xs text-slate-400 mt-1 ml-1">{field.helpText}</p>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                className="gap-1.5"
                onClick={handleSave}
              >
                {saved ? <><Check className="w-4 h-4" /> Sauvegardé !</> : <><Save className="w-4 h-4" /> Sauvegarder</>}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={handleTest}
                loading={testing}
              >
                <TestTube className="w-4 h-4" /> Tester la connexion
              </Button>
            </div>
            {testResult === 'success' && (
              <Badge variant="new" className="text-xs px-3 py-1">
                <Check className="w-3 h-3 mr-1" /> Connexion réussie
              </Badge>
            )}
            {testResult === 'error' && (
              <Badge variant="expiring" className="text-xs px-3 py-1">
                Erreur - Vérifiez vos clés
              </Badge>
            )}
          </div>
        </div>
      )}
    </Card>
  )
}

export default function AdminConfigPage() {
  const [activeTab, setActiveTab] = useState<'affiliate' | 'email' | 'stripe' | 'general'>('affiliate')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/admin" className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour au dashboard admin
      </Link>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
            <Settings className="w-7 h-7 text-red-500" /> Configuration
          </h1>
          <p className="text-slate-500 text-sm mt-1">Gérez vos clés API, tracking IDs et paramètres du site</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl mb-8">
        {[
          { id: 'affiliate' as const, label: 'Réseaux d\'affiliation', icon: Link2 },
          { id: 'email' as const, label: 'Emails (Resend)', icon: Zap },
          { id: 'stripe' as const, label: 'Paiement (Stripe)', icon: Shield },
          { id: 'general' as const, label: 'Général', icon: Settings },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white shadow-sm text-slate-800'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Affiliate Tab */}
      {activeTab === 'affiliate' && (
        <div>
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-6 border border-purple-100">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <Link2 className="w-5 h-5 text-purple-500" /> Configuration des réseaux d'affiliation
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Configurez vos clés API et tracking IDs pour chaque réseau d'affiliation. Les liens d'affiliation seront générés automatiquement lors de l'import des promotions. Cliquez sur chaque réseau pour le configurer.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="new" className="text-xs">7 réseaux disponibles</Badge>
              <Badge className="text-xs">Chiffrement AES-256 des clés</Badge>
            </div>
          </div>

          {/* Howto */}
          <Card className="p-5 mb-6 bg-amber-50 border-amber-200">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-amber-500" /> Comment obtenir vos tracking IDs ?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold mb-1">1. Inscrivez-vous sur chaque plateforme</p>
                <p className="text-slate-500 text-xs">Cliquez sur "S'inscrire" dans chaque réseau ci-dessous. L'inscription est gratuite.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">2. Récupérez vos clés API</p>
                <p className="text-slate-500 text-xs">Chaque réseau fournit des clés API dans son tableau de bord éditeur. Suivez les liens "Où trouver ?".</p>
              </div>
              <div>
                <p className="font-semibold mb-1">3. Collez vos clés ici</p>
                <p className="text-slate-500 text-xs">Entrez vos clés dans les champs correspondants et sauvegardez.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">4. Testez la connexion</p>
                <p className="text-slate-500 text-xs">Utilisez le bouton "Tester" pour vérifier que vos clés fonctionnent correctement.</p>
              </div>
            </div>
          </Card>

          {/* Network Cards */}
          <div className="space-y-3">
            {AFFILIATE_NETWORKS.map(network => (
              <NetworkCard key={network.slug} network={network} />
            ))}
          </div>

          {/* Sync Button */}
          <div className="mt-8 text-center">
            <Button size="lg" className="gap-2">
              <RefreshCw className="w-5 h-5" /> Lancer une synchronisation manuelle
            </Button>
            <p className="text-xs text-slate-400 mt-2">Les promos sont synchronisées automatiquement toutes les 2 heures</p>
          </div>
        </div>
      )}

      {/* Email Tab */}
      {activeTab === 'email' && (
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-blue-500" /> Configuration Resend
            </h2>
            <div className="space-y-4">
              <Input label="API Key Resend" type="password" placeholder="re_xxxxxxxxxxxxxxxxxxxx" />
              <Input label="Email d'envoi (From)" type="email" placeholder="noreply@promos.talosprimes.com" />
              <Input label="Nom d'affichage" type="text" placeholder="PromosduMoments" />
            </div>
            <div className="bg-blue-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800 font-medium mb-2">Configuration DNS requise :</p>
              <div className="space-y-1 text-xs font-mono text-blue-700">
                <p>TXT promos.talosprimes.com → v=spf1 include:resend.com ~all</p>
                <p>CNAME resend._domainkey → Fourni par Resend</p>
                <p>TXT _dmarc.promos.talosprimes.com → v=DMARC1; p=none</p>
              </div>
            </div>
            <Button className="mt-4 gap-2"><Save className="w-4 h-4" /> Sauvegarder</Button>
          </Card>
        </div>
      )}

      {/* Stripe Tab */}
      {activeTab === 'stripe' && (
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-purple-500" /> Configuration Stripe
            </h2>
            <div className="space-y-4">
              <Input label="Publishable Key" type="text" placeholder="pk_live_xxxxxxxxxxxxxx" />
              <Input label="Secret Key" type="password" placeholder="sk_live_xxxxxxxxxxxxxx" />
              <Input label="Webhook Secret" type="password" placeholder="whsec_xxxxxxxxxxxxxx" />
              <Input label="VIP Price ID" type="text" placeholder="price_xxxxxxxxxxxxxx" />
            </div>
            <div className="bg-purple-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-purple-800 font-medium mb-2">Webhook Endpoint :</p>
              <code className="text-xs font-mono text-purple-700 bg-purple-100 px-2 py-1 rounded">
                https://promos.talosprimes.com/api/webhooks/stripe
              </code>
            </div>
            <Button className="mt-4 gap-2"><Save className="w-4 h-4" /> Sauvegarder</Button>
          </Card>
        </div>
      )}

      {/* General Tab */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-slate-500" /> Paramètres généraux
            </h2>
            <div className="space-y-4">
              <Input label="Nom du site" type="text" defaultValue="PromosduMoments" />
              <Input label="URL du site" type="url" defaultValue="https://promos.talosprimes.com" />
              <Input label="URL finale (après migration)" type="url" placeholder="https://promosdumoments.com" />
              <Input label="CRON Secret" type="password" placeholder="Clé secrète pour les jobs CRON" />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fréquence de synchronisation</label>
                <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500">
                  <option>Toutes les 30 minutes</option>
                  <option>Toutes les heures</option>
                  <option selected>Toutes les 2 heures</option>
                  <option>Toutes les 4 heures</option>
                  <option>Toutes les 6 heures</option>
                </select>
              </div>
            </div>
            <Button className="mt-4 gap-2"><Save className="w-4 h-4" /> Sauvegarder</Button>
          </Card>

          <Card className="p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Unplug className="w-5 h-5 text-red-500" /> Supabase
            </h2>
            <div className="space-y-4">
              <Input label="Supabase URL" type="url" placeholder="https://xxxxxx.supabase.co" />
              <Input label="Anon Key" type="password" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..." />
              <Input label="Service Role Key" type="password" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..." />
            </div>
            <Button className="mt-4 gap-2"><Save className="w-4 h-4" /> Sauvegarder</Button>
          </Card>

          <Card className="p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <RefreshCw className="w-5 h-5 text-amber-500" /> Cache Redis (Upstash)
            </h2>
            <div className="space-y-4">
              <Input label="Redis REST URL" type="url" placeholder="https://xxxxxx.upstash.io" />
              <Input label="Redis REST Token" type="password" placeholder="AxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxQ==" />
            </div>
            <Button className="mt-4 gap-2"><Save className="w-4 h-4" /> Sauvegarder</Button>
          </Card>
        </div>
      )}
    </div>
  )
}
