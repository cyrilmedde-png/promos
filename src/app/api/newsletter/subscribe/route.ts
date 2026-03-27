import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // In production:
    // 1. Check if already subscribed in Supabase
    // 2. Add to newsletter_subscribers
    // 3. Send welcome email via Resend

    console.log(`[Newsletter] New subscriber: ${email}`)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    })
  } catch (err) {
    console.error('[Subscribe Error]:', err)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }
}
