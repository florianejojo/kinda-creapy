import { supabase } from "@/lib/supabaseClient"

type ArtworkProps = {
  params: {
    productId: string
  }
}

export default async function ProductPage({ params }: ArtworkProps) {
  console.log("ici", "params.artWorkId", params.productId, "SNW021MX03")
  return <div>ProductPage</div>
}

export async function generateStaticParams() {
  const { data: products, error } = await supabase.from("products").select("id")

  if (error || !products) return []

  return products.map((product) => ({
    artWorkId: product.id,
  }))
}
