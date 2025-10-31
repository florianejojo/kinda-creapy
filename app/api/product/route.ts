import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"
// import { supabaseAdmin } from "@/lib/supabaseAdmin" // avec clé secrète !

export async function POST(req: NextRequest) {
  const { title, images } = await req.json()

  const { data, error } = await supabase.from("products").insert([{ title }]).select().single()

  if (error) {
    return NextResponse.json({ error: "Erreur création produit" }, { status: 500 })
  }

  return NextResponse.json({ product: data })
}
