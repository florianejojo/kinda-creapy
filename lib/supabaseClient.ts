import { PUBLIC_ENV } from "@/env.client"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
