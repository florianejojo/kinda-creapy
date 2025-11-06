import { Product } from "@/models/product_model"

export const validateProduct = (product: Product): string | null => {
  if (!product.title || product.title.trim() === "") {
    return "Le titre du produit est requis."
  }

  if (!product.description || product.description.trim() === "") {
    return "La description du produit est requise."
  }

  if (!product.images || product.images.length === 0) {
    return "Au moins une image du produit est requise."
  }

  for (const [index, image] of product.images.entries()) {
    if (!image.file && !image.url) {
      return `L’image ${index + 1} est manquante (aucun fichier ni URL).`
    }

    if (image.file) {
      if (!image.file.type.startsWith("image/")) {
        return `L’image ${index + 1} doit être un fichier image (JPEG, PNG, etc.).`
      }
      const limit = parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE_MB as string)
      if (image.file.size > limit * 1024 * 1024) {
        return `La taille du fichier dépasse la limite de ${limit} Mo.`
      }
    }
  }

  return null
}
