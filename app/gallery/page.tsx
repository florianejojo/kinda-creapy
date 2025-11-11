"use client"

import { ProductList } from "@/app/_src/product/ui/ProductList"

export default function GalleryPage() {
  return (
    <div className="flex items-center flex-col justify-between">
      <h2 className="text-3xl text-stone-50">Boutique</h2>

      <ProductList />
    </div>
  )
}
