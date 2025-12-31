import { ArtPiece, CATEGORIES, Category, Locale, PageKey, PATHS } from "@/app/_shared/shared.types"
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
    id: "13",
    name: "Métamorphose Sauvage",
    description:
      "Dans les profondeurs de la forêt mystique, la frontière entre l'homme et la bête s'efface, révélant une métamorphose surréaliste. Cette œuvre capture l'instant où l'esprit humain se fond avec celui du loup, symbolisant la dualité de la nature et de l'âme. Les lignes abstraites et les couleurs vibrantes créent une illusion visuelle, où chaque détail se transforme, offrant une nouvelle perspective à chaque regard. C'est une exploration du subconscient, où le réel et l'imaginaire se rencontrent dans un ballet envoûtant de formes et de teintes.",
    image: "IMG_4802.webp",
    technique: "Techniques mixtes",
    size: "21x30 cm",
    color: "#007E5A",
    isSpinable: false,
    alt: "Métamorphose Sauvage - Techniques mixtes représentant la fusion de l'esprit humain avec celui du loup.",
    categories: [CATEGORIES.illusions, CATEGORIES.beasts],
    isAvailable: false,
    price: 160,
  },

  {
    id: "36",
    name: "Cascade de montagne",
    description: "",
    image: "IMG_5509.webp",
    technique: "Feu - Cire - Peinture à l'huile",
    size: "100x80 cm",
    color: "#880000",
    isSpinable: false,
    alt: "Cascade de montagne - Peinture mettant en scène une cascade dans paysage abstrait et surréaliste.",
    categories: [CATEGORIES.illusions],
    isAvailable: true,
    price: 200,
  },
  {
    id: "AG024B02",
    name: "Gardien des Silences",
    description:
      "Un arbre solitaire aux branches nues, abritant un petit animal niché à sa base, incarnant la protection et la solitude dans une forêt immobile.",
    image: "AG024B02.webp",
    technique: "Encre sur papier",
    size: "40x30 cm",
    alt: "Arbre solitaire avec un animal caché à sa base, symbole de protection dans la forêt.",
    categories: [CATEGORIES.trees, CATEGORIES.beasts],
    isAvailable: false,
    price: 95,
  },

  {
    id: "BL024B04",
    name: "Réveil des Anciens",
    description:
      "Un visage émerge lentement des profondeurs, ses traits marqués par le temps et les mystères oubliés.",
    image: "BL024B04.webp",
    technique: "Bic - Dessin automatique",
    size: "40x30 cm",
    alt: "Visage émergeant des profondeurs, marqué par le temps.",
    categories: [CATEGORIES.illusions],
    isAvailable: true,
    price: 90,
  },

  {
    id: "14",
    name: "Banquet à la Madone",
    description:
      "Les entités primordiales s'embrassent dans une étreinte chaotique, mélangeant destruction et création. Ce baiser, symbole de dualité, incarne la force créatrice du chaos dans l'univers. Une œuvre riche en détails, où chaque forme semble être en mouvement perpétuel, unissant les contraires pour former une harmonie surréaliste.",
    image: "IMG_5506.webp",
    technique: "Recouvrement - Technique mixte",
    size: "90x70 cm",
    color: "#6A3326",
    isSpinable: false,
    alt: "Banquet à la Madonne - Peinture détaillant une scène de chaos cosmique et d'étreinte surréaliste.",
    categories: [CATEGORIES.beasts, CATEGORIES.illusions],
    isAvailable: true,
    price: 175,
  },

  {
    id: "AC024PK02",
    name: "Forêt des Visions",
    description:
      "Un paysage surréaliste où des visages semblent émerger d'une forêt de formes organiques, représentant des esprits perdus cherchant la lumière.",
    image: "AC024PK02.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Paysage surréaliste avec des visages émergents dans une forêt mystique.",
    categories: [CATEGORIES.trees, CATEGORIES.illusions],
    isAvailable: false,
    price: 110,
  },
  {
    id: "16",
    name: "Arbre sorcier II",
    description:
      "Les racines d'un arbre millénaire se mêlent aux constellations dans une danse cosmique. Cette œuvre symbolise l'interconnexion entre la terre et le ciel, où les formes terrestres s'élèvent pour se fondre dans l'infini cosmique. Une fusion de la nature et du mystique, dans un style onirique et captivant.",
    image: "IMG_5809.webp",
    technique: "Peinture à l'huile",
    size: "24x30 cm",
    color: "#4A3436",
    isSpinable: false,
    alt: "Arbre sorcier II - Peinture représentant un arbre dansant avec les étoiles dans un ciel cosmique.",
    categories: [CATEGORIES.trees, CATEGORIES.illusions],
    isAvailable: true,
    price: 155,
  },

  {
    id: "5",
    name: "Cachot des Esprits",
    description:
      "Au plus profond de la Forêt des Chimères, un cachot dissimule des secrets millénaires. Les murs humides résonnent d'incantations oubliées, évoquant les légendes d'une époque où les créatures mystiques et les esprits des arbres dominaient le monde. Ce lieu, chargé d'une énergie palpable, incarne l'essence du surréalisme, où chaque ombre cache une illusion, et où chaque coin révèle une nouvelle facette du mystère de la vie.",
    image: "IMG_3846.webp",
    technique: "Peinture à l'huile",
    size: "24x30 cm",
    color: "#1C1127",
    isSpinable: false,
    alt: "Cachot des Esprits - Encre d'un cachot mystique caché dans une forêt.",
    categories: [CATEGORIES.trees, CATEGORIES.beasts, CATEGORIES.illusions],
    isAvailable: true,
    price: 170,
  },

  {
    id: "1",
    name: "Ouroborosorus Rex",
    description:
      "L'Ouroboros, un symbole d'éternité et de cyclicité, serpente à travers une forêt enchantée, où chaque arbre semble sorti d'un surréalisme profond. Dans ce monde mystique, les illusions se mêlent à la réalité, créant un espace où les images doubles se dévoilent aux yeux des initiés. Cet environnement, à la fois fractal et hypnotique, reflète la nature cyclique de la vie et de la mort, invitant à une introspection profonde sur l'existence.",
    image: "orobouros.webp",
    technique: "Posca",
    size: "25x25 cm",
    color: "#726D92",
    isSpinable: true,
    alt: "Ouroborosorus Rex - ",
    categories: [CATEGORIES.illusions, CATEGORIES.beasts, CATEGORIES.trees],
    isAvailable: true,
    price: 90,
  },

  {
    id: "2",
    name: "Quand le désert avance...",
    description:
      "Sous la douce lumière de la lune, un sanctuaire sacré se dévoile au cœur d'une forêt de casoar. Les pierres anciennes, gravées de runes, semblent être les gardiennes d'illusions visuelles, où chaque symbole reflète une histoire oubliée des artistes surréalistes. Ce lieu mystique, protégé par des créatures invisibles, inspire un voyage spirituel au-delà du monde physique, dans un espace où la tranquillité et l'émerveillement cohabitent.",
    image: "IMG_3003.webp",
    technique: "Posca",
    size: "24x30 cm",
    color: "#30180C",
    isSpinable: false,
    alt: "Sanctuaire Lunaire - Aquarelle d'un sanctuaire éclairé par la lumière de la lune dans une forêt mystique.",
    categories: [CATEGORIES.trees, CATEGORIES.illusions],
    isAvailable: true,
    price: 100,
  },
]

export const paintings: Product[] = artworks.map((artwork) => {
  const mainCategory = artwork.categories?.[0]
  const categoryLabel = (mainCategory && CATEGORY_LABELS[mainCategory]) ?? "Illusions"

  return {
    id: artwork.id,
    title: artwork.name,
    artist: "Barniak",
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
