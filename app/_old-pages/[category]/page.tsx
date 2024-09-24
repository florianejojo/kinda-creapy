"use client";
import { ArtPiece } from "@/app/components/ArtPiece";
import { GridFilledLayout } from "@/app/components/GridFilledLayout";
import { WordByWordText } from "@/app/components/WordByWordText";
import { gridItem } from "@/app/styles/common.styles";
import { classNames } from "@/app/utils/utils";
import { artworks } from "@/data/artwork";
import { categories } from "@/data/categories";
import { usePathname } from "next/navigation";

export default function Home() {
    const pathname = usePathname();
    const category = pathname.split("/")[3];

    console.log({ category }, pathname.split("/"));
    const elements = artworks
        .filter((artPiece) => {
            return (
                (artPiece && artPiece.categories.includes(category)) ||
                !category
            );
        })
        .map((artPiece, index) => {
            return (
                <div
                    className={gridItem}
                    key={artPiece ? artPiece.id : "categoryDescription"}
                >
                    {artPiece ? (
                        <div className="hover:transition-transform transform hover:scale-105 duration-300">
                            <ArtPiece artPiece={artPiece} position={index} />
                        </div>
                    ) : (
                        <div
                            className={classNames(
                                "text-xs font-extralight p-5 leading-5 text-left flex items-center justify-center self-center border border-red-800 "
                            )}
                        >
                            <WordByWordText
                                text={categories[category].description}
                                interval={70}
                            />
                        </div>
                    )}
                </div>
            );
        });

    return (
        <>
            <GridFilledLayout elements={elements} />
        </>
    );
}
