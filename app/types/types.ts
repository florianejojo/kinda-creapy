export type NavItem = { name: string; description?: string; path?: PATHS };

export enum CATEGORIES {
    trees = "Arbres",
    beasts = "Bestiaires",
    illusions = "Illusions",
}

//** enums */
export enum PATHS {
    home = "/home",
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

export const HEADER_TITLE = {
    [PATHS.home]: "KINDA CREAPY",
    [PATHS.artist]: "R. VERROEULST",
    [PATHS.shop]: "KINDA CREAPY",
    [PATHS.gallery]: "Gallery",
};
