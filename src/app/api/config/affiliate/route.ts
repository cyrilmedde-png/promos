import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // In production: fetch from Supabase affiliate_networks table
  return NextResponse.json({
    networks: [
      { slug: 'amazon', name: 'Amazon Associates', is_active: false, last_sync: null },
      { slug: 'awin', name: 'Awin', is_active: false, last_sync: null },
      { slug: 'cj', name: 'CJ Affiliate', is_active: false, last_sync: null },
      { slug: 'tradedoubler', name: 'Tradedoubler', is_active: false, last_sync: null },
      { slug: 'rakuten', name: 'Rakuten Advertising', is_active: false, last_sync: null },
      { slug: 'impact', name: 'Impact', is_active: false, last_sync: null },
      { slug: 'effiliation', name: 'Effiliation', is_active: false, last_sync: null },
    ]
  })
}

export async function POST(req: NextRequest) {
  try {
    const { network, config } = await req.json()

    // In production:
    // 1. Encrypt API keys with AES-256
    // 2. Store in affiliate_networks table
    // 3. Test connection
    // 4. Return status

    console.log(`[Config] Saving ${network} configuration`)

    return NextResponse.json({
      success: true,
      message: `${network} configuration saved`,
    })
  } catch (err) {
    console.error('[Config Error]:', err)
    return NextResponse.json({ error: 'Failed to save config' }, { status: 500 })
  }
}
