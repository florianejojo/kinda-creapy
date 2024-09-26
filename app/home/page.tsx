"use client";
import { ArtPiece } from "@/app/components/ArtPiece";
import { GridFilledLayout } from "@/app/components/GridFilledLayout";
import { classNames } from "@/app/utils/utils";
import { artworks } from "@/data/artwork";

export default function Home() {
    const gridItem = " w-80 h-auto z-10 flex items-end";

    const elements = artworks.map((artPiece, index) => {
        return (
            <div className={gridItem} key={artPiece.id}>
                <div className="hover:transition-transform transform hover:scale-105 duration-300">
                    <ArtPiece artPiece={artPiece} position={index} />
                </div>
            </div>
        );
    });
    return <GridFilledLayout elements={elements} />;
}
