import { Category } from "@/app/_shared/shared.enums"

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

export const paintings = [
  {
    id: 1,
    title: "Horizon Abstrait",
    artist: "Marie Dubois",
    category: "Illusions",
    images: [
      "/abstract-painting-blue-and-gold.jpg",
      "/abstract-art-modern-design.jpg",
      "/contemporary-abstract-painting.jpg",
    ],
    dimensions: "120 × 80 cm",
    description:
      "Une composition abstraite mêlant teintes bleutées et dorées, créant une atmosphère méditative et intemporelle.",
    available: true,
    prices: {
      original: 2500,
      printXXL: 450,
      printA3: 120,
      printA5: 30,
    },
  },
  {
    id: 2,
    title: "Paysage Automnal",
    artist: "Marie Dubois",
    category: "Bestiaires",
    images: [
      "/autumn-landscape-painting-fall-colors.jpg",
      "/landscape-oil-painting-nature.jpg",
      "/impressionist-autumn-painting.jpg",
    ],
    dimensions: "100 × 70 cm",
    description:
      "Capturer l'essence dorée de l'automne avec des touches de peinture expressives et chaleureuses.",
    available: true,
    prices: {
      original: 1800,
      printXXL: 380,
      printA3: 100,
      printA5: 25,
    },
  },
  {
    id: 3,
    title: "Reflets Urbains",
    artist: "Marie Dubois",
    category: "Arbres",
    images: [
      "/urban-abstract-city-lights.jpg",
      "/modern-city-painting-street-art.jpg",
      "/abstract-urban-landscape.jpg",
    ],
    dimensions: "90 × 120 cm",
    description:
      "Les couleurs vives de la ville se reflètent dans cette composition urbaine dynamique et contemporaine.",
    available: false,
    prices: {
      original: 0,
      printXXL: 420,
      printA3: 110,
      printA5: 28,
    },
  },
  {
    id: 4,
    title: "Fleurs de Cerisier",
    artist: "Marie Dubois",
    category: "Illusions",
    images: [
      "/cherry-blossom-painting-flowers-pink.jpg",
      "/floral-art-painting-botanical.jpg",
      "/watercolor-flowers-spring.jpg",
    ],
    dimensions: "80 × 100 cm",
    description:
      "Une célébration délicate des fleurs de cerisier, mêlant technique traditionnelle et touches modernes.",
    available: true,
    prices: {
      original: 2200,
      printXXL: 400,
      printA3: 105,
      printA5: 26,
    },
  },
  {
    id: 5,
    title: "Nuit Étoilée II",
    artist: "Marie Dubois",
    category: "Bestiaires",
    images: [
      "/starry-night-painting-dark-blue-sky.jpg",
      "/night-sky-stars-painting.jpg",
      "/celestial-painting-universe.jpg",
    ],
    dimensions: "110 × 80 cm",
    description:
      "Un voyage cosmique entre rêve et réalité, où les étoiles dansent sur un ciel profond et mystérieux.",
    available: true,
    prices: {
      original: 1950,
      printXXL: 390,
      printA3: 115,
      printA5: 29,
    },
  },
  {
    id: 6,
    title: "Géométrie Minimaliste",
    artist: "Marie Dubois",
    category: "Arbres",
    images: ["/minimal-geometric-shapes.png", "/geometric-abstract.png", "/minimalist-design.png"],
    dimensions: "70 × 70 cm",
    description:
      "Formes pures et lignes épurées créant une harmonie parfaite entre espace et couleur.",
    available: true,
    prices: {
      original: 1600,
      printXXL: 350,
      printA3: 95,
      printA5: 24,
    },
  },
  {
    id: 7,
    title: "Chimère Nocturne",
    artist: "Barniak",
    category: "Bestiaires",
    images: [
      "/dark-creature-painting-mysterious.jpg",
      "/gothic-beast-abstract.jpg",
      "/shadowy-figure-dark-art.jpg",
    ],
    dimensions: "130 × 100 cm",
    description:
      "Une créature énigmatique émergeant de l'obscurité, mêlant formes organiques et abstraites. La chimère incarne les peurs primales et les transformations impossibles.",
    available: true,
    prices: {
      original: 3200,
      printXXL: 520,
      printA3: 140,
      printA5: 35,
    },
  },
  {
    id: 8,
    title: "Arbre Gardien",
    artist: "Barniak",
    category: "Arbres",
    images: [
      "/ancient-tree-dark-forest.jpg",
      "/mystical-tree-painting-dark.jpg",
      "/gnarled-tree-gothic-art.jpg",
    ],
    dimensions: "140 × 110 cm",
    description:
      "Un arbre ancien veillant sur des mondes oubliés. Ses branches tordues racontent mille histoires sombres et fascinantes.",
    available: true,
    prices: {
      original: 2800,
      printXXL: 480,
      printA3: 130,
      printA5: 32,
    },
  },
  {
    id: 9,
    title: "Illusion Fractale",
    artist: "Barniak",
    category: "Illusions",
    images: [
      "/fractal-illusion-dark-pattern.jpg",
      "/hypnotic-geometric-pattern.jpg",
      "/infinite-loop-abstract.jpg",
    ],
    dimensions: "100 × 100 cm",
    description:
      "Formes géométriques infinies créant une tension optique. L'œil se perd dans les motifs répétitifs qui semblent bouger et se transformer.",
    available: false,
    prices: {
      original: 0,
      printXXL: 450,
      printA3: 120,
      printA5: 30,
    },
  },
  {
    id: 10,
    title: "Symphonie Chromique",
    artist: "Violoncel",
    category: "Illusions",
    images: [
      "/colorful-abstract-symphony.jpg",
      "/harmonic-color-waves.jpg",
      "/luminous-abstract-composition.jpg",
    ],
    dimensions: "120 × 90 cm",
    description:
      "Une explosion de couleurs organisées comme une partition musicale. Chaque teinte résonne avec l'autre, créant une harmonie visuelle vibrante.",
    available: true,
    prices: {
      original: 2400,
      printXXL: 420,
      printA3: 115,
      printA5: 28,
    },
  },
  {
    id: 11,
    title: "Bestiaire Mélodique",
    artist: "Violoncel",
    category: "Bestiaires",
    images: [
      "/ethereal-creatures-luminous.jpg",
      "/musical-beings-abstract-art.jpg",
      "/creatures-of-harmony.jpg",
    ],
    dimensions: "110 × 140 cm",
    description:
      "Des créatures imaginaires flottant dans une harmonie chromatique. Chaque être respire une tonalité différente, créant ensemble une symphonie visuelle.",
    available: true,
    prices: {
      original: 2700,
      printXXL: 480,
      printA3: 125,
      printA5: 32,
    },
  },
  {
    id: 12,
    title: "Arbre en Accord",
    artist: "Violoncel",
    category: "Arbres",
    images: [
      "/melodic-tree-luminous.jpg",
      "/resonant-tree-painting.jpg",
      "/harmonic-forest-abstract.jpg",
    ],
    dimensions: "100 × 130 cm",
    description:
      "Un arbre dont les branches s'élèvent comme des notes de musique. Ses racines descendent dans les basses fréquences tandis que sa couronne danse dans les aigus.",
    available: true,
    prices: {
      original: 2300,
      printXXL: 410,
      printA3: 110,
      printA5: 27,
    },
  },
]
