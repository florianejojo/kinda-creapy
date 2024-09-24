"use client";
import { useState } from "react";
import Link from "next/link";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // Gère l'état du menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navStyle =
        " text-sm m-2 p-2 bg-gradient-to-t from-slate-950 via-black to-black text-white rounded-lg hover:bg-gradient-to-t hover:from-slate-950 hover:via-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer text-center"; // Style pour les liens

    return (
        <div className="relative">
            {/* Burger icon */}
            <button
                className="text-white bg-black px-4 py-2 rounded-lg focus:outline-none"
                onClick={toggleMenu}
            >
                {/* Icone du burger */}
                <div className="space-y-1">
                    <div className="w-6 h-0.5 lh bg-white"></div>
                    <div className="w-6 h-0.5 lh bg-white"></div>
                    <div className="w-6 h-0.5 lh bg-white"></div>
                </div>
            </button>

            {/* Menu déroulant */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48  rounded-lg shadow-lg bg-slate-900 z-20 flex flex-col">
                    <Link href="/artist" className={navStyle}>
                        ARTISTE
                    </Link>
                    <Link href="/shop" className={navStyle}>
                        SHOP
                    </Link>
                    <Link href="/contact" className={navStyle}>
                        CONTACTER
                    </Link>
                </div>
            )}
        </div>
    );
};
