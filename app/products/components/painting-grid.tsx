"use client"

import { SubHeader } from "@/app/_shared/components/SubHeader"
import PaintingCard from "@/app/products/components/painting-card"
import { useEffect, useState } from "react"
import { Category, Tab } from "@/app/_shared/shared.types"
import { categoryDescriptions, PAGE_LABELS, paintings } from "@/app/_shared/shared.const"
import { useProductStore } from "@/stores/product_store"
import { Product } from "@/app/products/products.types"
import { mapProducts } from "@/app/products/utils/mapProducts"

export default function PaintingGrid() {
  const [activeCategory, setActiveCategory] = useState<Tab>(Category.all)
  const { fetchProducts, products } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [])

  const concatPaintings = [...mapProducts(products), ...paintings]

  const filteredPaintings =
    activeCategory === Category.all
      ? concatPaintings
      : concatPaintings.filter((p) => p.category === activeCategory)

  return (
    <section className="w-full">
      <SubHeader
        title={PAGE_LABELS.fr.products}
        tabs={Object.values(Category)}
        activeTab={activeCategory}
        setActiveTab={setActiveCategory}
        description={categoryDescriptions[activeCategory as Category]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredPaintings.map((painting) => (
            <PaintingCard key={painting.id} painting={painting as Product} />
          ))}
        </div>
      </div>
    </section>
  )
}
