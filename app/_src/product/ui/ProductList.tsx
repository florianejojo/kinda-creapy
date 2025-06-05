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
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id="art1"
                title="Sombre Reflet"
                imageUrl={product.images[0].url}
                options={product.stocks.map((productInStock) => {
                  return {
                    product_id: productInStock.id,
                    label: productInStock.version.label,
                    price: productInStock.price,
                  }
                })}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
