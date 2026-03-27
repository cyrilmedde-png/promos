import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { userId, email } = await req.json()

    // In production: create Stripe checkout session
    // const session = await stripe.checkout.sessions.create({
    //   customer_email: email,
    //   line_items: [{ price: VIP_PRICE_ID, quantity: 1 }],
    //   mode: 'subscription',
    //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?vip=success`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/vip?cancelled=true`,
    //   metadata: { userId },
    // })

    return NextResponse.json({
      url: '/dashboard?vip=success',
      message: 'Stripe checkout will be active in production'
    })
  } catch (err) {
    console.error('[Checkout Error]:', err)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}
