"use client"

import { buyProductUseCase } from "@/app/_src/cart/features/buyProduct/buyProduct.useCase"
import { Button } from "@/app/_src/shared/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"

type ProductOption = {
  id: string
  label: string
  price: number
}

type ProductCardProps = {
  id: string
  title: string
  imageUrl: string
  alt?: string
  options: ProductOption[]
}

export const ProductCard = ({
  id,
  title,
  imageUrl,
  alt = "",
  options,
}: ProductCardProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState(options[0]?.id || "")

  return (
    <div className="rounded shadow-md overflow-hidden p-4 bg-white flex flex-col gap-3 max-w-xs">
      {/* Image */}
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={imageUrl}
          alt={alt || title}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Titre */}
      <h2 className="text-base font-semibold">{title}</h2>

      {/* Dropdown */}
      <select
        value={selectedOptionId}
        onChange={(e) => setSelectedOptionId(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 text-sm text-black"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label} — {opt.price.toFixed(2)} €
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
    </div>
  )
}
