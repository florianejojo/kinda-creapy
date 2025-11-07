import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(_: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params

  const { data: product, error: readErr } = await supabase
    .from("products")
    .select("images")
    .eq("id", id)
    .maybeSingle()

  if (readErr) return NextResponse.json({ error: readErr.message }, { status: 404 })
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 })

  const { error: delErr } = await supabase.from("products").delete().eq("id", id)
  if (delErr) return NextResponse.json({ error: delErr.message }, { status: 500 })

  const paths: string[] = product?.images ?? []
  if (paths.length) {
    await supabase.storage.from("images").remove(paths)
  }

  return new NextResponse(null, { status: 204 })
}
