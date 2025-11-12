"use client"

import { useProductStore } from "@/stores/product_store"
import { useEffect } from "react"
import { ProductCard } from "./components/product_card"

export default function GalleryPage() {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="flex items-center flex-col justify-between">
      <h2 className="text-3xl text-stone-50">Boutique</h2>

      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}
