import React from "react"

import { Product, ProductDTO } from "@/models/product_model"

import LoadingCircle from "@/components/loading_circle"
import Spacer from "@/components/spacer"

import productService from "@/services/product_service"

import { useProductStore } from "@/stores/product_store"
import { toast } from "sonner"
import { validateProduct } from "../utils/product_validate"

interface ProductSubmitProps {
  currentProduct: Product
  isSubmitting: boolean
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentProduct: (product: Product | null) => void
}

const ProductSubmit: React.FC<ProductSubmitProps> = ({
  currentProduct,
  isSubmitting,
  setIsSubmitting,
  setCurrentProduct,
}) => {
  const { updateOrAddProduct } = useProductStore()

  const validateAndHandleError = (product: Product) => {
    const error = validateProduct(product)
    if (error) {
      toast.error(error)
      return false
    }
    return true
  }

  const handleResponseSuccess = (
    productData: ProductDTO,
    response: { success: boolean; data?: string; error?: string },
  ) => {
    const actionText = productData.id ? "mis à jour" : "créé"
    toast.success(`Le produit "${productData.title}" a été ${actionText} !`)

    const productId = response.data ?? productData.id
    if (!productId) return

    updateOrAddProduct({ ...currentProduct, id: productId })

    setCurrentProduct(null)
  }

  const submitProduct = async (productData: ProductDTO) => {
    setIsSubmitting(true)
    const response = productData.id
      ? await productService.updateProduct(productData)
      : await productService.createProduct(productData)

    setIsSubmitting(false)
    return response
  }

  const handleSubmit = async () => {
    if (!validateAndHandleError(currentProduct)) return

    const productData = currentProduct
    const response = await submitProduct(productData)

    if (response.success) {
      handleResponseSuccess(productData, response)
    } else {
      toast.error(response.error ?? "Erreur inconnue")
    }
  }

  return (
    <button
      type="submit"
      className={`select-none m-auto mt-4 w-full font-semibold py-2 px-4 rounded border border-gray-200 dark:border-gray-700 ${
        isSubmitting
          ? "bg-gray-300 text-gray-500 dark:bg-gray-800 dark:text-gray-400 cursor-not-allowed"
          : "bg-transparent dark:text-white hover:text-red-600 dark:hover:text-red-600 hover:bg-[#383838] dark:hover:bg-[#ccc]"
      }`}
      disabled={isSubmitting}
      onClick={handleSubmit}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center">
          <LoadingCircle size={20} />
          <Spacer horizontal={true} size={10} />
          Traitement en cours...
        </div>
      ) : currentProduct.id ? (
        `Mettre à jour "${currentProduct.title}"`
      ) : (
        `Créer "${currentProduct.title}"`
      )}
    </button>
  )
}

export default ProductSubmit
