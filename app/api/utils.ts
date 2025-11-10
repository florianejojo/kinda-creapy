import { PUBLIC_ENV } from "@/env.client"
import { ENV } from "@/env.server"
import { createClient } from "@supabase/supabase-js"
import convert from "heic-convert"
import { jwtVerify } from "jose"
import { NextResponse, type NextRequest } from "next/server"
import "server-only"

export async function normalizeImageFile(file: File): Promise<File> {
  const isHeic =
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    /\.heic$/i.test(file.name) ||
    /\.heif$/i.test(file.name)

  if (!isHeic) return file

  const input = Buffer.from(await file.arrayBuffer())
  const out = await convert({
    buffer: input as any,
    format: "JPEG",
    quality: 0.8,
  })

  const blob = new Blob([out], { type: "image/jpeg" })
  const safeName = file.name.replace(/\.(heic|heif)$/i, "") + ".jpg"
  return new File([blob], safeName, { type: "image/jpeg" })
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

const supabaseUrl = PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_URL
const supabaseSecretKey = ENV.SUPABASE_SECRET_KEY

export const supabase = createClient(supabaseUrl, supabaseSecretKey)
