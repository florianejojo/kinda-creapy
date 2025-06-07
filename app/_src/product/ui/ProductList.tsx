"use client"

import { Product } from "@/app/_src/product/product.types"
import { ProductCard } from "@/app/_src/product/ui/ProductCard"
import { useProductListViewModel } from "@/app/_src/product/ui/useProductListViewModel"

export const ProductList = () => {
  const { products } = useProductListViewModel()
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id="art1"
                title="Sombre Reflet"
                imageUrl={product.imageUrl}
                options={product.options}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
