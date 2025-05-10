import { ProductImageGallery } from "@/app/gallery/[artPieceName]/ProductImageGallery"

export const ProductPage = () => {
  const product = {
    title: "Illustration Œil Cosmique",
    price: "25 €",
    description: `Une œuvre étrange et poétique, mêlant précision anatomique et abstraction symbolique. 
                  Imprimée sur papier texturé, chaque exemplaire est unique.`,
    image: "/products/oeil.jpg",
  }

  return (
    <section className="bg-[#f8f4ef] min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start transition-all duration-700 ease-in-out">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <ProductImageGallery image={product.image} alt={product.title} />
        </div>

        {/* Infos */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            {product.title}
          </h1>
          <p className="text-xl font-medium text-gray-800">{product.price}</p>
          <p className="text-base text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 hover:-translate-y-0.5 transition-transform duration-200 ease-in-out">
            Ajouter au panier
          </button>
        </div>
      </div>
    </section>
  )
}
