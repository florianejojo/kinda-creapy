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

  getProducts: async (): Promise<{ data: Product[] }> => {
    const { data: products, error } = await supabase.from("products").select(`
    *,
    images (url, alt),
    stocks (
      id,
      quantity,
      version: versions (label),
      stripe_price_id_test,
      stripe_price_id_live
    )
  `)
    const data =
      products?.map((product) => {
        return {
          ...product,
          coucou: "coucou",
          stocks: product.stocks.map((stockLine) => {
            return {
              id: stockLine.id,
              quantity: stockLine.quantity,
              version: {
                label: stockLine.version.label,
              },
              stripePriceId:
                process.env.NEXT_PUBLIC_ENV === "production"
                  ? stockLine.stripe_price_id_live
                  : stockLine.stripe_price_id_test,
            }
          }),
        }
      }) || []

    return {
      data,
    }
  },
}
