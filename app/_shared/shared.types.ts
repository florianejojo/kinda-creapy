import { LOCALES } from "@/app/_shared/shared.const"
import { PAGES } from "@/app/_shared/shared.const"
import { Artist } from "@/app/artists/artists.enum"

// ---- ENUMS ----

export enum Category {
  all = "Toutes",
  illusions = "Illusions",
  beasts = "Bestiaire",
  trees = "Arbres",
}

<<<<<<< HEAD
=======
export enum Artist {
  barniak = "Barniak",
  serom = "Serom",
  reveor = "Révéor",
  desroseaux = "Desroseaux",
}

>>>>>>> b6358c0 (feat(Admin): Add new fields to products)
export enum CATEGORIES {
  trees = "Arbres",
  beasts = "Bestiaires",
  illusions = "Illusions",
}

export enum PATHS {
  artist = "/artist",
  shop = "/shop",
  gallery = "/gallery",
}

export enum TECHNIQUES {
  acrylique = "Acrylique",
  oil = "Huile",
  fire = "Feu",
  posca = "Posca",
  mixte = "Mixte",
  automatic = "Automatique",
  bic = "Bic",
  wax = "Wax",
}

export enum FETCH_STATUS {
  idle = "idle",
  loading = "loading",
  error = "error",
  success = "success",
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
  price: number
}

export type NavItem = { name: string; description?: string; path?: PATHS }

export type PageKey = keyof typeof PAGES
