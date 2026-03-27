'use client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Mail, Tag } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ResetPasswordPage() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">Email envoyé !</h1>
          <p className="text-slate-500 mt-2">Vérifiez votre boîte mail et cliquez sur le lien pour réinitialiser votre mot de passe.</p>
          <Link href="/auth/login">
            <Button variant="outline" className="mt-6">Retour à la connexion</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Tag className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">Mot de passe oublié ?</h1>
          <p className="text-slate-500 mt-1">Entrez votre email pour recevoir un lien de réinitialisation</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <Input label="Email" type="email" placeholder="votre@email.com" icon={<Mail className="w-4 h-4" />} />
            <Button size="lg" className="w-full">Envoyer le lien</Button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          <Link href="/auth/login" className="text-red-500 hover:text-red-600 font-semibold">← Retour à la connexion</Link>
        </p>
      </div>
    </div>
  )
}
