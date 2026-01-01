import { ProductDTO } from "@/models/product_model"
import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin, withAdminAuth } from "@/app/api/withAdminAuth"
import { normalizeImageFile } from "@/app/api/normalizeImageFile"

export const POST = withAdminAuth(async (req: NextRequest) => {
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

    for (const original of files) {
      const file = await normalizeImageFile(original)
      const ext = (file.name.split(".").pop() || "png").toLowerCase()
      const filename = `${crypto.randomUUID()}.${ext}`
      const path = `${productId}/images/${filename}`

      const { error } = await supabaseAdmin.storage.from("products").upload(path, file, {
        upsert: true,
        contentType: file.type,
      })

      if (error) {
        if (uploadedPaths.length) {
          await supabaseAdmin.storage.from("products").remove(uploadedPaths)
        }
        return NextResponse.json({ error: error }, { status: 403 })
      }

      uploadedPaths.push(path)
    }

    const { error } = await supabaseAdmin.from("products").insert({
      id: productId,
      title: dto.title,
      description: dto.description ?? null,
      images: uploadedPaths,
      price: dto.price,
      sold: dto.sold,
      sold_limited: dto.sold_limited,
      price_limited: dto.price_limited ?? null,
      width_mm: dto.width_mm ?? null,
      height_mm: dto.height_mm ?? null,
      width_limited_mm: dto.width_limited_mm ?? null,
      height_limited_mm: dto.height_limited_mm ?? null,
      technique: dto.technique ?? null,
      artist: dto.artist ?? null,
      is_visible: dto.is_visible ?? false,
      category: dto.category ?? null,
    })

    if (error) {
      if (uploadedPaths.length) {
        await supabaseAdmin.storage.from("products").remove(uploadedPaths)
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(productId, { status: 201 })
  } catch (err: any) {
    console.log({ err })
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 500 })
  }
})
