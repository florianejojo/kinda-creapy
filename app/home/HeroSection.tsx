import { AlgoBlood } from "@/app/_shared/AlgoBlood"
import { Button } from "@/app/_shared/Button"
import Link from "next/link"

// bg-[url('/images/artpieces/IID019B01%202.webp')]
// bg-[url('/images/artpieces/IMG_4919.webp')]
export const HeroSection = () => (
  <section
    className="relative bg-transparent
   bg-cover bg-center text-white py-24 px-6 sm:px-12 border-b"
  >
    <div className="bg-transparent absolute inset-0" />
    <div className="relative z-10 mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-extralight mb-4 tracking-wide">
        KINDA CREAPY
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Images doubles, illustrations décalées, surrealistes.
      </p>

      <Button isLink href={"/shop"}>
        Voir la boutique
      </Button>
    </div>
  </section>
)
