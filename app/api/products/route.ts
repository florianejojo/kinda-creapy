import { supabase } from "@/lib/supabaseClient"
import { ProductDTO } from "@/models/product_model"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()

    const raw = form.get("data")
    if (typeof raw !== "string") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const dto = JSON.parse(raw) as ProductDTO
    if (!dto.title || typeof dto.price !== "number") {
      return NextResponse.json({ error: "Missing title or price" }, { status: 400 })
    }

    const files: File[] = []
    for (const [k, v] of form.entries()) {
      if (k.startsWith("image_") && v instanceof File) files.push(v)
    }

    if (!files.length) {
      return NextResponse.json({ error: "No images provided" }, { status: 400 })
    }

    const productId = crypto.randomUUID()

    const uploadedPaths: string[] = []

    for (const file of files) {
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase()
      const filename = `${crypto.randomUUID()}.${ext}`
      const path = `products/${productId}/${filename}`

      const { error } = await supabase.storage.from("images").upload(path, file, {
        upsert: true,
        contentType: file.type,
      })

      if (error) {
        if (uploadedPaths.length) {
          await supabase.storage.from("images").remove(uploadedPaths)
        }
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      uploadedPaths.push(path)
    }

    const { data: product, error } = await supabase
      .from("products")
      .insert({
        id: productId,
        title: dto.title,
        description: dto.description ?? null,
        images: uploadedPaths,
        price: dto.price,
        sold: dto.sold,
      })
      .select("id, title, description, images, price, sold")
      .single()

    if (error) {
      if (uploadedPaths.length) {
        await supabase.storage.from("images").remove(uploadedPaths)
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(product.id, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 500 })
  }
}
