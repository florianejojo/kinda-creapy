import { ENV } from "@/env.server"
import { createClient } from "@supabase/supabase-js"
import { jwtVerify } from "jose"
import { NextResponse, type NextRequest } from "next/server"
import "server-only"
import sharp from "sharp"

const MAX_FILE_SIZE_BYTES = Number(ENV.MAX_FILE_SIZE_MB) * 1024 * 1024

const replaceExtension = (filename: string, newExt: string) => {
  return filename.replace(/\.[^/.]+$/, `.${newExt}`)
}

export async function normalizeImageFile(file: File): Promise<File> {
  const sizeMB = file.size / (1024 * 1024)

  if (sizeMB > Number(ENV.MAX_FILE_SIZE_MB)) {
    console.warn(`Fichier trop lourd (${sizeMB} MB). Upload sans compression.`)
    return file
  }

  if (file.size <= MAX_FILE_SIZE_BYTES && file.type === "image/webp") return file

  const arrayBuffer = await file.arrayBuffer()
  const maxDim = 3000

  const resizedBuffer = await sharp(arrayBuffer)
    .rotate()
    .resize({
      width: maxDim,
      height: maxDim,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp()
    .toBuffer()
  const inputBuffer = Buffer.from(resizedBuffer)

  return new File([inputBuffer], replaceExtension(file.name, "webp"), {
    type: "image/webp",
    lastModified: file.lastModified,
  })
}

type Handler = (req: NextRequest, ctx: { params: any }) => Promise<Response> | Response

export function withAdminAuth(handler: Handler): Handler {
  return async (req, ctx) => {
    const token = req.cookies.get("admin_token")?.value
    const secret = ENV.ADMIN_JWT_SECRET
    if (!secret) return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 })
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    try {
      await jwtVerify(token, new TextEncoder().encode(secret))
      return handler(req, ctx)
    } catch {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
    }
  }
}

const supabaseUrl = ENV.NEXT_PUBLIC_SUPABASE_URL
const supabaseSecretKey = ENV.SUPABASE_SECRET_KEY

export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey, {
  auth: { persistSession: false },
})
