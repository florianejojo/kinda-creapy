"use client";
import { BurgerMenu } from "@/app/components/BurgerMenu";
import { HEADER_TITLE, PATHS } from "@/app/types/types";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

    // const navElements = useMemo(() => {
    //     console.log(firstLevelNav);

    //     if (firstLevelNav === "home") {
    //         return Object.values(categories);
    //     }
    //     return [
    //         { name: "Interview", path: "artist" },
    //         { name: "Inspirations", path: "inspirations" },
    //         { name: "Contact", path: "contact" },
    //     ];
    // }, [firstLevelNav]);

    // const navStyle =
    //     "bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out m-5";

    return (
        <header className="text-center uppercase font-extralight mx-5 my-10">
            <div className="flex flex-row items-center justify-end  text-xl gap-5">
                <a
                    href="mailto:verroeulst.remy@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

                <a
                    href="tel:+33620133373"
                    target="_blank"
                    title="+33 6 20 13 33 73"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faPhone} />
                </a>

                <BurgerMenu />
            </div>

            <Link href={PATHS.home}>
                <h1 className="text-3xl font-extralight text-center border-b py-3 mt-10 hover:font-normal cursor-pointer">
                    {HEADER_TITLE[pathname as PATHS]}
                </h1>
            </Link>

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
