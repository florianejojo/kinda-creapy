import { jwtVerify } from "jose"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ENV } from "./env.server"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (!pathname.startsWith("/admin")) return NextResponse.next()

  const token = req.cookies.get("admin_token")?.value
  const secret = new TextEncoder().encode(ENV.ADMIN_JWT_SECRET)

  if (pathname === "/admin/login") {
    if (!token) return NextResponse.next()
    try {
      await jwtVerify(token, secret)
      return NextResponse.redirect(new URL("/admin", req.url))
    } catch {
      return NextResponse.next()
    }
  }

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url))
  }

  try {
    await jwtVerify(token, secret)
    return NextResponse.next()
  } catch {
    const url = new URL("/admin/login", req.url)
    url.searchParams.set("session", "expired")
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ["/admin/:path*"],
}
