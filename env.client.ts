import { z } from "zod"

const PublicSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_SUPABASE_URL_BUCKET: z.url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(32),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(32),
  NEXT_PUBLIC_SITE_URL: z.url(),
  NEXT_PUBLIC_MAX_FILE_SIZE_MB: z.coerce.number().positive(),
})

const parsed = PublicSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_URL_BUCKET: process.env.NEXT_PUBLIC_SUPABASE_URL_BUCKET,
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_MAX_FILE_SIZE_MB: process.env.NEXT_PUBLIC_MAX_FILE_SIZE_MB,
})

if (!parsed.success) {
  console.error("Invalid public env:", parsed.error.issues)
  throw new Error("Invalid public environment variables")
}

export const PUBLIC_ENV = parsed.data
