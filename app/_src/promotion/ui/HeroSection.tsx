import { Button } from "@/app/_src/shared/ui/Button"

export const HeroSection = () => (
  <section
    className="relative bg-transparent
   bg-cover bg-center text-white py-24 px-6 sm:px-12 border-b"
  >
    <div className="bg-transparent absolute inset-0" />
    <div className="relative z-10 mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-extralight mb-4 tracking-wide">KINDA CREAPY</h1>
      <p className="text-lg sm:text-xl mb-6">
        Images doubles, illustrations décalées, surrealistes.
      </p>

      <Button isLink href={"/gallery"}>
        Voir la boutique
      </Button>
    </div>
  </section>
)
