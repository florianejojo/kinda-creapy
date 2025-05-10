// components/HeroSection.tsx
// components/HeroSection.tsx

import { artworks } from "@/app/_shared/constants/artwork"
import { Frame } from "@/app/_shared/Frame"
import { FeaturedProductCard } from "@/app/home/FeaturedProductCard"
import { HeroSection } from "@/app/home/HeroSection"
import { formatNameToId } from "@/app/utils/utils"
import imageMap from "@/imageImports"

export default function Home() {
  const featuredProducts = [artworks[0], artworks[1], artworks[2]]

  return (
    <div className=" min-h-screen font-sans">
      <HeroSection />

      <section className="py-16 px-6 sm:px-12  mx-auto">
        <h2 className="text-2xl sm:text-3xl mb-8 text-center">
          Nos coups de cœur
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(({ image, alt, name }, i) => (
            <FeaturedProductCard
              key={i}
              title={name}
              image={image}
              price={"15 $"}
              alt={alt}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
