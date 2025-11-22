// app/gallery/[id].tsx
import { notFound } from "next/navigation"

import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/app/_src/shared/ui/Button"

// export async function generateMetadata({
//   params,
// }: ArtworkProps): Promise<Metadata> {
//   const artwork = artworks.find((artwork) => {
//     return formatNameToId(artwork.name) === params.artWorkId
//   })

//   return {
//     title: artwork && formatNameToId(artwork.name),
//     description: artwork?.description,
//     // openGraph: {
//     //     images: [
//     //         {
//     //             url: "",
//     //         },
//     //     ],
//     // },
//   }
// }

type ArtworkProps = {
  params: {
    artWorkId: string
    product: {
      id: string
      title: string
      description: string
      technique: string
      size: string
    }
  }
}

export default async function ArtworkPage({ params }: ArtworkProps) {
  const { data: product, error } = await supabase
    .from("products")
    .select(`*, images (url, alt)`)
    .eq("id", params.artWorkId)
    .single()

  // console.log("product", product)
  // console.log("error", error)

  // console.log({ product }, params.artWorkId, "pq")
  if (error || !product) {
    notFound()
    return null
  }
  return (
    <div className="flex h-screen items-center">
      <section className="bg-[#f8f4ef] py-16 px-4 sm:px-8 max-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start transition-all duration-700 ease-in-out">
          {/* Image */}
          <div className="w-full lg:w-1/2 bg-slate-400">
            <div className="h-30 w-30 bg-slate-950">
              {/* <Frame
              image={product.images[0]}
              alt={product.alt}
              isLazyLoaded={false}
            /> */}
            </div>
          </div>

          {/* Infos */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-black text-3xl sm:text-4xl font-extrabold leading-tight">
              {product.name}
            </h1>
            <p className="my-5  text-black ">
              {product.technique} - {product.size}
            </p>
            <p className="text-xl font-medium text-gray-800">{"15 E"}</p>
            <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
            <div className="w-full text-end">
              <Button isActive>Acheter</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  const { data: products, error } = await supabase.from("products").select("id")

  if (error || !products) return []

  return products.map((product) => ({
    artWorkId: product.id,
  }))
}
