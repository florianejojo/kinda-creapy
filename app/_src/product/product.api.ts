import { Product } from "@/app/_src/product/product.types"
import { supabase } from "@/lib/supabaseClient"

// interface

interface ProductApi {
  getFeaturedProducts: () => Promise<{ data: Product[] }>
  getProducts: () => Promise<{ data: Product[] }>
  getPriceByStockId: (stockId: string) => Promise<Product | null>
}

const getStripePriceId = (stockLine) => {
  return process.env.NEXT_PUBLIC_ENV === "production"
    ? stockLine.stripe_price_id_live
    : stockLine.stripe_price_id_test
}

const formatStockLine = (stockLine) => {
  return {
    id: stockLine.id,
    quantity: stockLine.quantity,
    version: {
      label: stockLine.version.label,
    },
    stripePriceId: getStripePriceId(stockLine),
  }
}

export const productApi: ProductApi = {
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
          stocks: product.stocks.map((stockLine) => formatStockLine(stockLine)),
        }
      }) || []

    return {
      data,
    }
  },

  getPriceByStockId: async (stockId) => {
    const { data: productInStock, error } = await supabase
      .from("stocks")
      .select(`*`)
      .eq("id", stockId)
      .single()

    console.log({ productInStock })

    const stripePriceId = await getStripePriceId(productInStock)

    return stripePriceId
  },
}
