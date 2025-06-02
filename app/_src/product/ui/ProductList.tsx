import { ProductCard } from "@/app/_src/product/ui/ProductCard"
import { UploadImagesButton } from "@/app/_src/product/ui/UploadImagesButton"
import { formatNameToId } from "@/app/utils/utils"
import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"

export const ProductList = async () => {
  const categories = ["Tout", "Affiches", "Illustrations", "Objets"]

  const { data: products, error } = await supabase
    .from("products")
    .select(`*, images (url, alt)`)

  if (error) {
    console.error("Erreur Supabase :", error)
    return <div>Erreur lors du chargement des produits</div>
  }

  return (
    <section className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <UploadImagesButton /> */}
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Boutique
        </h1>

        {/* Filtres */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="px-4 py-2 text-black rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => {
            return (
              <ProductCard
                image=""
                key={i}
                title={product.title}
                images={product.images}
                price={"15"}
                id={product.id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
