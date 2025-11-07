"use client"

import { Product, ProductImage } from "@/models/product_model"
import Image from "next/image"
import { useCallback, useRef } from "react"

type ProductImagesFormProps = {
  currentProduct: Product
  updateCurrentProduct: (product: Partial<Product>) => void
}

export const ProductImagesForm = ({
  currentProduct,
  updateCurrentProduct,
}: ProductImagesFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const replaceIndexRef = useRef<number | null>(null)

  const addFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || !files.length) return
      const newImages: ProductImage[] = []
      for (const file of Array.from(files)) {
        if (!file.type.startsWith("image/")) continue
        const url = URL.createObjectURL(file)
        newImages.push({ file, url })
      }
      updateCurrentProduct({ images: [...(currentProduct.images || []), ...newImages] })
    },
    [currentProduct],
  )

  const replaceAt = useCallback(
    async (idx: number, file: File) => {
      if (!file.type.startsWith("image/")) return
      const url = URL.createObjectURL(file)
      const next = [...currentProduct.images]
      next[idx] = { file, url }
      updateCurrentProduct({ images: next })
    },
    [currentProduct],
  )

  const removeAt = (idx: number) => {
    const next = currentProduct.images.filter((_, i) => i !== idx)
    updateCurrentProduct({ images: next })
  }

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const replaceIdx = replaceIndexRef.current
    replaceIndexRef.current = null
    if (replaceIdx !== null && files && files[0]) {
      await replaceAt(replaceIdx, files[0])
      if (e.currentTarget) e.currentTarget.value = ""
      return
    }
    await addFiles(files)
    if (e.currentTarget) e.currentTarget.value = ""
  }

  const openAdd = () => {
    replaceIndexRef.current = null
    fileInputRef.current?.click()
  }

  const openReplace = (idx: number) => {
    replaceIndexRef.current = idx
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <label
        htmlFor="product-title"
        className={`block font-semibold  text-gray-100 dark:text-gray-300`}
      >
        Images
      </label>

      {currentProduct.images.length > 0 && (
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4">
            {currentProduct.images.map((it, idx) => {
              const ext = it.file?.name?.split(".").pop()?.toLowerCase()
              const isHeic = ext === "heic"

              return (
                <div key={idx} className="w-full">
                  <div className="rounded shadow border border-stone-200 bg-white p-2">
                    {isHeic ? (
                      <div className="w-full h-40 flex items-center justify-center bg-stone-100 rounded text-sm text-stone-600 text-center px-2">
                        Aperçu indisponible pour les images HEIC — conversion automatique côté
                        serveur
                      </div>
                    ) : (
                      <Image
                        src={it.url}
                        alt={`Preview ${idx + 1}`}
                        width={1}
                        height={1}
                        unoptimized
                        style={{ width: "100%", height: "auto", display: "block" }}
                        className="rounded"
                      />
                    )}
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => openReplace(idx)}
                        className="px-3 py-1.5 bg-stone-800 text-white rounded text-xs hover:bg-stone-700 transition"
                      >
                        Remplacer
                      </button>
                      <button
                        type="button"
                        onClick={() => removeAt(idx)}
                        className="px-3 py-1.5 bg-stone-100 text-stone-700 rounded text-xs hover:bg-stone-200 transition"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={openAdd}
        className="px-3 py-2 bg-stone-800 text-white rounded text-sm hover:bg-stone-700 transition"
      >
        {currentProduct.images.length === 0 ? "Ajouter une image" : "Ajouter une autre image"}
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleInputChange}
        className="hidden"
      />
    </div>
  )
}
