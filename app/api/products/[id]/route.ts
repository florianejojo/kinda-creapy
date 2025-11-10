import { ProductDTO } from "@/models/product_model"
import { NextRequest, NextResponse } from "next/server"
import { normalizeImageFile, supabase, withAdminAuth } from "../../utils"

export const DELETE = withAdminAuth(
  async (_req: NextRequest, context: { params: Promise<{ id: string }> }) => {
    const { id } = await context.params

    const { data: product, error: readErr } = await supabase
      .from("products")
      .select("images")
      .eq("id", id)
      .maybeSingle()

    if (readErr) return NextResponse.json({ error: readErr.message }, { status: 500 })
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 })

    const { error: delErr } = await supabase.from("products").delete().eq("id", id)
    if (delErr) return NextResponse.json({ error: delErr.message }, { status: 500 })

    const paths: string[] = product?.images ?? []
    if (paths.length) {
      await supabase.storage.from("products").remove(paths)
    }

    return new NextResponse(null, { status: 204 })
  },
)

export const PUT = withAdminAuth(
  async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
    const { id } = await context.params

    const form = await req.formData()
    const raw = form.get("data")
    if (typeof raw !== "string") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const dto = JSON.parse(raw) as ProductDTO
    if (!dto.title || typeof dto.price !== "number") {
      return NextResponse.json({ error: "Missing title or price" }, { status: 400 })
    }

    const filesByIndex = new Map<number, File>()
    for (const [k, v] of form.entries()) {
      const m = /^image_(\d+)$/.exec(k)
      if (m && v instanceof File) filesByIndex.set(Number(m[1]), v)
    }

    const { data: current, error: readErr } = await supabase
      .from("products")
      .select("images")
      .eq("id", id)
      .maybeSingle()

    if (readErr) return NextResponse.json({ error: readErr.message }, { status: 500 })
    if (!current) return NextResponse.json({ error: "Product not found" }, { status: 404 })

    const prevPaths: string[] = current.images ?? []
    const incomingList = dto.images ?? []
    const finalPaths: string[] = []
    const newlyUploaded: string[] = []

    for (let i = 0; i < incomingList.length; i++) {
      const originalFile = filesByIndex.get(i)
      if (originalFile) {
        const file = await normalizeImageFile(originalFile)
        const ext = (file.name.split(".").pop() || "png").toLowerCase()
        const filename = `${crypto.randomUUID()}.${ext}`
        const path = `${id}/images/${filename}`

        const { error: upErr } = await supabase.storage
          .from("products")
          .upload(path, file, { upsert: true, contentType: file.type })

        if (upErr) {
          if (newlyUploaded.length) await supabase.storage.from("products").remove(newlyUploaded)
          return NextResponse.json({ error: upErr.message }, { status: 500 })
        }
        newlyUploaded.push(path)
        finalPaths.push(path)
      } else {
        const u = incomingList[i]?.url
        const p = incomingList[i]?.path ?? (u ? pathFromPublicUrl(u) : null)
        if (p) finalPaths.push(p)
      }
    }

    if (finalPaths.length === 0) {
      return NextResponse.json({ error: "No images provided" }, { status: 400 })
    }

    const keepSet = new Set(finalPaths)
    const toRemove = prevPaths.filter((p) => !keepSet.has(p))

    const { error: updErr } = await supabase
      .from("products")
      .update({ ...dto, images: finalPaths })
      .eq("id", id)

    if (updErr) {
      if (newlyUploaded.length) await supabase.storage.from("products").remove(newlyUploaded)
      return NextResponse.json({ error: updErr.message }, { status: 500 })
    }

    if (toRemove.length) {
      await supabase.storage.from("products").remove(toRemove)
    }

    return new NextResponse(null, { status: 204 })
  },
)

function pathFromPublicUrl(url: string): string | null {
  const marker = "/storage/v1/object/public/products/"
  const i = url.indexOf(marker)
  if (i === -1) return null
  return url.slice(i + marker.length)
}
