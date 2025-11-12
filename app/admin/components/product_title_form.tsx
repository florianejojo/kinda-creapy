import React from "react"

import { initializeProduct, Product } from "@/models/product_model"

import InputField from "@/components/input_field"

interface ProductTitleFormProps {
  currentProduct: Product | null
  updateCurrentProduct: (product: Partial<Product>) => void
}

export const ProductTitleForm: React.FC<ProductTitleFormProps> = ({
  currentProduct,
  updateCurrentProduct,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    if (!currentProduct) {
      const newProduct = initializeProduct(title)
      updateCurrentProduct(newProduct)
    } else {
      updateCurrentProduct({ title })
    }
  }
  return (
    <div className="w-full">
      <div className={`flex items-center justify-between mb-1`}>
        <label
          htmlFor="product-title"
          className={`block font-semibold  text-gray-100 dark:text-gray-300`}
        >
          Titre
        </label>
      </div>
      <InputField
        id="product-title"
        value={currentProduct?.title || ""}
        onChange={handleChange}
        required
        raw
      />
    </div>
  )
}
