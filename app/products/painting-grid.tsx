"use client"

import { SubHeader } from "@/app/_shared/components/SubHeader"
import PaintingCard from "@/app/products/painting-card"
import { useState } from "react"
import { Category, Tab } from "@/app/_shared/shared.types"
import { categoryDescriptions, PAGE_LABELS, paintings } from "@/app/_shared/shared.const"
import { Product } from "@/app/products/products.types"

export default function PaintingGrid() {
  const [activeCategory, setActiveCategory] = useState<Tab>(Category.all)

  const filteredPaintings =
    activeCategory === Category.all
      ? paintings
      : paintings.filter((p) => p.category === activeCategory)

  return (
    <section className="w-full">
      <SubHeader
        title={PAGE_LABELS.fr.products}
        tabs={Object.values(Category)}
        activeTab={activeCategory}
        setActiveTab={setActiveCategory}
        description={categoryDescriptions[activeCategory as Category]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredPaintings.map((painting) => (
            <PaintingCard key={painting.id} painting={painting as Product} />
          ))}
        </div>
      </div>
    </section>
  )
}
