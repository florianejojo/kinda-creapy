"use client"

import React, { useState } from "react"

import { Product } from "@/models/product_model"

import { useProductStore } from "@/stores/product_store"

import { toast } from "sonner"
import ProductSelect from "./product_select"

type ProductSelectFormProps = {
  currentProduct: Product | null
  setCurrentProduct: (product: Product | null) => void
}

const ProductSelectForm: React.FC<ProductSelectFormProps> = ({
  currentProduct,
  setCurrentProduct,
}) => {
  const { findProductById } = useProductStore()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSelect = async (productId: string | null) => {
    setIsLoading(true)

    if (productId) {
      const product = findProductById(productId)

      if (!product) return toast.error("Impossible de trouver le produit sélectionné")

      setCurrentProduct(product)
    } else {
      setCurrentProduct(null)
    }

    setIsLoading(false)
  }

  return (
    <div className="w-full">
      <div className={`flex items-center justify-between mb-1`}>
        <label
          htmlFor="product-title"
          className={`block font-semibold  text-gray-100 dark:text-gray-300`}
        >
          Selectionne un produit
        </label>
      </div>
      <ProductSelect
        id="product-select"
        onSelect={handleSelect}
        currentProductId={currentProduct?.id || null}
        isDisabled={isLoading}
      />
    </div>
  )
}

export default ProductSelectForm
