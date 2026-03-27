import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    // In production:
    // 1. Fetch promo from Supabase by ID
    // 2. Increment click_count
    // 3. Log the click (user agent, IP for analytics)
    // 4. Redirect to affiliate_url

    // Demo: redirect to a placeholder
    const affiliateUrl = `https://www.amazon.fr?tag=promosdumoments-21&ref=${id}`

    return NextResponse.redirect(affiliateUrl)
  } catch (err) {
    console.error('[Redirect Error]:', err)
    return NextResponse.redirect(new URL('/promos', req.url))
  }
}
