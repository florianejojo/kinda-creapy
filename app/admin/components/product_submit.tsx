import React from "react"

import { initializeProduct, Product, ProductDTO } from "@/models/product_model"

import LoadingCircle from "@/app/_shared/components/loading_circle"
import Spacer from "@/app/_shared/components/spacer"

import productService from "@/services/product_service"

import { useProductStore } from "@/stores/product_store"
import { toast } from "sonner"
import { validateProduct } from "../utils/validateProduct"

interface ProductSubmitProps {
  currentProduct: Product
  isSubmitting: boolean
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentProduct: (product: Product) => void
}

export const ProductSubmit: React.FC<ProductSubmitProps> = ({
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

    setCurrentProduct(initializeProduct(""))
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
    console.log({ currentProduct })
    if (!validateAndHandleError(currentProduct)) return
    const response = await submitProduct(currentProduct)
    if (response.success) {
      handleResponseSuccess(currentProduct, response)
    } else {
      toast.error(response.error ?? "Erreur inconnue")
    }
  }

  return (
    <button
      type="submit"
      className={[
        "select-none m-auto mt-4 w-full font-semibold",
        "py-2 px-4 rounded-md border",
        "transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-ring/40",

        isSubmitting
          ? ["border-border", "bg-muted text-muted-foreground", "cursor-not-allowed"].join(" ")
          : [
              "border-border",
              "bg-transparent text-foreground",
              "hover:bg-accent hover:text-accent-foreground",
            ].join(" "),
      ].join(" ")}
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
        "Créer"
      )}
    </button>
  )
}
