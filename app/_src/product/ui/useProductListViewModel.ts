import { displayProductsUseCase } from "@/app/_src/product/features/displayFeaturedProducts/displayProducts.useCase"
import { useProductStore } from "@/app/_src/product/productStore"
import { useEffect } from "react"

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
        price: productInStock.price || 0, // Default to 0 if price is not set
      })),
    })),
  }
}
