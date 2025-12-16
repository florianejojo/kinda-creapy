"use client"

import { Button } from "@/app/_shared/components/button"
import { Product, ProductImage } from "@/models/product_model"
import Image from "next/image"
import { useCallback, useRef } from "react"

type ProductImagesFormProps = {
  product: Product
  updateProduct: (product: Partial<Product>) => void
}

export const ProductImagesForm = ({ product, updateProduct }: ProductImagesFormProps) => {
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
      updateProduct({ images: [...(product.images || []), ...newImages] })
    },
    [product, updateProduct],
  )

  const replaceAt = useCallback(
    async (idx: number, file: File) => {
      if (!file.type.startsWith("image/")) return
      const url = URL.createObjectURL(file)
      const next = [...product.images]
      next[idx] = { file, url }
      updateProduct({ images: next })
    },
    [product, updateProduct],
  )

  const removeAt = (idx: number) => {
    const next = product.images.filter((_, i) => i !== idx)
    updateProduct({ images: next })
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

  const swapToFront = (idx: number) => {
    if (idx === 0) return
    const next = [...product.images]
    const [image] = next.splice(idx, 1)
    next.unshift(image)
    updateProduct({ images: next })
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <label
        htmlFor="product-title"
        className="block font-semibold text-gray-100 dark:text-gray-300"
      >
        Images
      </label>

      {product.images.length > 0 && (
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4">
            {product.images.map((image, idx) => {
              const ext = image.file?.name?.split(".").pop()?.toLowerCase()
              const isHeic = ext === "heic"

              return (
                <div
                  data-is-primary={idx === 0}
                  key={image.url ?? idx}
                  className="w-full data-[is-primary=false]:hover:border data-[is-primary=false]:hover:border-red-700 cursor-pointer"
                  onClick={() => {
                    swapToFront(idx)
                  }}
                >
                  <div className="h-6">
                    {idx === 0 && <p className="text-red-500 text-xs">Image principale</p>}
                  </div>

                  <div className="rounded shadow border border-stone-200 bg-white p-2">
                    {isHeic ? (
                      <div className="w-full h-40 flex items-center justify-center bg-stone-100 rounded text-sm text-stone-600 text-center px-2">
                        Aperçu indisponible pour les images HEIC — conversion automatique côté
                        serveur
                      </div>
                    ) : (
                      <Image
                        src={image.url}
                        alt={`Preview ${idx + 1}`}
                        width={1}
                        height={1}
                        unoptimized
                        style={{ width: "100%", height: "auto", display: "block" }}
                        className="rounded"
                      />
                    )}
                    <div className="mt-2 flex gap-2">
                      <Button
                        onClick={(e) => {
                          openReplace(idx)
                        }}
                        variant="secondary"
                      >
                        Remplacer
                      </Button>
                      <Button
                        onClick={(e) => {
                          removeAt(idx)
                        }}
                      >
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <div className="mt-4">
        <Button onClick={openAdd}>
          {product.images.length === 0 ? "Ajouter une image" : "Ajouter une autre image"}
        </Button>
      </div>

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
