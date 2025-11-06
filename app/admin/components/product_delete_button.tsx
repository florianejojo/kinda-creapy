"use client"

import React, { useState } from "react"

import ConfirmationModal from "@/components/delete_confirmation"
import { Product } from "@/models/product_model"

type ProductDeleteButtonProps = {
  currentProduct: Product
  onDelete: () => void
}

const ProductDeleteButton: React.FC<ProductDeleteButtonProps> = ({ currentProduct, onDelete }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDelete = async () => {
    setIsSubmitting(true)

    // const { success, error } = await deleteItem(item.id, itemType);

    // if (success) {
    //   onDelete();
    //   toast.success('Produit supprimé');
    // } else {
    //   toast.error(error || 'Échec de la suppression';
    // }

    setIsSubmitting(false)
    setIsModalOpen(false)
  }

  return (
    <div className="ml-4 self-end flex flex-col justify-between items-end">
      <button
        className={`text-sm px-4 py-1 hover:bg-red-600 text-gray-600 rounded 
        bg-transparent dark:text-white border border-gray-200 dark:border-gray-700
        ${!currentProduct ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => setIsModalOpen(true)}
        disabled={!currentProduct || isSubmitting}
      >
        {isSubmitting ? "Deleting..." : "Delete"}
      </button>

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
