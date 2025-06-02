import { Product } from "@/app/_src/product/product.types"
import { supabase } from "@/lib/supabaseClient"

export const productApi = {
  getFeaturedProducts: async (): Promise<{ data: Product[] }> => {
    const { data: featuredProducts } = await supabase
      .from("products")
      .select(`*, images (url, alt)`)
      .eq("is_featured", true)

    return { data: featuredProducts as Product[] }
  },
}
