// app/api/admin/me/route.ts
import { NextRequest, NextResponse } from "next/server"
import { verifyAdminToken } from "@/app/api/auth/login/verifyAdminToken"

export async function GET(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value ?? null
  const payload = await verifyAdminToken(token)

  return NextResponse.json({ isAdmin: !!payload })
}
