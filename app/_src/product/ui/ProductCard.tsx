"use client"

import { ProductInSell } from "@/app/_src/product/ui/useProductListViewModel"
import { Button } from "@/app/_src/shared/ui/Button"
import Image from "next/image"
import { useState } from "react"

type ProductCardProps = ProductInSell

export const ProductCard = ({
  id,
  name,
  imageUrl,
  alt = "",
  options,
}: ProductCardProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState(
    options[0]?.stockId || ""
  )

  return (
    <div className="rounded shadow-md overflow-hidden p-4 bg-white flex flex-col gap-3 max-w-xs">
      {/* Image */}
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={imageUrl}
          alt={alt || name}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Titre */}
      <h2 className="text-base font-semibold">{name}</h2>

      {!options.length ? (
        <div className="text-red-700 text-right">SOLD OUT</div>
      ) : (
        <>
          {/* Dropdown */}
          <select
            value={selectedOptionId}
            onChange={(e) => setSelectedOptionId(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm text-black"
          >
            {options.map((option) => (
              <option key={option.stockId} value={option.stockId}>
                {option.optionLabel} — {option.price.toFixed(2)} €
              </option>
            ))}
          </select>
          {/* Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Button isLink href={`/gallery/${id}`}>
              Voir
            </Button>
            <Button
              isLink
              isActive
              href={`/checkout?productId=${selectedOptionId}`}
            >
              Acheter
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
