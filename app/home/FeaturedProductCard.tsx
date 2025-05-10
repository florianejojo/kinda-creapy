import { ArtPiece } from "@/app/_shared/ArtPiece"
import { Frame } from "@/app/_shared/Frame"

type FeaturedProductCardProps = {
  artPiece: any
  title: string
  image: string
  price: string
  alt: string
}

export const FeaturedProductCard = ({
  title,
  image,
  price,
  alt,
  artPiece,
}: FeaturedProductCardProps) => (
  <div
    className=" rounded shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center "
    style={{ animation: "fadeInUp 0.5s ease-in-out forwards" }}
  >
    <ArtPiece artPiece={artPiece} position={1}></ArtPiece>
  </div>
)
