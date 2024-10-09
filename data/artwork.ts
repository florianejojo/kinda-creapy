import { CATEGORIES } from "@/app/types/types";

export type ArtPiece = {
    id: string;
    name: string;
    description: string;
    image: string;
    technique: string;
    size: string;
    color?: string;
    isSpinable?: boolean;
    alt: string;
    categories: CATEGORIES[];
};

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
        categories: [CATEGORIES.illusions],
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
        categories: [CATEGORIES.beasts],
    },
    // {
    //     id: 8,
    //     name: "Forêt des Chimères",
    //     description:
    //         "Dans la Forêt des Chimères, les illusions visuelles et les créatures fantastiques règnent en maîtres. Cette forêt, empreinte de mysticisme, abrite des arbres qui murmurent des contes anciens et des chimères qui errent sous le clair de lune. À chaque coin de cette forêt enchantée, des scènes surréalistes se dévoilent, mêlant rêve et réalité dans un ballet hypnotique de formes et de couleurs. Cette œuvre capture l'essence du mystique et du surréaliste, une invitation à explorer l'inconnu.",
    //     image: "IMG_4811.webp",
    //     technique: "Bic - dessin automatique",
    //     size: "21x30 cm",
    //     color: "#272424",
    //     isSpinable: false,
    //     alt: "Forêt des Chimères - Dessin automatique.",
    //     categories: [CATEGORIES.trees],
    // },
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
        categories: [CATEGORIES.illusions],
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
    },
    // {
    //     id: 6,
    //     name: "Temple du Suréel - Série de 111",
    //     description:
    //         "Perché sur une colline mystique, le Temple du Suréel est un sanctuaire d'artistes surréalistes et d'illusions visuelles. Les murs, recouverts de fresques fractales, racontent des histoires de créatures mystiques et de dieux oubliés. Ce temple, baigné dans une lumière dorée, transporte les visiteurs dans un autre monde, où le surréalisme se confond avec la réalité. Chaque recoin de cet endroit sacré offre une nouvelle perspective sur les mystères de l'existence.",
    //     image: "IMG_4784.webp",
    //     technique: "Bic - Dessin automatique",
    //     size: "90x120 cm",
    //     color: "#3F0000",
    //     isSpinable: false,
    //     alt: "Temple du Suréel - Acrylique d'un temple mystique sur une colline baignée de lumière dorée.",
    //     categories: [CATEGORIES.trees],
    // },

    // {
    //     id: 9,
    //     name: "Rite Occulte",
    //     description:
    //         "Sous les constellations, un cercle d'artistes surréalistes s'assemble pour un rite occulte. Les étoiles au-dessus créent des illusions visuelles fascinantes, guidant les initiés dans une danse mystique. Les chants résonnent dans la nuit, attirant les créatures de la forêt pour une communion sacrée. Ce rituel, ancré dans la tradition des anciens, est une célébration des forces cosmiques, un hommage à la beauté fractale de l'univers.",
    //     image: "IMG_4919.webp",
    //     technique: "Technique mixte",
    //     size: "42x29,7 cm",
    //     color: "#272424",
    //     isSpinable: false,
    //     alt: "Rite Occulte - Gravure représentant un cercle d'artistes surréalistes sous un ciel étoilé.",
    //     categories: [CATEGORIES.trees],
    // },
    // {
    //     id: 10,
    //     name: "Éveil Astral",
    //     description:
    //         "Un voyage au cœur du mystique commence par l'Éveil Astral. Les méditants, allongés sur des pierres anciennes, se détachent de leur enveloppe terrestre pour explorer les secrets du cosmos. Les illusions visuelles créées lors de cet éveil révèlent des mondes cachés et des vérités profondes sur l'univers. Cette œuvre, ancrée dans la tradition surréaliste, est une invitation à explorer les frontières de la réalité et de l'imaginaire, un appel à découvrir les mystères de l'existence.",
    //     image: "IMG_4942.webp",
    //     technique: "Cire - Peinture mixte",
    //     size: "120x40 cm",
    //     color: "#673532",
    //     isSpinable: false,
    //     alt: "Éveil Astral - Aquarelle et encre représentant des méditants explorant les secrets du cosmos.",
    //     categories: [CATEGORIES.illusions],
    // },

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
        categories: [CATEGORIES.beasts],
    },
    // {
    //     id: 12,
    //     name: "Souffle des Abîmes",
    //     description:
    //         "Une plongée dans les profondeurs d'un abîme insondable, où des formes surréalistes se tordent et se mêlent dans une danse étrange. Cet endroit, loin de tout éclairage naturel, est habité par des créatures primordiales et des ombres vivantes. Le Souffle des Abîmes est une œuvre qui explore les peurs les plus anciennes de l'humanité, tout en offrant un spectacle visuel captivant.",
    //     image: "IMG_4950.webp",
    //     technique: "Acrylique - Peinture texturisée",
    //     size: "3264x1764",
    //     color: "#0A0A0A",
    //     isSpinable: false,
    //     alt: "Souffle des Abîmes - Peinture représentant les profondeurs sombres et surréalistes d'un abîme.",
    //     categories: [CATEGORIES.illusions, CATEGORIES.beasts],
    // },
    {
        id: "13",
        name: "Banquet à la Madone",
        description:
            "Les entités primordiales s'embrassent dans une étreinte chaotique, mélangeant destruction et création. Ce baiser, symbole de dualité, incarne la force créatrice du chaos dans l'univers. Une œuvre riche en détails, où chaque forme semble être en mouvement perpétuel, unissant les contraires pour former une harmonie surréaliste.",
        image: "IMG_5506.webp",
        technique: "Recouvrement - Technique mixte",
        size: "90x70",
        color: "#6A3326",
        isSpinable: false,
        alt: "Banquet à la Madonne - Peinture détaillant une scène de chaos cosmique et d'étreinte surréaliste.",
        categories: [CATEGORIES.beasts],
    },
    {
        id: "14",
        name: "Cascade de montagne",
        description: "",
        image: "IMG_5509.webp",
        technique: "Feu - Cire - Peinture à l'huile",
        size: "100x80",
        color: "#880000",
        isSpinable: false,
        alt: "Cascade de montagne - Peinture mettant en scène une cascade dans paysage abstrait et surréaliste.",
        categories: [CATEGORIES.illusions],
    },
    // {
    //     id: 15,
    //     name: "Chants du Bosquet Étoilé",
    //     description:
    //         "Un bosquet enchanté, illuminé par des étoiles lointaines. Les arbres semblent chanter et vibrer sous la lumière cosmique, créant une symphonie de formes et de couleurs. Cette œuvre capture la beauté mystique de la nature, fusionnée avec l'infini du cosmos, dans un style typiquement surréaliste.",
    //     image: "IMG_5511.webp",
    //     technique: "Encre - Lavis",
    //     size: "2530x3169",
    //     color: "#243245",
    //     isSpinable: false,
    //     alt: "Chants du Bosquet Étoilé - Illustration représentant un bosquet mystique illuminé par des étoiles.",
    //     categories: [CATEGORIES.trees, CATEGORIES.illusions],
    // },
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
        categories: [CATEGORIES.trees],
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
        categories: [CATEGORIES.beasts],
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
        categories: [CATEGORIES.beasts],
    },
    {
        id: "19",
        name: "Truqapattes",
        description:
            "Dans une mer de verdure, une graine mystérieuse semble vibrer d'une énergie inconnue. Cette œuvre symbolise la création et la fertilité, où la vie naît des ténèbres et grandit vers la lumière. La Graine de Vie est une métaphore du cycle de la vie, capturée dans une vision surréaliste.",
        image: "IMG_5815.webp",
        technique: "Peinture à l'huile - Acrylique",
        size: "21x15",
        color: "#197F37",
        isSpinable: false,
        alt: "Truqapattes -",
        categories: [CATEGORIES.beasts],
    },

    // {
    //     id: 10,
    //     name: "Vortex Céleste",
    //     description:
    //         "Au centre de l'univers, un vortex céleste capte l'attention des artistes et des mystiques. Ce phénomène cosmique, à la fois puissant et hypnotique, est une manifestation parfaite de l'art surréaliste. Les illusions visuelles créées par le vortex dévoilent des formes fractales qui évoluent sans cesse, invitant les spectateurs à plonger dans un monde où les limites entre le réel et l'imaginaire s'effacent. Cette œuvre est une exploration de l'infini, une quête pour comprendre les mystères du cosmos.",
    //     image: "IMG_4930.webp",
    //     technique: "Feutre - aérosol",
    //     size: "50x50 cm",
    //     color: "#272424",
    //     isSpinable: false,
    //     alt: "Vortex Céleste - Peinture d'un vortex cosmique hypnotique.",
    //     categories: [CATEGORIES.illusions],
    // },
    // {
    //     id: "AB024B01",
    //     name: "Arbre des Âmes Captives",
    //     description:
    //         "Une représentation abstraite d'un arbre dont les racines semblent se tordre dans des mouvements fluides, symbolisant les âmes en transition.",
    //     image: "AB024B01.webp",
    //     technique: "Bic - Dessin automatique",
    //     size: "40x30 cm",
    //     alt: "Arbre abstrait aux racines torsadées, symbolisant des âmes en transition.",
    //     categories: [],
    // },
    {
        id: "AC024PK02",
        name: "Forêt des Visions",
        description:
            "Un paysage surréaliste où des visages semblent émerger d'une forêt de formes organiques, représentant des esprits perdus cherchant la lumière.",
        image: "AC024PK02.webp",
        technique: "Techniques mixtes",
        size: "50x40 cm",
        alt: "Paysage surréaliste avec des visages émergents dans une forêt mystique.",
        categories: [],
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
        categories: [],
    },
    // {
    //     id: "B001B01",
    //     name: "Porteurs de Mystères",
    //     description:
    //         "Des figures élancées traversent un paysage onirique, leurs silhouettes se fondant dans les illusions de la nuit.",
    //     image: "B001B01.webp",
    //     technique: "Techniques mixtes",
    //     size: "50x40 cm",
    //     alt: "Figures élancées dans un paysage surréaliste.",
    //     categories: [],
    // },
    // {
    //     id: "BL024B01",
    //     name: "Chant des Ombres",
    //     description:
    //         "Une forme humanoïde se dissout dans un tourbillon d'ombres, un chant silencieux résonnant dans le vide.",
    //     image: "BL024B01.webp",
    //     technique: "Bic - Dessin automatique",
    //     size: "40x30 cm",
    //     alt: "Silhouette humanoïde se dissolvant dans des ombres tourbillonnantes.",
    //     categories: [],
    // },
    // {
    //     id: "BL024B02",
    //     name: "Rituel des Brumes",
    //     description:
    //         "Une silhouette se fond dans un nuage de brumes sombres, évoquant un rituel ancien perdu dans le temps.",
    //     image: "BL024B02.webp",
    //     technique: "Bic - Techniques mixtes",
    //     size: "40x30 cm",
    //     alt: "Silhouette humanoïde dans un nuage de brumes sombres, symbolisant un rituel mystique.",
    //     categories: [],
    // },
    {
        id: "BL024B03",
        name: "Serment des Créatures",
        description:
            "Deux créatures hybrides s'affrontent dans une danse mystique, leurs formes se mélangeant dans une explosion de lignes.",
        image: "BL024B03.webp",
        technique: "Encre sur papier",
        size: "40x30 cm",
        alt: "Deux créatures hybrides dans une danse mystique.",
        categories: [],
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
        categories: [],
    },

    // {
    //     id: "C111018K006",
    //     name: "Courant Subtil",
    //     description:
    //         "Des vagues abstraites tourbillonnent dans un flux subtil de tons gris et blancs, laissant apparaître un rouge intense à la base, évoquant la force cachée sous la surface.",
    //     image: "C111018K006.webp",
    //     technique: "Peinture à l'huile",
    //     size: "50x40 cm",
    //     alt: "Vagues abstraites en gris et blanc avec un point rouge profond.",
    //     categories: [],
    // },
    {
        id: "IID019B01",
        name: "Conscience Cosmique",
        description:
            "Deux créatures énigmatiques se font face dans une symétrie parfaite, leurs esprits reliés par des motifs géométriques complexes représentant une connexion cosmique.",
        image: "IID019B01.webp",
        technique: "Encre sur papier",
        size: "40x30 cm",
        alt: "Deux figures symétriques reliées par des motifs géométriques complexes.",
        categories: [],
    },
    {
        id: "IID019B02",
        name: "Réflexions Fragmentées",
        description:
            "Des silhouettes brisées se regardent à travers une ligne de division nette, symbolisant la fracture entre l'identité et le reflet de soi.",
        image: "IID019B02.webp",
        technique: "Encre sur papier",
        size: "40x30 cm",
        alt: "Silhouettes fragmentées se regardant à travers une division nette.",
        categories: [],
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
        categories: [],
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
        categories: [],
    },
    // {
    //     id: "SLNW021MX10",
    //     name: "Éruption Éthérée",
    //     description:
    //         "Des explosions de lumière et de couleur jaillissent d'un fond obscur, créant une scène de chaos et de beauté surréalistes.",
    //     image: "SLNW021MX10.webp",
    //     technique: "Techniques mixtes",
    //     size: "50x40 cm",
    //     alt: "Éruption de lumière et de couleur sur un fond obscur.",
    //     categories: [],
    // },
    {
        id: "SLNW021MX12",
        name: "Tempête des Ombres",
        description:
            "Un ciel menaçant roule au-dessus d'un paysage rougeoyant, capturant la puissance brute de la nature dans une tempête imminente.",
        image: "SLNW021MX12.webp",
        technique: "Techniques mixtes",
        size: "50x40 cm",
        alt: "Paysage avec un ciel menaçant au-dessus de terres rouges.",
        categories: [],
    },
    // {
    //     id: "IID019B03",
    //     name: "Déchirure Symétrique",
    //     description:
    //         "Deux mondes s'effondrent l'un dans l'autre à travers une déchirure symétrique, révélant des formes chaotiques s'entremêlant de chaque côté.",
    //     image: "IID019B03.webp",
    //     technique: "Encre sur papier",
    //     size: "40x30 cm",
    //     alt: "Deux côtés symétriques montrant des formes chaotiques se déchirant l'un l'autre.",
    //     categories: [],
    // },
    // {
    //     id: "IID019B04",
    //     name: "Révolte Circulaire",
    //     description:
    //         "Des cercles intrigants forment un motif central en contraste avec un motif chaotique de l'autre côté, symbolisant l'ordre et le chaos en perpétuelle interaction.",
    //     image: "IID019B04.webp",
    //     technique: "Encre sur papier",
    //     size: "40x30 cm",
    //     alt: "Cercles géométriques en opposition à des motifs chaotiques sur un fond bicolore.",
    //     categories: [],
    // },
    // {
    //     id: "IP024PK03",
    //     name: "Masques de l'Esprit",
    //     description:
    //         "Une série de masques colorés et expressifs, chacun révélant une émotion ou une facette différente de la psyché humaine dans un style surréaliste.",
    //     image: "IP024PK03.webp",
    //     technique: "Techniques mixtes",
    //     size: "50x40 cm",
    //     alt: "Divers masques colorés et expressifs disposés en cercle.",
    //     categories: [],
    // },
    // {
    //     id: "SCNW021MX05",
    //     name: "Tourment Céleste",
    //     description:
    //         "Un tourbillon de couleurs sombres et lumineuses, symbolisant un ciel tumultueux et un paysage en proie à une tempête intérieure.",
    //     image: "SCNW021MX05.webp",
    //     technique: "Techniques mixtes",
    //     size: "50x40 cm",
    //     alt: "Paysage abstrait avec des couleurs tourmentées et un ciel tumultueux.",
    //     categories: [],
    // },
    {
        id: "SNW021MX02",
        name: "Collision d'Étoiles",
        description:
            "Des formes entrelacées de lumière et d'ombre évoquant une collision cosmique, avec des textures complexes qui donnent une sensation de profondeur.",
        image: "SNW021MX02.webp",
        technique: "Techniques mixtes",
        size: "50x40 cm",
        alt: "Explosion de formes lumineuses et sombres dans une scène cosmique.",
        categories: [],
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
        categories: [],
    },
    {
        id: "SNW021MX06",
        name: "Filaments d'Énergie",
        description:
            "Des lignes vibrantes d'énergie orange et bleue se croisent dans un réseau dense, capturant la dynamique du mouvement et de la transformation.",
        image: "SNW021MX06.webp",
        technique: "Techniques mixtes",
        size: "50x40 cm",
        alt: "Lignes d'énergie orange et bleue entrelacées dans une composition complexe.",
        categories: [],
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
        categories: [],
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
        categories: [],
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
        categories: [],
    },
    // {
    //     id: "BK022P01",
    //     name: "Nabrok",
    //     description:
    //         "Une figure puissante aux jambes imposantes, inscrivant son nom sur le côté, dégage une énergie brute et primitive dans une palette de couleurs chaudes.",
    //     image: "BK022P01.webp",
    //     technique: "Techniques mixtes",
    //     size: "50x40 cm",
    //     alt: "Figure aux jambes imposantes avec l'inscription Nabrok sur le côté.",
    //     categories: [],
    // },
    // {
    //     id: "BL024B09",
    //     name: "Course Sanguine",
    //     description:
    //         "Un corps musclé et déchiré par l'effort traverse un tourbillon de lignes désordonnées, exprimant la vitesse et l'énergie intense de la course.",
    //     image: "BL024B09.webp",
    //     technique: "Bic - Dessin automatique",
    //     size: "40x30 cm",
    //     alt: "Figure humaine en pleine course entourée de lignes abstraites.",
    //     categories: [],
    // },
];
