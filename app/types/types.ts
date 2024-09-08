//** types */
// export type NavItem = {
//     [key in PATHS]: { name: string; description: string };
// };

export type NavItem = { name: string; description?: string, path? : PATHS };

//** enums */
export enum PATHS {
    home = "/home",
    curriculum = "/curriculum",
    inspirations = "/inspirations",
    contact = "/contact",
}

export enum CATEGORIES {
    trees = "Arbres",
    beasts = "Bestiaires",
    illusions = "Illusions",
}
