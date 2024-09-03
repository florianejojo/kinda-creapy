"use client";

import Link from "next/link";
import { Frame } from "./Frame";
import { formatNameToId } from "./utils";

export const ArtPiece = ({ artPiece, position }) => {
    return (
        <Link
            href={`/gallery/${formatNameToId(artPiece.name)}`}
            className={"grid grid-rows-[1fr_auto]"}
        >
            <Frame
                image={artPiece.image}
                alt={artPiece.alt}
                isLazyLoaded={position > 5}
            />

            <h2 className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
                {artPiece.name}
            </h2>
        </Link>
    );
};
