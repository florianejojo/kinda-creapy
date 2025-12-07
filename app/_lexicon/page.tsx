"use client"

import { useState } from "react"
import { Header } from "@/app/_shared/header"
import { lexique } from "@/app/lexicon/lexique-data"

export default function LexiquePage() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const categories = ["Tous", ...lexique.map((cat) => cat.category)]

  const displayItems =
    activeCategory === "Tous"
      ? lexique.flatMap((cat) => cat.items)
      : lexique.find((cat) => cat.category === activeCategory)?.items || []

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-display font-light tracking-wider text-foreground mb-4 text-balance">
          Lexique
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Une collection de définitions pour explorer l'univers artistique
        </p>

        <div className="flex gap-4 mb-16 border-b border-border pb-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-light tracking-wide transition-colors pb-2 whitespace-nowrap ${
                activeCategory === cat
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Display selected category content */}
        <div className="space-y-12">
          {displayItems.map((item, itemIndex) => (
            <div key={itemIndex} className="pb-8 border-b border-border last:border-b-0">
              <h3 className="text-xl font-display font-light text-foreground mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
