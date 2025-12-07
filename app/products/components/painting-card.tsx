"use client"

import { Product } from "@/app/products/products.types"
import { useState } from "react"

interface PaintingCardProps {
  painting: Product
}

export default function PaintingCard({ painting }: PaintingCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showPrices, setShowPrices] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % painting.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? painting.images.length - 1 : prev - 1))
  }

  return (
    <div className="space-y-6">
      <div className="relative aspect-square overflow-hidden group">
        <img
          src={painting.images[currentImageIndex] || "/placeholder.svg"}
          alt={painting.title}
          className="w-full h-full object-contain border border-border"
        />

        <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prevImage} className="bg-black/20 hover:bg-black/40  p-2 transition">
            {"<"}
          </button>
          <button onClick={nextImage} className="bg-black/20 hover:bg-black/40  p-2 transition">
            {">"}
          </button>
        </div>

        {painting.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {painting.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 transition-all ${
                  index === currentImageIndex ? "bg-white w-4" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {!painting.available && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm tracking-wide">Vendue</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-display text-foreground">{painting.title}</h3>
          <p className="text-xs text-muted-foreground tracking-wide mt-1">Par {painting.artist}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">{painting.description}</p>

        <div className="space-y-2 pt-4 border-t border-border">
          {painting.prices.original > 0 && (
            <div className="flex justify-between items-baseline text-sm">
              <span className="text-foreground">Oeuvre originale</span>
              {
                <span className="text-foreground font-medium">
                  {painting.available ? painting.prices.original + "€" : "Vendue"}
                </span>
              }
            </div>
          )}

          <button
            onClick={() => setShowPrices(!showPrices)}
            className="w-full text-left flex justify-between items-center text-sm py-2 hover:opacity-60 transition"
          >
            <span className="text-foreground">Impressions</span>
            <span className="text-xs text-muted-foreground">{showPrices ? "−" : "+"}</span>
          </button>

          {showPrices && (
            <div className="space-y-2 pt-2 pl-0">
              <div className="flex justify-between items-baseline text-sm">
                <span className="text-muted-foreground">Print XXL (1,5m)</span>
                <span className="text-foreground">{painting.prices.printXXL}€</span>
              </div>
              <div className="flex justify-between items-baseline text-sm">
                <span className="text-muted-foreground">Print A3</span>
                <span className="text-foreground">{painting.prices.printA3}€</span>
              </div>
              <div className="flex justify-between items-baseline text-sm">
                <span className="text-muted-foreground">Print A4</span>
                <span className="text-foreground">{painting.prices.printA4}€</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
