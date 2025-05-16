// app/api/message/route.ts
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, message } = await req.json()
  const { error } = await supabase.from('messages').insert([{ name, message }])

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

export async function GET() {
  const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
