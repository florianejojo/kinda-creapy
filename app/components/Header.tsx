"use client";
import { Slider } from "@/app/components/Slider";
import { NavItem, PATHS } from "@/app/types/types";
import { getNav } from "@/app/utils/getNav";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [slidePosition, setSlidePosition] = useState<PATHS>(
        pathname === PATHS.home ? PATHS.home : PATHS.curriculum
    );
    const handleFilterBy = (categoryName: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("filterBy", categoryName);

        window.history.pushState(
            null,
            "",
            `${pathname}?${params.toString()}
    `
        );
    };

    useEffect(() => {
        if (slidePosition === pathname) {
            if (slidePosition === PATHS.home) {
                router.push(PATHS.curriculum);
            } else router.push(PATHS.home);
        }
    }, [slidePosition]);

    const nav = getNav(pathname as PATHS);
    return (
        <header className="grid grid-cols-3 w-full text-center uppercase font-extralight text-sm max-w-3xl mx-auto my-10 ">
            <div className="w-full col-span-3 flex justify-center border-b">
                <Slider
                    className="text-3xl font-extralight text-center py-3 hover:font-normal "
                    slides={[
                        <h1 key="0">KINDA CREAPY</h1>,
                        <h1
                            key="1"
                            onClick={() => {
                                router.push(PATHS.home);
                            }}
                        >
                            Curry-cul l'homme
                        </h1>,
                    ]}
                    position={slidePosition}
                    setPosition={setSlidePosition}
                />
            </div>

            {nav.map((navItem: NavItem) => (
                <span
                    key={navItem.name}
                    className="col-span-1 py-3 hover:border-t-2 cursor-pointer"
                    onClick={() => {
                        if (pathname === PATHS.home)
                            handleFilterBy(navItem.name);
                        else if (navItem.path) router.push(navItem.path);
                        else console.log("something else ! ");
                    }}
                >
                    {navItem.name}
                </span>
            ))}
        </header>
    );
};
