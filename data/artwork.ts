export type Artwork = {
    id: number;
    title: string;
    description: string;
    image: string;
    technique: string;
    size: string; // @todo change
};

export const artworks: Artwork[] = [
    {
        id: 1,
        title: "Ouroboros Mystique",
        description:
            "L'Ouroboros, un symbole d'éternité et de cyclicité, serpente à travers une forêt mystique. Les arbres, enveloppés de brume, semblent chuchoter des secrets anciens. À chaque pas, le sol résonne d'un murmure presque inaudible, rappelant que la fin est toujours un nouveau commencement. Cet environnement enchanté invite les visiteurs à réfléchir sur le cycle sans fin de la vie, de la mort et de la renaissance, tout en étant captivés par la beauté et la sérénité de la nature qui les entoure.",
        image: "/images/oeuvres/orobouros.webp",
        technique: "Peinture à l'huile",
        size: "100x100 cm",
    },
    {
        id: 2,
        title: "Sanctuaire Lunaire",
        description:
            "Au cœur de la nuit, un sanctuaire sacré s'illumine sous la douce lumière de la lune. Ce refuge, caché aux yeux du monde, est un havre de paix pour les âmes en quête de réconfort. Les pierres anciennes qui composent le sanctuaire sont gravées de runes mystérieuses, témoignant des rituels ésotériques qui y étaient autrefois pratiqués. La lumière argentée de la lune danse sur les surfaces, créant un spectacle éthéré qui inspire à la fois tranquillité et admiration. Ici, le temps semble s'arrêter, permettant à chacun de se reconnecter à son essence spirituelle.",
        image: "/images/oeuvres/IMG_3003.webp",
        technique: "Aquarelle",
        size: "80x60 cm",
    },
    // {
    //     id: 3,
    //     title: "Feu Sacré",
    //     description:
    //         "Dans les profondeurs d'une clairière sombre, un feu sacré brûle avec une intensité mystique. Les flammes, d'un bleu profond, éclairent les visages des anciens qui se rassemblent autour, leurs yeux reflétant des siècles de sagesse et de secrets. Ce feu n'est pas seulement une source de chaleur, mais un portail vers le royaume des esprits. Chaque crépitement raconte une histoire de bravoure, de sacrifice et de connexion spirituelle. Les ombres dansantes forment des figures énigmatiques, rappelant à ceux qui regardent que la lumière et l'obscurité sont deux faces d'une même pièce.",
    //     image: "/images/oeuvres/IMG_3004.webp",
    //     technique: "Gouache",
    //     size: "70x70 cm",
    // },
    {
        id: 4,
        title: "Sentier des Astres",
        description:
            "Un sentier sinueux, éclairé par les constellations, guide les voyageurs à travers la nuit céleste. Ce chemin, souvent visible uniquement aux rêveurs et aux visionnaires, est pavé de pierres luminescentes qui brillent sous les pieds. Chaque étoile au-dessus semble chuchoter des secrets anciens, guidant les âmes perdues vers leur destinée. En parcourant ce sentier, on se sent enveloppé par l'immensité de l'univers, chaque pas résonnant avec les battements de cœur des étoiles. Le voyage est à la fois introspectif et expansif, rappelant la connexion entre le microcosme et le macrocosme.",
        image: "/images/oeuvres/IMG_3237.webp",
        technique: "Pastel",
        size: "50x70 cm",
    },
    {
        id: 5,
        title: "Cachot des Esprits",
        description:
            "Au plus profond des bois, un cachot oublié abrite les esprits des anciens gardiens de la forêt. Ce lieu sombre et humide est imprégné d'une énergie palpable, où chaque pierre semble respirer la mémoire des âmes qui y résident. Les murs, couverts de mousse et de lierre, murmurent des incantations oubliées. Les esprits, bienveillants mais puissants, protègent ce sanctuaire des intrus. En s'aventurant dans ce cachot, on ressent une connexion profonde avec les forces de la nature, une invitation à respecter et à honorer les anciens.",
        image: "/images/oeuvres/IMG_3846.webp",
        technique: "Encre",
        size: "60x90 cm",
    },
    {
        id: 6,
        title: "Temple du Suréel",
        description:
            "Perché sur une colline enveloppée de brouillard, le Temple du Suréel émerge comme un bastion de mystères ésotériques. Ce lieu sacré, construit avec des pierres scintillantes, reflète la lumière des astres, créant un spectacle hypnotique. À l'intérieur, des fresques anciennes racontent des histoires de dieux oubliés et de créatures mythiques. Les visiteurs sont souvent pris dans un état de transe, leurs esprits voyageant entre les dimensions. Chaque coin du temple recèle des secrets, attendant d'être découverts par ceux qui osent explorer ses profondeurs.",
        image: "/images/oeuvres/IMG_4784.webp",
        technique: "Acrylique",
        size: "90x120 cm",
    },
    // {
    //     id: 7,
    //     title: "Crépuscule Enchanté",
    //     description:
    //         "À l'heure où le jour cède la place à la nuit, la forêt se transforme en un royaume enchanté. Le crépuscule enveloppe les arbres d'une lumière dorée, tandis que des créatures mystiques commencent à émerger de leurs cachettes. Des fées lumineuses dansent autour des fleurs, et des esprits de la forêt murmurent des contes anciens. Cette heure magique, où la réalité et la fantaisie se confondent, invite chacun à se perdre dans la beauté et la sérénité du moment. Les couleurs du ciel, changeantes et vibrantes, peignent un tableau de pure merveille.",
    //     image: "/images/oeuvres/IMG_4802.webp",
    //     technique: "Fusain",
    //     size: "80x100 cm",
    // },
    {
        id: 8,
        title: "Forêt des Chimères",
        description:
            "La Forêt des Chimères est un lieu où les frontières entre le réel et l'imaginaire s'estompent. Les arbres, imposants et anciens, abritent des créatures fantastiques qui ne peuvent être vues qu'à la lueur de la lune. Les chimères, avec leurs formes hybrides et leurs pouvoirs mystiques, errent librement, protégeant la forêt de tout mal. Les visiteurs de ce lieu sont souvent pris dans des visions oniriques, chaque pas révélant de nouvelles merveilles et des mystères cachés. La forêt elle-même semble être vivante, respirant et observant ceux qui osent s'aventurer en son sein.",
        image: "/images/oeuvres/IMG_4811.webp",
        technique: "Peinture numérique",
        size: "100x150 cm",
    },
    {
        id: 9,
        title: "Rite Occulte",
        description:
            "Sous un ciel étoilé, un cercle d'initiés se rassemble pour un rite occulte. Les constellations au-dessus semblent veiller sur eux, leurs lumières formant des motifs sacrés. Les chants et les incantations résonnent dans l'air, créant une énergie vibrante qui enveloppe le groupe. Ce rituel, transmis de génération en génération, est une communion avec les forces cosmiques, une tentative de comprendre et de canaliser le pouvoir des astres. Les participants, en transe, sont transportés dans des dimensions supérieures, explorant les mystères de l'univers.",
        image: "/images/oeuvres/IMG_4919.webp",
        technique: "Gravure",
        size: "70x110 cm",
    },
    {
        id: 10,
        title: "Vortex Céleste",
        description:
            "Un vortex d'énergie céleste tourbillonne au centre de l'univers, attirant à lui étoiles et planètes. Ce phénomène cosmique, à la fois magnifique et terrifiant, est une manifestation du pouvoir brut de l'espace. Les astronomes et les mystiques se rassemblent pour observer ce spectacle, espérant entrevoir les secrets du cosmos. Chaque rotation du vortex révèle des éclats de lumière et des ombres profondes, un ballet éternel de création et de destruction. Le Vortex Céleste est un rappel de la grandeur et du mystère de l'univers, une invitation à explorer l'inconnu.",
        image: "/images/oeuvres/IMG_4930.webp",
        technique: "Peinture en spray",
        size: "100x100 cm",
    },
    {
        id: 11,
        title: "Gardien des Ombres",
        description:
            "Dans les recoins les plus sombres de la forêt, un Gardien des Ombres veille. Cette créature mythique, mi-homme, mi-bête, est le protecteur des secrets et des anciens rituels. Ses yeux, brillants comme des étoiles, scrutent l'obscurité à la recherche de toute menace. Les voyageurs égarés ressentent souvent une présence avant de le voir, un sentiment d'être observé et protégé. Le Gardien des Ombres incarne la dualité de la lumière et des ténèbres, une figure imposante qui rappelle que la nuit est aussi pleine de vie que le jour.",
        image: "/images/oeuvres/IMG_4939.webp",
        technique: "Encre et lavis",
        size: "50x70 cm",
    },
    {
        id: 12,
        title: "Éveil Astral",
        description:
            "Un voyage spirituel à travers les sphères astrales commence par l'Éveil Astral. Les méditants, allongés sur un cercle de pierres anciennes, ressentent leur âme se détacher doucement de leur corps. Ils sont transportés à travers les étoiles, visitant des planètes lointaines et des mondes invisibles. Chaque étape du voyage est une leçon, une révélation des mystères de l'existence. L'Éveil Astral est une quête de connaissance et de compréhension, une exploration de l'infini qui lie chaque être à l'univers. À leur retour, les voyageurs rapportent des visions et des sagesses qui changent à jamais leur perception du monde.",
        image: "/images/oeuvres/IMG_4942.webp",
        technique: "Aquarelle et encre",
        size: "60x80 cm",
    },
];
