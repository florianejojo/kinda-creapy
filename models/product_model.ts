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
  price_limited?: number
  sold: boolean
  sold_limited: boolean
  width_mm?: number
  height_mm?: number
  width_limited_mm?: number
  height_limited_mm?: number
  technique?: string
  artist?: Artist
  is_visible?: boolean
  category?: Category
}

export type ProductDTO = Product

export function initializeProduct(title: string): Product {
  return {
    title,
    images: [],
    price: 100,
    height_mm: 100,
    width_mm: 100,
    price_limited: 0,
    sold: false,
    sold_limited: false,
    is_visible: false,
    description: "",
    technique: "",
  }
}
