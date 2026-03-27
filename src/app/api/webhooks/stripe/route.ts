import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  try {
    // In production: verify signature with stripe.webhooks.constructEvent
    const event = JSON.parse(body)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        // Update user role to VIP in Supabase
        // Send VIP welcome email
        console.log('[Stripe] Checkout completed:', session.customer_email)
        break
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object
        // Sync subscription status
        console.log('[Stripe] Subscription updated:', subscription.id)
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        // Downgrade user to free
        console.log('[Stripe] Subscription deleted:', subscription.id)
        break
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object
        // Send payment failed email
        console.log('[Stripe] Payment failed:', invoice.customer_email)
        break
      }
      default:
        console.log('[Stripe] Unhandled event:', event.type)
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('[Stripe Webhook Error]:', err)
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }
}
