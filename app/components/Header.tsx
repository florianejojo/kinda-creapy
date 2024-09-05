"use client";
import { categories } from "@/data/categories";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export const Header = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleFilterBy = (categoryName: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("filterBy", categoryName);
        window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    };

    return (
        <header className="grid grid-cols-3 w-full text-center uppercase font-extralight text-sm max-w-3xl mx-auto my-10">
            {/* <span className="sm:block hidden cursor-pointer">Infos</span>
            <span className="sm:block hidden cursor-pointer">Shop</span>
            <span className="sm:block hidden cursor-pointer">Contact</span> */}

            <h1
                className="text-3xl font-extralight text-center w-full border-b col-span-3 py-3 hover:font-normal cursor-pointer"
                onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.delete("filterBy");
                    window.history.pushState(
                        {},
                        "",
                        `${pathname}?${params.toString()}`
                    );
                }}
            >
                KINDA CREAPY
            </h1>
            {...categories.map((category) => (
                <span
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
