"use client";
import { BurgerMenu } from "@/app/_shared/BurgerMenu";
import { HEADER_TITLE, PATHS } from "@/app/types/types";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

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
        </header>
    );
};
