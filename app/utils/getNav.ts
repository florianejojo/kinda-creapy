import { NavItem, PATHS } from "@/app/types/types";
import { categories } from "@/data/categories";

export const getNav = (pathname: PATHS): NavItem[] => {
    switch (pathname) {
        case PATHS.home:
            return Object.values(categories);

        default:
            return [];
    }
};
