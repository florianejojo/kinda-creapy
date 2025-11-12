"use client"

import { Button } from "@/app/_src/shared/ui/Button"
import { Product } from "@/models/product_model"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded shadow-md overflow-hidden p-4 bg-white flex flex-col gap-3 max-w-xs">
      {/* Image */}
      <div className="relative aspect-3/4 w-full">
        <Image
          src={product.images[0].url}
          alt={product.title}
          fill
          className="object-cover rounded"
        />
      </div>
      <h2 className="text-base font-semibold">{product.title}</h2>
      {product.sold ? (
        <div className="text-red-700 text-right">SOLD OUT</div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <Button isLink href={`/gallery/${product.id}`}>
              Voir
            </Button>
            {/* <Button isLink isActive href={`/checkout?stockId=${selectedOptionId}`}> */}
            <Button isLink isActive href={`/checkout`}>
              Acheter
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
