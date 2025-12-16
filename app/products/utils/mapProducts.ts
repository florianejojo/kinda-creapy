import { Product as ProductModel } from "@/models/product_model"
import { Product } from "@/app/products/products.types"
<<<<<<< HEAD
import { Category } from "@/app/_shared/shared.types"
import { Artist } from "@/app/artists/artists.enum"
=======
import { Artist, Category } from "@/app/_shared/shared.types"
>>>>>>> b6358c0 (feat(Admin): Add new fields to products)

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
        prices: { original: product.price, printXXL: 200, printA3: 60, printA4: 45 },
        isVisible: product.is_visible,
      }
    })
    .filter((p) => p !== null)
}
