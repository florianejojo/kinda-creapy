"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

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

  const selectedOption = options.find((opt) => opt.id === selectedOptionId)

  const handleBuy = () => {
    if (!selectedOption) return
    console.log("Buy product:", id, "option:", selectedOption)
    // Ici, tu pourras appeler une action Zustand ou API pour ajouter au panier
  }

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
      <div className="flex gap-2">
        <Link
          href={`/gallery/${id}`}
          className="w-full text-center bg-white border border-black text-black text-sm py-2 rounded hover:bg-gray-100 transition"
        >
          Voir
        </Link>
        <button
          onClick={handleBuy}
          className="w-full bg-black text-white text-sm py-2 rounded hover:opacity-90 transition"
        >
          Acheter
        </button>
      </div>
    </div>
  )
}
