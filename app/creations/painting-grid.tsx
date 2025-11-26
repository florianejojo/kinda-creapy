"use client"

import { Category } from "@/app/_shared/shared.enums"
import { SubHeader } from "@/app/_shared/sub-header"
import PaintingCard from "@/app/creations/painting-card"
import { categoryDescriptions, paintings } from "@/app/_shared/data/categories-data"
import { useState } from "react"
import { Tab } from "@/app/_shared/shared.types"

export default function PaintingGrid() {
  const [activeCategory, setActiveCategory] = useState<Tab>(Category.all)

  const filteredPaintings =
    activeCategory === Category.all
      ? paintings
      : paintings.filter((p) => p.category === activeCategory)

  return (
    <section className="w-full">
      <SubHeader
        title="Oeuvres"
        tabs={Object.values(Category)}
        activeTab={activeCategory}
        setActiveTab={setActiveCategory}
        description={categoryDescriptions[activeCategory]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredPaintings.map((painting) => (
            <PaintingCard key={painting.id} painting={painting} />
          ))}
        </div>
      </div>
    </section>
  )
}
