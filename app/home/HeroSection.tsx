import { Button } from "@/app/_shared/Button"
import Link from "next/link"

export const HeroSection = () => (
  <section className="relative opacity-50 bg-[url('/images/artpieces/IID019B01%202.webp')] bg-cover bg-center text-white py-24 px-6 sm:px-12">
    <div className="bg-black/50 absolute inset-0" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wide">
        Kinda Creapy
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Images doubles, illustrations décalées, surrealistes.
      </p>

      <Button isLink href={"/shop"}>
        Voir la boutique
      </Button>

      {/* <Link href="/shop"> Voir la boutique</Link>
      <a
        href="/shop"
        className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
      ></a> */}
    </div>
  </section>
)
