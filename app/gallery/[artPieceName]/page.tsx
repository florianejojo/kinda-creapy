// app/gallery/[id].tsx
import { artworks } from "@/app/_shared/constants/artwork"
import { notFound } from "next/navigation"
import { Frame } from "@/app/_shared/Frame"
import Link from "next/link"
import { formatNameToId } from "@/app/utils/utils"
import { Metadata } from "next"
import { ProductPage } from "@/app/gallery/[artPieceName]/ProductPage"
import { ProductImageGallery } from "@/app/gallery/[artPieceName]/ProductImageGallery"
import { Button } from "@/app/_shared/Button"

export async function generateMetadata({
  params,
}: ArtworkProps): Promise<Metadata> {
  const artwork = artworks.find((artwork) => {
    return formatNameToId(artwork.name) === params.artPieceName
  })

  return {
    title: artwork && formatNameToId(artwork.name),
    description: artwork?.description,
    // openGraph: {
    //     images: [
    //         {
    //             url: "",
    //         },
    //     ],
    // },
  }
}

type ArtworkProps = {
  params: { artPieceName: string }
}

export default function ArtworkPage({ params }: ArtworkProps) {
  const product = artworks.find((artwork) => {
    return formatNameToId(artwork.name) === params.artPieceName
  })

  if (!product) {
    notFound()
    return null
  }

  return (
    <div className="flex h-screen items-center">
      <section className="bg-[#f8f4ef] py-16 px-4 sm:px-8 max-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start transition-all duration-700 ease-in-out">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <Frame
              image={product.image}
              alt={product.alt}
              isLazyLoaded={false}
            />
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
            <p className="text-base text-gray-700 leading-relaxed">
              {product.description}
            </p>
            <div className="w-full text-end">
              <Button isActive>Acheter</Button>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bg-[#f8f4ef] h- py-16 px-4 sm:px-8 h-3/6 flex items-center"></div> */}

      {/* <script async src="https://js.stripe.com/v3/buy-button.js"></script>

      <stripe-buy-button
        buy-button-id="buy_btn_1QiK1mC8MWYLO7EXwOEja2w4"
        publishable-key="pk_live_51QTjHVC8MWYLO7EX74o7ISZOXDPIEPqhlQVtcip6QcgRHbCCiJttWnH8Avzb6jEUZmPHHHe9sdoUennqkIZsEaWF00lCRK30CX"
      ></stripe-buy-button> */}
    </div>
  )
}

export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: formatNameToId(artwork.name),
  }))
}
