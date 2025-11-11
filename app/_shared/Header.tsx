"use client";
import { useFirstSegmentPathName } from "@/app/_shared/hooks/useFirstSegmentPathName";
import { useHeaderTitle } from "@/app/_shared/hooks/useHeaderTitle";
import { PATHS } from "@/app/types/types";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPalette, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Header = () => {
    const pathName = useFirstSegmentPathName();
    const title = useHeaderTitle();

    return (
        <header className="text-center uppercase font-extralight mx-5 my-10">
            <div className="flex flex-row items-center justify-between text-2xl">
                <Link href={PATHS.home}>
                    {pathName !== PATHS.home && (
                        <FontAwesomeIcon icon={faPalette} />
                    )}
                </Link>

                <div className="flex flex-row gap-5">
                    {pathName !== PATHS.artist && (
                        <Link href={PATHS.artist}>
                            <FontAwesomeIcon icon={faUserSecret} className="" />
                        </Link>
                    )}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/kindacreapy.art"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-3xl"
                        />
                    </a>
                </div>
            </div>

            <h1 className="text-3xl font-extralight text-center border-b py-3 mt-10">
                {title}
            </h1>
        </header>
    );
};
