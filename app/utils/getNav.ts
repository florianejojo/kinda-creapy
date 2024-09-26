import { NavItem, PATHS } from "@/app/types/types";
import { categories } from "@/data/categories";

export const getNav = (pathname: PATHS): NavItem[] => {
    switch (pathname) {
        case PATHS.home:
            return Object.values(categories);
        case PATHS.curriculum:
        case PATHS.inspirations:
        case PATHS.contact:
            return [
                {
                    name: "l'homme",
                    path: PATHS.curriculum,
                },
                {
                    name: "Ses amours",
                    path: PATHS.inspirations,
                },
                {
                    name: "Contact",
                    path: PATHS.contact,
                },
            ];

        default:
            return [];
    }
};
