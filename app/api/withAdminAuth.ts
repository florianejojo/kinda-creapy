import { ENV } from "@/env.server"
import { createClient } from "@supabase/supabase-js"
import { jwtVerify } from "jose"
import { NextResponse, type NextRequest } from "next/server"
import "server-only"

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
