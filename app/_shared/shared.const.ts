import { ArtPiece, CATEGORIES, Category, Locale, PageKey, PATHS } from "@/app/_shared/shared.types"
import { Artist } from "@/app/artists/artists.enum"
import { Product } from "@/app/products/products.types"

export const LOCALES = ["en", "fr"] as const

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
  admin: {
    path: "/admin",
  },
} as const

export const PAGE_LABELS: Record<Locale, Record<PageKey, string>> = {
  fr: {
    products: "Nos Créations",
    contact: "Contact",
    artists: "Artistes",
    admin: "Admin",
  },
  en: {
    products: "Creations",
    contact: "Contact",
    artists: "Artists",
    admin: "Admin",
  },
}

export const categoryDescriptions = {
  [Category.illusions]: `Illusions comme images plurielles, à l’endroit, a l’envers,en dedans, au dehors, tantôt qui s’imbriquent, se réfléchissent, se multiplient, se mélangent,etc.
Illusions pour se rappeler que rien n’est figé et qu’il y a pléthore de façons de voir et percevoir.
`,
  [Category.beasts]: `Bestiaires comme autant d’échantillonnage de vie, cartographie d’un vivant, réel,imaginaire de tout temps.
Bestiaires comme classification in(dé)finie des êtres, espèces.
Bestiaires comme on creuse la terre, comme on plonge en mer, découvertes archéologiques.
Bestiaires comme un rêve, comme Ether à la rencontre des chimères.
Bestiaires comme antre des bêtes, des bestioles et du bestial.  
`,
  [Category.trees]: `l’arbre n’est pas un décor,là où l’on a troqué son rôle alimentaire pour devenir artifice de nos villes à l’agonie,
malgré les hybridations et les conditionnements pour tenter de le faire rentrer dans quelques cases et quelque utilisation décorative l’arbre survit, vibre, sage et puissant, il porte le message de la vie .
Vit au rythme du temps, en harmonie, sans froisser aucune des trames de la toile du vivant, porteur de lumière, concentré de savoir l’arbre est pluriel.
Chacun a son enseignement spécifique et là où les uns le voient décor, je le perce-vois «  des corps »

L’arbre comme métaphore , vivier, schéma visible de l’invisible,
fractale et arborescence, être vivant, individu unique à caractère particulier, poumons, lien cosmo-tellurique ,enseignement…
Bien sûr, comme il a été difficile pour les découvreurs, botanistes, collectionneurs, aventuriers de créer ses taxonomies et de les ranger du règne a l’espèce, il en va de même pour mon appréciation.
`,
  [Category.all]: `Kinda creapy, c’est un collectif d’artistes émergeants, partageant une même appétence pour la création autour de thématiques comme l’organique,le fantastique, l’onirisme.
Nos artistes aiment évoluer à la frontière de plusieurs mondes flirtant entre visible et invisible.
Chez Kinda creapy, on navigue entre mythe et réalité, dans l’écriture de nos mondes intérieurs et la célébration de la vie.
`,
}

export const CATEGORY_LABELS: Record<string, string> = {
  [CATEGORIES.illusions]: "Illusions",
  [CATEGORIES.beasts]: "Bestiaires",
  [CATEGORIES.trees]: "Arbres",
}

export const artworks: ArtPiece[] = [
  {
    id: "36",
    name: "Mix scape II",
    description: "Vacances à la montagne, souvenir d'un temps heureux",
    image: "IMG_5509.webp",
    technique: "Techniques mixtes / feu / cire",
    size: "100x80 cm",
    color: "#880000",
    isSpinable: false,
    alt: "Cascade de montagne - Peinture mettant en scène une cascade dans paysage abstrait et surréaliste.",
    categories: [CATEGORIES.illusions],
    isAvailable: false,
    price: 200,
  },
]

export const paintings: Product[] = artworks.map((artwork) => {
  const mainCategory = artwork.categories?.[0]
  const categoryLabel = (mainCategory && CATEGORY_LABELS[mainCategory]) ?? "Illusions"

  return {
    id: artwork.id,
    title: artwork.name,
    artist: Artist.serom,
    category: categoryLabel,
    images: [`/images/artpieces/${artwork.image}`],
    dimensions: artwork.size,
    description: artwork.description,
    available: artwork.isAvailable ?? true,
    availableLimited: artwork.isAvailable ?? true,
    prices: {
      original: artwork.price,
      limited: 45,
      printA5: 15,
      printA3: 35,
      printA4: 25,
    },
  }
})
