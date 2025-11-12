"use client"

import React, { useState } from "react"

import ConfirmationModal from "@/components/delete_confirmation"
import { Product } from "@/models/product_model"
import productService from "@/services/product_service"
import { toast } from "sonner"
import { Button } from "@/components/button"

type ProductDeleteButtonProps = {
  currentProduct: Product
  onDelete: () => void
}

const ProductDeleteButton: React.FC<ProductDeleteButtonProps> = ({ currentProduct, onDelete }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDelete = async () => {
    if (!currentProduct.id) return

    setIsSubmitting(true)

    const { success, error } = await productService.deleteProduct(currentProduct.id)

    if (success) {
      onDelete()
      toast.success("Produit supprimé")
    } else {
      toast.error(error || "Échec de la suppression")
    }

    setIsSubmitting(false)
    setIsModalOpen(false)
  }

  return (
    <div className="ml-4 self-end flex flex-col justify-between items-end">
      <Button
        // className={`text-sm px-4 py-2 hover:bg-red-600 text-gray-100 rounded
        // bg-transparent dark:text-white border border-gray-200 dark:border-gray-700
        // ${!currentProduct ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => setIsModalOpen(true)}
        disabled={!currentProduct || isSubmitting}
      >
        {isSubmitting ? "Suppression..." : "Supprimer"}
      </Button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
        title={currentProduct.title}
      />
    </div>
  )
}

export default ProductDeleteButton
