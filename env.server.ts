import "server-only"
import { z } from "zod"

const ServerSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_SITE_URL: z.url(),
  ADMIN_JWT_SECRET: z.string().min(32),
  ADMIN_PASSWORD: z.string().min(8),
  SUPABASE_ADMIN_EMAIL: z.email(),
  SUPABASE_SECRET_KEY: z.string().min(32),
  STRIPE_SECRET_KEY: z.string().min(32),
})

const parsed = ServerSchema.safeParse(process.env)

if (!parsed.success) {
  console.error("Invalid server env:", parsed.error.issues)
  throw new Error("Invalid server environment variables")
}

export const ENV = parsed.data
