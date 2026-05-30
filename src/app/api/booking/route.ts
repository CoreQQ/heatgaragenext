import { NextRequest, NextResponse } from 'next/server'

const TG_TOKEN   = process.env.TG_TOKEN   || ''
const TG_CHAT_ID = process.env.TG_CHAT_ID || ''

export async function POST(req: NextRequest) {
  const { name, phone, model, service, time, desc } = await req.json()

  if (!name || !phone) {
    return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
  }

  if (!TG_TOKEN || !TG_CHAT_ID) {
    // In dev without tokens — just return success
    console.log('Booking (no TG token):', { name, phone, model, service, time, desc })
    return NextResponse.json({ ok: true })
  }

  const formattedTime = time ? new Date(time).toLocaleString('en-IE') : '—'

  const text = `🚗 <b>NEW BOOKING — Heat Garage</b>

👤 <b>Name:</b>    ${name}
📞 <b>Phone:</b>   ${phone}
🚘 <b>Model:</b>   ${model   || '—'}
🔧 <b>Service:</b> ${service || '—'}
📅 <b>Time:</b>    ${formattedTime}
📝 <b>Notes:</b>   ${desc    || '—'}`

  const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: 'HTML' }),
  })

  const data = await res.json()

  if (!data.ok) {
    return NextResponse.json({ error: 'Telegram error', detail: data }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
