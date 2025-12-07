import { LOCALES } from "@/app/_shared/shared.const"
import { CATEGORIES } from "@/app/types/types"

// ---- ENUMS ----

export enum Category {
  all = "Toutes",
  illusions = "Illusions",
  beasts = "Bestiaire",
  trees = "Arbres",
}

export enum Artist {
  barniak = "Barniak",
}

// ---- TYPES ----

export type Tab = Category | Artist

export type Locale = (typeof LOCALES)[number]

export type ArtPiece = {
  id: string
  name: string
  description: string
  image: string
  technique: string
  size: string
  color?: string
  isSpinable?: boolean
  alt: string
  categories: CATEGORIES[]
  isAvailable: boolean
}
