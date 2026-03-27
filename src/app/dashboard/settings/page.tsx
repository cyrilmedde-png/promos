'use client'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { ArrowLeft, Camera, Lock, Mail, Save, Shield, User } from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/dashboard" className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour au tableau de bord
      </Link>
      <h1 className="text-2xl font-extrabold text-slate-800 mb-8">Paramètres du compte</h1>

      {/* Profile */}
      <Card className="p-6 mb-6">
        <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6"><User className="w-5 h-5 text-blue-500" /> Profil</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <User className="w-9 h-9 text-white" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50">
              <Camera className="w-4 h-4 text-slate-500" />
            </button>
          </div>
          <div>
            <p className="font-bold text-slate-800">Jean Dupont</p>
            <p className="text-sm text-slate-500">Membre depuis mars 2026</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Nom complet" defaultValue="Jean Dupont" icon={<User className="w-4 h-4" />} />
          <Input label="Email" defaultValue="jean@example.com" icon={<Mail className="w-4 h-4" />} />
        </div>
        <Button className="mt-4 gap-2"><Save className="w-4 h-4" /> Sauvegarder</Button>
      </Card>

      {/* Password */}
      <Card className="p-6 mb-6">
        <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6"><Lock className="w-5 h-5 text-amber-500" /> Sécurité</h2>
        <div className="space-y-4">
          <Input label="Mot de passe actuel" type="password" placeholder="••••••••" icon={<Lock className="w-4 h-4" />} />
          <Input label="Nouveau mot de passe" type="password" placeholder="Min. 8 caractères" icon={<Lock className="w-4 h-4" />} />
          <Input label="Confirmer le nouveau mot de passe" type="password" placeholder="••••••••" icon={<Lock className="w-4 h-4" />} />
        </div>
        <Button className="mt-4 gap-2"><Lock className="w-4 h-4" /> Changer le mot de passe</Button>
      </Card>

      {/* Privacy */}
      <Card className="p-6">
        <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6"><Shield className="w-5 h-5 text-emerald-500" /> Confidentialité & données</h2>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
            <span className="text-sm text-slate-700">Recevoir les newsletters</span>
            <input type="checkbox" defaultChecked className="rounded text-red-500 focus:ring-red-500" />
          </label>
          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
            <span className="text-sm text-slate-700">Alertes promos par email</span>
            <input type="checkbox" defaultChecked className="rounded text-red-500 focus:ring-red-500" />
          </label>
          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
            <span className="text-sm text-slate-700">Partager mes statistiques (anonymisées)</span>
            <input type="checkbox" className="rounded text-red-500 focus:ring-red-500" />
          </label>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
          <Button variant="outline" size="sm">Exporter mes données</Button>
          <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">Supprimer mon compte</Button>
        </div>
      </Card>
    </div>
  )
}
