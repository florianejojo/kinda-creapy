import { Product as ProductModel } from "@/models/product_model"
import { Product } from "@/app/products/products.types"
import { Category } from "@/app/_shared/shared.types"

export const mapProducts = (products: ProductModel[]): Product[] => {
  return products.map((product) => ({
    id: product.id || "",
    title: product.title,
    artist: "barniak",
    category: Category.all,
    images: product.images.map((img) => img.url),
    dimensions: "50x40 cm",
    description: product.description || "",
    available: !product.sold,
    prices: { original: product.price, printXXL: 200, printA3: 60, printA4: 45 },
  }))
}
