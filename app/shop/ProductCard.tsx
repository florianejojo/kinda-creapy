import { ArtPiece } from "@/app/_shared/ArtPiece"
import { Button } from "@/app/_shared/Button"
import { Frame } from "@/app/_shared/Frame"
import Image from "next/image"

type ProductCardProps = {
  title: string
  image: string
  price: string
}
// comment faire pour que les images trop courtes prennent toute la hauteur et dépassent en largeur, centré, et les images trop hautes l'inverse

export const ProductCard = ({ title, image, price }: ProductCardProps) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 overflow-hidden">
    <div className=" h-96 overflow-hidden relative flex">
      <Frame image={image} alt={""} isLazyLoaded={false} />
    </div>
    <div className="p-4 ">
      <h3 className=" text-gray-600 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{price} €</p>
      <div className="flex justify-end w-full">
        <Button isLink href="#" isActive size="sm">
          Voir
        </Button>
      </div>
    </div>
  </div>
)
