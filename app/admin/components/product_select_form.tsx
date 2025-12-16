"use client"

import React from "react"

import { initializeProduct, Product } from "@/models/product_model"

import { useProductStore } from "@/stores/product_store"

import { toast } from "sonner"
import { ProductSelect } from "./product_select"

type ProductSelectFormProps = {
  currentProduct: Product
  setCurrentProduct: (product: Product) => void
  isLoading: boolean
}

export const ProductSelectForm: React.FC<ProductSelectFormProps> = ({
  currentProduct,
  setCurrentProduct,
  isLoading,
}) => {
  const { findProductById } = useProductStore()

  const handleSelect = async (productId: string | null) => {
    if (productId) {
      const product = findProductById(productId)

      if (!product) return toast.error("Impossible de trouver le produit sélectionné")

      setCurrentProduct(product)
    } else {
      setCurrentProduct(initializeProduct(""))
    }
  }

  return (
    <div className="w-full">
      <div className={`flex items-center justify-between mb-1`}>
        <label
          htmlFor="product-title"
          className={`block font-semibold  text-gray-100 dark:text-gray-300`}
        >
          {isLoading ? "Chargement des produits..." : "Selectionne un produit"}
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
