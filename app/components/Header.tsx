"use client";
import { BurgerMenu } from "@/app/components/BurgerMenu";
import { HEADER_TITLE, PATHS } from "@/app/types/types";
import { categories } from "@/data/categories";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

export const Header = () => {
    const pathname = usePathname();

    const firstLevelNav: PATHS = pathname.split("/")[1];

    const navElements = useMemo(() => {
        console.log(firstLevelNav);

        if (firstLevelNav === "home") {
            return Object.values(categories);
        }
        return [
            { name: "Interview", path: "artist" },
            { name: "Inspirations", path: "inspirations" },
            { name: "Contact", path: "contact" },
        ];
    }, [firstLevelNav]);

    const navStyle =
        "bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out m-5";

    return (
        <header className="z-10 text-center uppercase font-extralight mx-5 my-10">
            <div className="text-right">
                <BurgerMenu />

                <Link href={PATHS.home}>
                    <h1 className="text-3xl font-extralight text-center border-b py-3 hover:font-normal cursor-pointer ">
                        {HEADER_TITLE[firstLevelNav]}
                    </h1>
                </Link>
            </div>

            {/* <nav className="flex justify-center">
                {navElements.map((navItem) => (
                    <Link
                        href={{
                            pathname:
                                firstLevelNav === "home"
                                    ? "/home"
                                    : navItem.path,
                            query: { category: navItem.name.toLowerCase() },
                        }}
                        key={navItem.name}
                        className="flex-1 text-sm m-2 p-2 bg-gradient-to-t from-slate-950 via-black to-black text-white rounded-lg hover:bg-gradient-to-t hover:from-slate-950 hover:via-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer text-center"
                    >
                        {navItem.name}
                    </Link>
                ))}
            </nav> */}
        </header>
    );
};
