import { artworks } from "@/app/_shared/constants/artwork"
import { Category } from "@/app/_shared/shared.enums"
import { Product } from "@/app/products/products.types"
import { CATEGORIES } from "@/app/types/types"
import { Product as ProductModel } from "@/models/product_model"

export const categories = Object.values(Category).map((category) => category)

export const categoryDescriptions = {
  [Category.illusions]:
    "Explorations visuelles où la réalité se dissout. Chaque toile joue avec la perception, invitant le spectateur à questionner ce qu'il voit. Une danse entre abstraction et représentation, où les formes flottent entre présence et absence.",

  [Category.beasts]:
    "Un recueil d'êtres réels et imaginaires. Ces créatures peuplent mes mondes, chacune portant sa propre histoire. Du cosmos aux profondeurs de la nature, elles révèlent les mystères cachés de notre monde.",

  [Category.trees]:
    "Les arbres sont les gardiens de mondes anciens et futurs. Chaque peinture dans cette série révèle un aspect différent de ces créatures vivantes, du sage au mystérieux, de l'accueillant au secret.",
  [Category.all]: "",
}
const DEFAULT_ARTIST = "Barniak"
const DEFAULT_CATEGORY = "Illusions"
export const CATEGORY_LABELS: Record<string, string> = {
  [CATEGORIES.illusions]: "Illusions",
  [CATEGORIES.beasts]: "Bestiaires",
  [CATEGORIES.trees]: "Arbres",
}
const getDefaultPrices = (size: string): Product["prices"] => {
  return {
    original: 1000,
    printXXL: 200,
    printA3: 60,
    printA5: 45,
  }
}

export const paintings: Product[] = artworks.map((artwork) => {
  const mainCategory = artwork.categories?.[0]
  const categoryLabel = (mainCategory && CATEGORY_LABELS[mainCategory]) ?? DEFAULT_CATEGORY

  return {
    id: artwork.id,
    title: artwork.name,
    artist: DEFAULT_ARTIST,
    category: categoryLabel,
    images: [`/images/artpieces/${artwork.image}`],
    dimensions: artwork.size,
    description: artwork.description,
    available: artwork.isAvailable ?? true,
    prices: getDefaultPrices(artwork.size),
  }
})
