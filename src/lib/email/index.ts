import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type EmailType =
  | 'welcome'
  | 'verification'
  | 'reset-password'
  | 'vip-welcome'
  | 'payment-failed'
  | 'subscription-cancelled'
  | 'newsletter-daily'
  | 'newsletter-vip'
  | 'promo-alert'

interface SendEmailParams {
  to: string
  type: EmailType
  subject: string
  html: string
  data?: Record<string, any>
}

export async function sendEmail({ to, type, subject, html }: SendEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'PromosduMoments <noreply@promos.talosprimes.com>',
      to: [to],
      subject,
      html,
    })

    if (error) {
      console.error(`[Email Error] ${type}:`, error)
      return { success: false, error }
    }

    return { success: true, id: data?.id }
  } catch (error) {
    console.error(`[Email Error] ${type}:`, error)
    return { success: false, error }
  }
}

export function getWelcomeEmailHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8f9fa;">
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
        <div style="background:white;border-radius:12px;padding:40px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#E63946;margin:0;font-size:28px;">🎉 Bienvenue sur PromosduMoments !</h1>
          </div>
          <p style="color:#333;font-size:16px;line-height:1.6;">Bonjour ${name},</p>
          <p style="color:#333;font-size:16px;line-height:1.6;">Merci de rejoindre notre communauté de chasseurs de bons plans ! Vous allez maintenant recevoir les meilleures promotions directement.</p>
          <div style="text-align:center;margin:30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="background:#E63946;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px;">Découvrir les promos</a>
          </div>
          <p style="color:#666;font-size:14px;text-align:center;">💎 Passez VIP pour seulement 9,99€/mois et accédez aux offres exclusives !</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function getVipWelcomeEmailHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#1D3557;">
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
        <div style="background:linear-gradient(135deg,#1D3557,#457B9D);border-radius:12px;padding:40px;border:2px solid #D4A845;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#D4A845;margin:0;font-size:28px;">👑 Bienvenue dans le Club VIP !</h1>
          </div>
          <p style="color:#F1FAEE;font-size:16px;line-height:1.6;">Bonjour ${name},</p>
          <p style="color:#F1FAEE;font-size:16px;line-height:1.6;">Félicitations ! Vous faites maintenant partie de notre cercle VIP exclusif. Voici ce qui vous attend :</p>
          <ul style="color:#F1FAEE;font-size:15px;line-height:2;">
            <li>🔥 Promos exclusives avec +50% de réduction</li>
            <li>⏰ Accès 2h avant tout le monde</li>
            <li>📊 Historique des prix complet</li>
            <li>📧 Newsletter VIP hebdomadaire</li>
            <li>🚫 Navigation sans publicité</li>
          </ul>
          <div style="text-align:center;margin:30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/vip/promos" style="background:#D4A845;color:#1D3557;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px;">Accéder aux promos VIP</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export function getResetPasswordEmailHtml(resetUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8f9fa;">
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
        <div style="background:white;border-radius:12px;padding:40px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <h1 style="color:#1D3557;text-align:center;font-size:24px;">🔐 Réinitialisation du mot de passe</h1>
          <p style="color:#333;font-size:16px;line-height:1.6;">Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous :</p>
          <div style="text-align:center;margin:30px 0;">
            <a href="${resetUrl}" style="background:#E63946;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;">Réinitialiser mon mot de passe</a>
          </div>
          <p style="color:#999;font-size:13px;text-align:center;">Ce lien expire dans 1 heure. Si vous n'avez pas fait cette demande, ignorez cet email.</p>
        </div>
      </div>
    </body>
    </html>
  `
}
