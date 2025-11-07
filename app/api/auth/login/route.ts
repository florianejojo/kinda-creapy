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
  const expected = process.env.ADMIN_PASSWORD

  if (!expected) throw new Error("ADMIN_PASSWORD is not set")

  if (!password || !safeEqual(password, expected)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const secret = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET!)

  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret)

  const res = NextResponse.json({ ok: true })

  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return res
}
