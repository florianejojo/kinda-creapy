import { Category } from "@/app/_shared/shared.types"
import { Artist } from "@/app/artists/artists.enum"
import type { Tables } from "@/lib/database.types"

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

// La base renvoie `null` là où le modèle attend `undefined`
export function productFromRow(
  row: Tables<"products">,
  publicUrl: (path: string) => string,
): Product {
  return {
    id: row.id,
    title: row.title,
    description: row.description ?? undefined,
    images: row.images.map((path) => ({ path, url: publicUrl(path) })),
    price: row.price,
    price_limited: row.price_limited ?? undefined,
    sold: row.sold ?? false,
    sold_limited: row.sold_limited ?? false,
    width_mm: row.width_mm ?? undefined,
    height_mm: row.height_mm ?? undefined,
    width_limited_mm: row.width_limited_mm ?? undefined,
    height_limited_mm: row.height_limited_mm ?? undefined,
    technique: row.technique ?? undefined,
    artist: (row.artist as Artist) ?? undefined,
    is_visible: row.is_visible ?? undefined,
    category: (row.category as Category) ?? undefined,
  }
}

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
