import { PATHS } from "@/app/types/types";
import { useState } from "react";

export const useHeaderViewModel = () => {
     const [isOpen, setIsOpen] = useState(false)

  const otherNavLinks = [
    { label: "Boutique", href: PATHS.gallery },
    // { label: "À propos", href: "/about" },
    // { label: "Contact", href: "/contact" },
  ]
    
    return {
        isOpen,
        setIsOpen,
        homeNavLink : { label: "Accueil", href: PATHS.home },
        otherNavLinks,
    };
}