import { ENV } from "@/env.server"
import { SignJWT } from "jose"
import { NextResponse } from "next/server"
import crypto from "node:crypto"

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb)
}

export async function POST(req: Request) {
  const { password } = await req.json()

  if (!password || !safeEqual(password, ENV.ADMIN_PASSWORD)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const secret = new TextEncoder().encode(ENV.ADMIN_JWT_SECRET)

  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret)

  const res = NextResponse.json({ ok: true })

  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: ENV.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return res
}
