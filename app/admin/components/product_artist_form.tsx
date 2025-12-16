import React from "react"

import { initializeProduct, Product } from "@/models/product_model"

import InputField from "@/app/_shared/components/input_field"
import { Artist } from "@/app/artists/artists.enum"

interface ProductArtistFormProps {
  currentProduct: Product | null
  updateCurrentProduct: (product: Partial<Product>) => void
}

export const ProductArtistForm: React.FC<ProductArtistFormProps> = ({
  currentProduct,
  updateCurrentProduct,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const artistName = e.target.value
    if (!currentProduct) {
      const newProduct = initializeProduct(artistName)
      updateCurrentProduct(newProduct)
    } else {
      updateCurrentProduct({ artist: artistName as Artist })
    }
  }
  return (
    <div className="w-full">
      <div className={`flex items-center justify-between mb-1`}>
        <label
          htmlFor="product-artist"
          className={`block font-semibold  text-gray-100 dark:text-gray-300`}
        >
          Artiste
        </label>
      </div>
      <InputField
        id="product-artist"
        value={currentProduct?.artist || ""}
        onChange={handleChange}
        required
        raw
      />
    </div>
  )
}
