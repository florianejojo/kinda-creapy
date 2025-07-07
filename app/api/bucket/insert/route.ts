import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { file, title } = await req.json()

  const { data, error } = await supabase.storage
    .from("images")
    .upload(title, file, {
      cacheControl: "3600",
      upsert: false,
    })

  if (error) {
    return NextResponse.json(
      { error: "Erreur insertion image" },
      { status: 500 }
    )
  }

  return NextResponse.json({ product: data })
}
