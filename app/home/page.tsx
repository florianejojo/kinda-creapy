"use client"

import { HeroSection } from "@/app/_src/promotion/ui/HeroSection"
import { FeaturedProductCard } from "@/app/_src/product/ui/FeaturedProductCard"
import { useProductStore } from "@/app/_src/product/productStore"
import { useEffect } from "react"
import { displayFeaturedProductsUseCase } from "@/app/_src/product/features/displayFeaturedProducts/displayFeaturedProducts.useCase"

export default function Home() {
  const { featuredProducts } = useProductStore()

  useEffect(() => {
    displayFeaturedProductsUseCase()
  }, [])

  return (
    <div className=" min-h-screen font-san w-full">
      <HeroSection />

      <section className="py-16 px-6 sm:px-12 mx-auto max-w-7xl">
        <h2 className="text-md sm:text-3xl m-8 text-center font-extralight">
          Nos coups de cœur
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, i) => (
            <FeaturedProductCard
              key={product.id}
              id={product.id}
              alt={product.images[0].alt}
              url={product.images[0].url}
              title={product.title}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
