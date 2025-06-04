"use client"

import { Product } from "@/app/_src/product/product.types"
import { ProductCard } from "@/app/_src/product/ui/ProductCard"

type ProductListProps = {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => {
            return (
              <ProductCard
                key={product.id}
                id="art1"
                title="Sombre Reflet"
                imageUrl="/images/artpieces/IMG_5814.webp"
                options={[
                  { id: "print_a3", label: "Print A3", price: 20 },
                  { id: "print_a2", label: "Print A2", price: 30 },
                  { id: "original", label: "Œuvre originale", price: 180 },
                ]}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
