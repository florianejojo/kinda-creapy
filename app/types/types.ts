//** types */
// export type NavItem = {
//     [key in PATHS]: { name: string; description: string };
// };

export type NavItem = { name: string; description?: string; path?: PATHS };
export enum CATEGORIES {
    trees = "Arbres",
    beasts = "Bestiaires",
    illusions = "Illusions",
}

//** enums */
export enum PATHS {
    home = "home",
    trees = CATEGORIES.trees,
    beasts = CATEGORIES.beasts,
    illusions = CATEGORIES.illusions,
    curriculum = "curriculum",
    inspirations = "inspirations",
    contact = "contact",
}

