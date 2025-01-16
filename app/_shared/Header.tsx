"use client";
import { BurgerMenu } from "@/app/_shared/BurgerMenu";
import { HEADER_TITLE, PATHS } from "@/app/types/types";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPalette, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathName = usePathname();

    return (
        <header className="text-center uppercase font-extralight mx-5 my-10">
            <div className="flex flex-row items-center justify-between text-xl">
                <Link href={PATHS.home}>
                    {pathName !== PATHS.home && (
                        <FontAwesomeIcon icon={faPalette} />
                    )}
                </Link>

                <div className="flex flex-row items-center gap-5">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/kindacreapy.art"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    {pathName !== PATHS.artist && (
                        <Link href={PATHS.artist}>
                            <FontAwesomeIcon icon={faUserSecret} />
                        </Link>
                    )}
                </div>
            </div>

            <Link href={PATHS.home}>
                <h1 className="text-3xl font-extralight text-center border-b py-3 mt-10 hover:font-normal cursor-pointer">
                    {HEADER_TITLE[pathName as PATHS]}
                </h1>
            </Link>
        </header>
    );
};
