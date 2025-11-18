"use client"
import InputNumber from "@/components/input_number"
import Spacer from "@/components/spacer"
import CustomSwitch from "@/components/switch"
import { Product } from "@/models/product_model"
import { useProductStore } from "@/stores/product_store"
import { useEffect, useState } from "react"
import LogoutButton from "./components/logout_button"
import ProductDeleteButton from "./components/product_delete_button"
import ProductDescriptionForm from "./components/product_description_form"
import { ProductImagesForm } from "./components/product_images_form"
import ProductSelectForm from "./components/product_select_form"
import ProductSubmit from "./components/product_submit"
import { ProductTitleForm } from "./components/product_title_form"

export default function Page() {
  const { removeProduct, fetchProducts, isLoading: productLoading } = useProductStore()

  const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleProductDelete = () => {
    if (!currentProduct || !currentProduct.id) return

    removeProduct(currentProduct.id)
    setCurrentProduct(null)
  }

  const updateCurrentProduct = (update: Partial<Product>) => {
    setCurrentProduct((prev) => ({ ...prev, ...update } as Product))
  }

  return (
    <div className="w-full max-w-2xl bg-cream-100 mx-auto">
      <LogoutButton />
      {currentProduct?.title && (
        <ProductSubmit
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      )}
      <ProductSelectForm
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        isLoading={productLoading}
      />
      <Spacer size={12} />
      <div className="w-full flex items-start gap-2">
        <ProductTitleForm
          currentProduct={currentProduct}
          updateCurrentProduct={updateCurrentProduct}
        />
        {currentProduct && currentProduct.id && (
          <ProductDeleteButton currentProduct={currentProduct} onDelete={handleProductDelete} />
        )}
      </div>
      {currentProduct && (
        <>
          <Spacer size={12} />
          <ProductDescriptionForm
            currentProduct={currentProduct}
            updateCurrentProduct={updateCurrentProduct}
          />
          <Spacer size={12} />
          <ProductImagesForm product={currentProduct} updateProduct={updateCurrentProduct} />
          <Spacer size={12} />
          <InputNumber
            id="price"
            label="Prix"
            value={currentProduct.price}
            onChange={(value) => updateCurrentProduct({ price: value })}
          />
          <Spacer size={12} />
          <CustomSwitch
            id="sold"
            label="Vendu"
            checked={currentProduct.sold || false}
            onChange={(checked) => updateCurrentProduct({ sold: checked })}
          />
          <Spacer size={12} />
        </>
      )}
    </div>
  )
}
