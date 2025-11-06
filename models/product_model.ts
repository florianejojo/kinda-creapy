export type ProductImage = {
  file: File
  url: string
}

export type Product = {
  id?: string
  title: string
  description?: string
  images: ProductImage[]
  price: number
  sold: boolean
}

export type ProductDTO = Product

export function initializeProduct(title: string): Product {
  return {
    title: title,
    images: [],
    price: 1,
    sold: false,
  }
}
