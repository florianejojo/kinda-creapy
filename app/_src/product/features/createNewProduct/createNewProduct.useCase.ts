import { bucketApi } from "@/app/_src/product/bucket.api"
import { productApi } from "@/app/_src/product/product.api"
import { useProductStore } from "@/app/_src/product/productStore"
import { FETCH_STATUS } from "@/app/_src/shared/shared.types"
import { useState } from "react"

type Product = {
  title: string
  images: any[]
}

export const createNewProductUseCase = async ({ images, title }: Product) => {
  // const [fetchingStatus, setFetchingStatus] = useState<FETCH_STATUS>()

  //   setFetchingStatus(FETCH_STATUS.loading)
  const handleImageUpload = async () => {
    const file = images[0]
    if (!file) return

    try {
      const { publicUrl } = await bucketApi.uploadImage({
        file: images[0],
        title,
      })
      console.log("URL publique de l'image :", publicUrl)
      // Tu peux stocker `publicUrl` dans ta base produits ensuite
    } catch (err) {
      console.error(err)
    }
  }
  console.log({ images })

  await handleImageUpload()

  //   await productApi.createNewProduct(newProduct)
}
