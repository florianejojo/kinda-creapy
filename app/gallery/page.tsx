"use client"

import { displayProductsUseCase } from "@/app/_src/product/features/displayFeaturedProducts/displayProducts.useCase"
import { useProductStore } from "@/app/_src/product/productStore"
import { ProductList } from "@/app/_src/product/ui/ProductList"
import { useEffect } from "react"

export default function GalleryPage() {
  const { products } = useProductStore()

  useEffect(() => {
    displayProductsUseCase()
  }, [])

  useEffect(() => {
    console.log({ products })
  }, [products])

  return (
    <div className=" min-h-40 flex items-center flex-col justify-between">
      <h2 className="text-3xl text-stone-50">Boutique</h2>

      <ProductList products={products} />
    </div>
  )
}
