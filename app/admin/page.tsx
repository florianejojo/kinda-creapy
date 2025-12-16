"use client"
import InputNumber from "@/app/_shared/components/input_number"
import CustomSwitch from "@/app/_shared/components/switch"
import { initializeProduct, Product } from "@/models/product_model"
import { useProductStore } from "@/stores/product_store"
import { useEffect, useState } from "react"
import LogoutButton from "./components/logout_button"
import ProductDeleteButton from "./components/product_delete_button"
import ProductDescriptionForm from "./components/product_description_form"
import { ProductImagesForm } from "./components/product_images_form"
import { ProductSelectForm } from "./components/product_select_form"
import { ProductSubmit } from "./components/product_submit"
import { ProductTitleForm } from "./components/product_title_form"
import { Select } from "@/app/_shared/components/select"
import InputField from "@/app/_shared/components/input_field"
import { PageLayout } from "@/app/page-layout"
import { Artist } from "@/app/artists/artists.enum"

export default function Page() {
  const { removeProduct, fetchProducts, isLoading: productLoading } = useProductStore()

  const [currentProduct, setCurrentProduct] = useState<Product>(() => initializeProduct(""))
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    console.log({ currentProduct })
  }, [currentProduct])

  const handleProductDelete = () => {
    if (!currentProduct || !currentProduct.id) return

    removeProduct(currentProduct.id)
    setCurrentProduct(initializeProduct(""))
  }

  const updateCurrentProduct = (update: Partial<Product>) => {
    setCurrentProduct((prev) => ({ ...prev, ...update } as Product))
  }

  return (
    <PageLayout>
      <LogoutButton />
      <div className="flex gap-4 md:gap-8 flex-col p-4 md:w-3xl">
        <ProductSelectForm
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
          isLoading={productLoading}
        />

        <div className="w-full flex items-start gap-2">
          <ProductTitleForm
            currentProduct={currentProduct}
            updateCurrentProduct={updateCurrentProduct}
          />

          {currentProduct && currentProduct.id && (
            <ProductDeleteButton currentProduct={currentProduct} onDelete={handleProductDelete} />
          )}
        </div>

        <>
          <div className="w-full">
            <div className={`flex items-center justify-between mb-1`}>
              <label
                htmlFor="product-title"
                className={`block font-semibold  text-gray-100 dark:text-gray-300`}
              >
                Technique
              </label>
            </div>
            <InputField
              id="product-technique"
              value={currentProduct?.technique || ""}
              onChange={(e) => {
                const technique = e.target.value
                updateCurrentProduct({ technique })
              }}
              required
              raw
            />
          </div>

          <ProductDescriptionForm
            currentProduct={currentProduct}
            updateCurrentProduct={updateCurrentProduct}
          />

          <ProductImagesForm product={currentProduct} updateProduct={updateCurrentProduct} />

          <InputNumber
            id="price"
            label="Prix"
            value={currentProduct.price}
            onChange={(value) => updateCurrentProduct({ price: value })}
          />

          <CustomSwitch
            id="sold"
            label="Vendu"
            checked={currentProduct.sold || false}
            onChange={(checked) => updateCurrentProduct({ sold: checked })}
          />
          <CustomSwitch
            id="isVisible"
            label="Visible sur le site"
            checked={currentProduct.is_visible || false}
            onChange={(checked) => updateCurrentProduct({ is_visible: checked })}
          />
          <div>
            <div className={`flex items-center justify-between mb-1`}>
              <label htmlFor="product-artist">Artist</label>
            </div>

            <Select<Artist>
              options={Object.keys(Artist).map((key) => ({
                label: Artist[key as keyof typeof Artist],
                value: key as Artist,
              }))}
              id="artist"
              value={(currentProduct.artist as Artist) || ""}
              onChange={(value) => updateCurrentProduct({ artist: value as Artist })}
              placeholder="Sélectionner un artiste"
            />
          </div>

          <div className="flex gap-4">
            <InputNumber
              id="width_mm"
              label="Largeur (cm)"
              value={currentProduct.width_mm ? currentProduct.width_mm / 10 : 0}
              onChange={(value) => updateCurrentProduct({ width_mm: value * 10 })}
            />
            <InputNumber
              id="height_mm"
              label="Hauteur (cm)"
              value={currentProduct.height_mm ? currentProduct.height_mm / 10 : 0}
              onChange={(value) => updateCurrentProduct({ height_mm: value * 10 })}
            />
          </div>

          <ProductSubmit
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
          />
        </>
      </div>
    </PageLayout>
  )
}
