import { PUBLIC_ENV } from "@/env.client"
import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/database.types"

const supabaseUrl = PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
