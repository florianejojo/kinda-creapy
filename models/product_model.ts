import { Category } from "@/app/_shared/shared.types"
import { Artist } from "@/app/artists/artists.enum"

export type ProductImage = {
  file?: File
  path?: string
  url: string
}

export type Product = {
  id?: string
  title: string
  description?: string
  images: ProductImage[]
  price: number
  sold: boolean
  width_mm?: number
  height_mm?: number
  technique?: string
  artist?: Artist
  is_visible?: boolean
  category?: Category
}

export type ProductDTO = Product

export function initializeProduct(title: string): Product {
  return {
    title: title,
    images: [],
    price: 100,
    height_mm: 100,
    width_mm: 100,
    sold: false,
    is_visible: false,
    description: "",
    technique: "",
  }
}
