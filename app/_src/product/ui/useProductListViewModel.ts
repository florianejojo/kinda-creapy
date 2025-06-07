import { displayProductsUseCase } from "@/app/_src/product/features/displayFeaturedProducts/displayProducts.useCase"
import { useProductStore } from "@/app/_src/product/productStore"
import { PATHS } from "@/app/types/types"
import { useEffect, useState } from "react"

export type ProductInSell = {
  id: string
  name: string
  description: string
  imageUrl: string
  alt: string
  options: {
    stockId: string
    optionLabel: string
    price: number
  }[]
}

export const useProductListViewModel = (): {
  products: ProductInSell[]
} => {
  const { products } = useProductStore()

  //   const {prices} = usePricesStore()

  useEffect(() => {
    displayProductsUseCase()
  }, [])

  return {
    products: products.map((product) => ({
      id: product.id,
      name: product.title,
      description: product.description,
      imageUrl: product.images[0].url,
      alt: product.images[0].alt,
      options: product.stocks.map((productInStock) => ({
        stockId: productInStock.id,
        optionLabel: productInStock.version.label,
        price: 15,
      })),
    })),
  }
}
