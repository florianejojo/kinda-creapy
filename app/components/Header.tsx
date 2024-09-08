"use client";
import { Slider } from "@/app/components/Slider";
import { categories } from "@/data/categories";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

export const Header = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [slidePosition, setSlidePosition] = useState<
        "kindaCreapy" | "theArtist"
    >("kindaCreapy");
    const handleFilterBy = (categoryName: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("filterBy", categoryName);
        window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    };

    return (
        <header className="grid grid-cols-3 w-full text-center uppercase font-extralight text-sm max-w-3xl mx-auto my-10 ">
            {/* <span className="sm:block hidden cursor-pointer">Infos</span>
            <span className="sm:block hidden cursor-pointer">Shop</span>
            <span className="sm:block hidden cursor-pointer">Contact</span> */}

            <div className="w-full col-span-3 flex justify-center border-b">
                <Slider
                    className="text-3xl font-extralight text-center py-3 hover:font-normal "
                    // slides={["L'artiste", "Kinda Creapy"]}

                    slides={[
                        <h1 key="0">KINDA CREAPY</h1>,
                        <h1 key="1">R. VERROEULST</h1>,
                    ]}
                    position={slidePosition}
                    setPosition={setSlidePosition}
                />
            </div>

            {Object.values(categories).map((category) => (
                <span
                    key={category.name}
                    className="col-span-1 py-3 hover:border-t-2 cursor-pointer"
                    onClick={() => {
                        handleFilterBy(category.name);
                    }}
                >
                    {category.name}
                </span>
            ))}
        </header>
    );
};
