"use client";
import { ArtPiece } from "@/app/_shared/ArtPiece";
import { GridFilledLayout } from "@/app/home/GridFilledLayout";
import { artworks } from "@/app/_shared/constants/artwork";

export default function Home() {
    const gridItem = " w-80 h-auto flex items-end";

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
