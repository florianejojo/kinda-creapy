export const LOCALES = ["en", "fr"] as const
export type Locale = (typeof LOCALES)[number]

export const PAGES = {
  products: {
    path: "/products",
  },
  artists: {
    path: "/artists",
  },
  contact: {
    path: "/contact",
  },
} as const

export type PageKey = keyof typeof PAGES

export const PAGE_LABELS: Record<Locale, Record<PageKey, string>> = {
  fr: {
    products: "Nos Créations",
    contact: "Contact",
    artists: "Artistes",
  },
  en: {
    products: "Creations",
    contact: "Contact",
    artists: "Artists",
  },
}
