export const LOCALES = ["en", "fr"] as const
export type Locale = (typeof LOCALES)[number]

export const PAGES = {
  creations: {
    path: "/creations",
  },
  artists: {
    path: "/artists",
  },
  contact: {
    path: "/contact",
  },
} as const

export type PageKey = keyof typeof PAGES // "creations" | "about" | "contact" | "artists"

export const PAGE_LABELS: Record<Locale, Record<PageKey, string>> = {
  fr: {
    creations: "Nos Créations",
    contact: "Contact",
    artists: "Artistes",
  },
  en: {
    creations: "Creations",
    contact: "Contact",
    artists: "Artists",
  },
}
