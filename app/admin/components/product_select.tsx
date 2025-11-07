"use client"

import { useProductStore } from "@/stores/product_store"
import React from "react"

type ProductSelectProps = {
  id: string
  currentProductId: string | null
  onSelect: (id: string | null) => void
  isDisabled?: boolean
}

const ProductSelect: React.FC<ProductSelectProps> = ({
  id,
  currentProductId,
  onSelect,
  isDisabled,
}) => {
  const { products } = useProductStore()

  return (
    <div className="relative w-full">
      <select
        id={id}
        value={currentProductId ?? ""}
        onChange={(e) => onSelect(e.target.value || null)}
        disabled={isDisabled}
        className="block w-full h-11 px-3 pr-9 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-base text-gray-900 dark:text-gray-100 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500/40"
      >
        <option value="">Nouveau produit</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.title}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.2l3.71-2.97a.75.75 0 111.04 1.08l-4.24 3.4a.75.75 0 01-.94 0l-4.24-3.4a.75.75 0 01-.02-1.06z" />
        </svg>
      </div>
    </div>
  )
}

export default ProductSelect
