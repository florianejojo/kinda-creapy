import { Product as ProductModel } from "@/models/product_model"
import { Product } from "@/app/products/products.types"
import { Category } from "@/app/_shared/shared.types"
import { Artist } from "@/app/artists/artists.enum"

export const mapProducts = (products: ProductModel[]): Product[] => {
  return products
    .map((product) => {
      if (!product.is_visible) {
        return null
      }
      return {
        id: product.id || "",
        title: product.title,
        artist: product.artist as Artist,
        category: Category.all,
        images: product.images.map((img) => img.url),
        dimensions:
          product.height_mm && product.width_mm
            ? `${product.width_mm / 10} x ${product.height_mm / 10} cm`
            : "",
        description: product.description || "",
        available: !product.sold,
        availableLimited: !product.sold_limited,
        prices: {
          original: product.price,
          limited: product.price_limited || 0,
          printA3: 35,
          printA4: 25,
          printA5: 15,
        },
        isVisible: product.is_visible,
      }
    })
    .filter((p) => p !== null)
}
