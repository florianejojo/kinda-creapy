import { Product } from "@/app/products/products.types"

export const getDefaultPrices = (size: string): Product["prices"] => {
  return {
    original: 1000,
    printXXL: 200,
    printA3: 60,
    printA5: 45,
  }
}
