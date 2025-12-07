import { ArtPiece, CATEGORIES, Category, Locale, PageKey, PATHS } from "@/app/_shared/shared.types"
import { getDefaultPrices } from "@/app/_shared/utils/getPrices"
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
  [Category.illusions]:
    "Explorations visuelles où la réalité se dissout. Chaque toile joue avec la perception, invitant le spectateur à questionner ce qu'il voit. Une danse entre abstraction et représentation, où les formes flottent entre présence et absence.",

  [Category.beasts]:
    "Un recueil d'êtres réels et imaginaires. Ces créatures peuplent mes mondes, chacune portant sa propre histoire. Du cosmos aux profondeurs de la nature, elles révèlent les mystères cachés de notre monde.",

  [Category.trees]:
    "Les arbres sont les gardiens de mondes anciens et futurs. Chaque peinture dans cette série révèle un aspect différent de ces créatures vivantes, du sage au mystérieux, de l'accueillant au secret.",
  [Category.all]: "",
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
    isAvailable: true,
  },
  {
    id: "SNW021MX03",
    name: "Crépuscule Rouge",
    description:
      "Un paysage abstrait baigné dans des tons rouges et sombres, évoquant la fin d'une journée mystérieuse et la naissance de la nuit.",
    image: "SNW021MX03.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Paysage abstrait avec des teintes rouges profondes.",
    categories: [CATEGORIES.illusions],
    isAvailable: false,
  },

  {
    id: "18",
    name: "Génith",
    description:
      "Dans une explosion de lumière et de couleur, des figures mythologiques se battent pour la domination de l'univers. L'Apothéose de la Fureur est une œuvre qui capture la tension dramatique entre la création et la destruction, où chaque coup porté est une nouvelle explosion de couleur.",
    image: "IMG_5814.webp",
    technique: "Peinture à l'huile",
    size: "24x30",
    color: "#D93A27",
    isSpinable: false,
    alt: "Génith - Peinture représentant une bataille mythologique sous une explosion de lumière.",
    categories: [CATEGORIES.beasts, CATEGORIES.illusions],
    isAvailable: true,
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
  },

  {
    id: "SNW021MX07",
    name: "Réveil de la Terre",
    description:
      "Un paysage abstrait et texturé où la terre semble s'animer sous une explosion de couleurs terreuses et nuageuses.",
    image: "SNW021MX07.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Paysage abstrait avec des textures terreuses et nuageuses.",
    categories: [CATEGORIES.illusions],
    isAvailable: true,
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
  },

  {
    id: "SNW021MX11",
    name: "Fragmentation du Corps",
    description:
      "Des formes corporelles fragmentées se dispersent dans un paysage sombre, symbolisant la désintégration et la reconstruction à travers le temps.",
    image: "SNW021MX11.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Formes corporelles abstraites se fragmentant dans un paysage sombre.",
    categories: [CATEGORIES.illusions],
    isAvailable: false,
  },

  {
    id: "SCNW021MX09",
    name: "Cloison de Souvenirs",
    description:
      "Des fragments de souvenirs sont encapsulés dans une cloison abstraite, où des couches de couleurs métalliques et de textures superposées racontent une histoire oubliée.",
    image: "SCNW021MX09.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Cloison abstraite avec des textures métalliques et des couleurs superposées.",
    categories: [CATEGORIES.illusions],
    isAvailable: true,
  },

  {
    id: "11",
    name: "Gardien des Ombres",
    description:
      "Dans les profondeurs d'une forêt mystique, le Gardien des Ombres veille sur les secrets anciens. Mi-homme, mi-bête, cette créature protège les âmes perdues et les anciens rituels. Ses yeux, comme des étoiles, éclairent le chemin des voyageurs qui s'égarent dans ce labyrinthe de mystère et d'illusions. Le Gardien est un symbole du surréalisme, une figure qui incarne la dualité de l'existence et la beauté cachée dans les ombres.",
    image: "IMG_4939.webp",
    technique: "Cire - Peinture mixte",
    size: "60x60 cm",
    color: "#875D57",
    isSpinable: false,
    alt: "Gardien des Ombres - Encre et lavis représentant une créature mi-homme mi-bête dans une forêt mystique.",
    categories: [CATEGORIES.beasts, CATEGORIES.illusions],
    isAvailable: false,
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
  },

  {
    id: "17",
    name: "Artémis",
    description:
      "Un totem imposant se dresse au milieu d'un paysage désertique, ses formes abstraites racontant les histoires des anciens. Chaque détail du totem représente une génération disparue, un souvenir gravé dans la pierre. Le Totem des Ancêtres est une œuvre qui questionne la mémoire et l'héritage, dans un style visuel riche en symboles.",
    image: "IMG_5812.webp",
    technique: "Peinture à l'huile",
    size: "24x30",
    color: "#003466",
    isSpinable: false,
    alt: "Artémis -",
    categories: [CATEGORIES.beasts, CATEGORIES.illusions],
    isAvailable: true,
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
  },

  {
    id: "SLNW021MX04",
    name: "Fusion Terrestre",
    description:
      "Un paysage surréaliste où les couches de terre rouge et les masses d'eau bleue se fondent dans un tourbillon abstrait de textures et de mouvements.",
    image: "SLNW021MX04.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Paysage abstrait de terre rouge et eau bleue en fusion.",
    categories: [CATEGORIES.illusions],
    isAvailable: true,
  },
  {
    id: "16",
    name: "Arbre sorcier II",
    description:
      "Les racines d'un arbre millénaire se mêlent aux constellations dans une danse cosmique. Cette œuvre symbolise l'interconnexion entre la terre et le ciel, où les formes terrestres s'élèvent pour se fondre dans l'infini cosmique. Une fusion de la nature et du mystique, dans un style onirique et captivant.",
    image: "IMG_5809.webp",
    technique: "Peinture à l'huile",
    size: "24x30",
    color: "#4A3436",
    isSpinable: false,
    alt: "Arbre sorcier II - Peinture représentant un arbre dansant avec les étoiles dans un ciel cosmique.",
    categories: [CATEGORIES.trees, CATEGORIES.illusions],
    isAvailable: true,
  },
  {
    id: "SLNW021MX08",
    name: "Mouvement Sombre",
    description:
      "Un ensemble de textures sombres et denses créent une sensation de profondeur et de mystère, où l'obscurité rencontre des touches de lumière.",
    image: "SLNW021MX08.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Textures sombres et denses avec des éclats de lumière.",
    categories: [CATEGORIES.illusions],
    isAvailable: false,
  },

  {
    id: "SLNW021MX12",
    name: "Tempête des Ombres",
    description:
      "Un ciel menaçant roule au-dessus d'un paysage rougeoyant, capturant la puissance brute de la nature dans une tempête imminente.",
    image: "SLNW021MX12.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Paysage avec un ciel menaçant au-dessus de terres rouges.",
    categories: [CATEGORIES.illusions],
    isAvailable: true,
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
  },
  {
    id: "SNW021MX02",
    name: "Collision d'Étoiles",
    description:
      "Des formes entrelacées de lumière et d'ombre évoquant une collision cosmique, avec des textures complexes qui donnent une sensation de profondeur.",
    image: "SNW021MX02.webp",
    technique: "Techniques mixtes",
    size: "50x40 cm",
    alt: "Explosion de formes lumineuses et sombres dans une scène cosmique.",
    categories: [CATEGORIES.illusions],
    isAvailable: false,
  },

  {
    id: "4",
    name: "Estom avaloar ou Seigneur de la surabondance",
    description:
      "Un sentier céleste, guidé par les constellations, traverse une forêt d'illusions visuelles. Ce chemin, souvent emprunté par les rêveurs et les artistes surréalistes, reflète la beauté mystérieuse du cosmos. Chaque pas sur ce sentier mène plus loin dans un monde de fractales et de visions mystiques, où le réel et l'imaginaire se fondent pour révéler la grandeur infinie de l'univers. Ce parcours invite à une exploration profonde de l'inconscient collectif.",
    image: "IMG_3237.webp",
    technique: "Posca",
    size: "25x25 cm",
    color: "#381314",
    isSpinable: false,
    alt: "Sentier des Astres - ",
    categories: [CATEGORIES.beasts, CATEGORIES.illusions],
    isAvailable: true,
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
    prices: getDefaultPrices(artwork.size),
  }
})
