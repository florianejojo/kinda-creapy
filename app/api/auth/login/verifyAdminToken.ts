import { jwtVerify } from "jose"
import { ENV } from "@/env.server"

const secret = new TextEncoder().encode(ENV.ADMIN_JWT_SECRET)

export async function verifyAdminToken(token?: string | null) {
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, secret)

    if (payload.role !== "admin") {
      return null
    }

    return payload
  } catch {
    return null
  }
}
