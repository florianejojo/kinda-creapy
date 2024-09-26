"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDog,
    faPalette,
    faShop,
    faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // Gère l'état du menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navStyle =
        "text-sm m-0.5 p-2 bg-gradient-to-t from-slate-950 via-black to-black text-white rounded-lg hover:bg-gradient-to-t hover:from-slate-950 hover:via-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer text-center max-w-fit"; // Style pour les liens

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
                <div
                    className="absolute right-0 mt-2  bg-slate-950 rounded-lg shadow-lg z-20 flex flex-col p-1 items-center"
                    onClick={toggleMenu}
                >
                    <Link href="/home" className={navStyle}>
                        <FontAwesomeIcon icon={faPalette} />
                        <span className="ml-2">GALLERIE</span>
                    </Link>
                    <Link href="/artist" className={navStyle}>
                        <FontAwesomeIcon icon={faUserSecret} />
                        <span className="ml-2">ARTISTE</span>
                    </Link>
                    <Link href="/shop" className={navStyle}>
                        <FontAwesomeIcon icon={faShop} />
                        <span className="ml-2">SHOP</span>
                    </Link>
                </div>
            )}
        </div>
    );
};
