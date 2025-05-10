import { artworks } from "@/app/_shared/constants/artwork"
import { ProductCard } from "@/app/shop/ProductCard"

export const ProductList = () => {
  const categories = ["Tout", "Affiches", "Illustrations", "Objets"]

  return (
    <section className="bg-[#f8f4ef] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Boutique
        </h1>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="px-4 py-2 text-black rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artPiece, i) => (
            <ProductCard
              key={i}
              title={artPiece.name}
              image={artPiece.image}
              price={"15"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
