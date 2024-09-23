"use client";
import { categories } from "@/data/categories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const Header = () => {
    const pathname = usePathname();

    const firstLevelNav = pathname.split("/")[1];
    const title =
        firstLevelNav === "artwork" ? "KINDA CREAPY" : "R. VERROEULST";

    const navElements = useMemo(() => {
        if (firstLevelNav === "artwork") {
            return Object.values(categories);
        }
        return [{ name: "CV" }, { name: "Inspirations" }, { name: "Contact" }];
    }, [firstLevelNav]);

    return (
        <header className="z-10 grid grid-cols-3 w-full text-center uppercase font-extralight text-sm max-w-3xl mx-auto my-10">
            <h1 className="text-3xl font-extralight text-center w-full border-b col-span-3 py-3 hover:font-normal cursor-pointer">
                {title}
            </h1>

            {/* <nav>SHOP</nav> */}

            {navElements.map((navItem) => (
                <Link
                    href={navItem.name}
                    key={navItem.name}
                    className="col-span-1 py-3 hover:border-t-2 cursor-pointer"
                >
                    {navItem.name}
                </Link>
            ))}
        </header>
    );
};
