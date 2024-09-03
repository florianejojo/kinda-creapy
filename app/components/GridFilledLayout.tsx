"use client";

import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { ArtPiece } from "./ArtPiece";
import { WordByWordText } from "./WordByWordText";
import { categories } from "@/data/categories";
import { useSearchParams } from "next/navigation";
import { classNames, shuffleArray } from "./utils";
import { artworks } from "@/data/artwork";

export const GridFilledLayout = () => {
    const searchParams = useSearchParams();
    const filterBy = searchParams.get("filterBy");
    const shuffledArtworks = shuffleArray(artworks);

    const [colNumbers, setColNumbers] = useState(1);
    const gridItem = " w-80 h-auto z-10 flex items-end";
    const cards = [
        ...shuffledArtworks.slice(0, 4),
        null,
        ...shuffledArtworks.slice(4),
    ];

    const elements = cards
        .filter((artPiece) => {
            return (
                (artPiece && artPiece.categories.includes(filterBy)) ||
                !filterBy
            );
        })
        .map((artPiece, index) => {
            return (
                <div
                    className={gridItem}
                    key={artPiece ? artPiece.id : "categoryDescription"}
                >
                    {artPiece ? (
                        <ArtPiece artPiece={artPiece} position={index} />
                    ) : (
                        <div
                            className={classNames(
                                "text-xs font-extralight p-5 leading-5 text-left flex items-center justify-center self-center border border-red-800"
                            )}
                        >
                            <WordByWordText
                                text={categories[0].description}
                                interval={70}
                            />
                        </div>
                    )}
                </div>
            );
        });

    const makeCols = useCallback(() => {
        const columns: ReactNode[][] = Array.from(
            { length: colNumbers },
            () => []
        );

        elements.forEach((element: ReactNode, index) => {
            const colIndex = index % colNumbers;
            if (columns[colIndex])
                columns[colIndex].push(
                    <div className="self-center">{element}</div>
                );
        });

        return columns;
    }, [colNumbers, elements]);

    const updateColNumber = () => {
        if (window.innerWidth >= 1024) {
            setColNumbers(3);
        } else if (window.innerWidth >= 768) {
            setColNumbers(2);
        } else {
            setColNumbers(1);
        }
    };

    useEffect(() => {
        updateColNumber();
        window.addEventListener("resize", updateColNumber);
        return () => window.removeEventListener("resize", updateColNumber);
    }, []);

    const columns = makeCols();

    return (
        <div className={`grid grid-cols-${colNumbers} gap-20`}>
            {columns.map((col, index) => {
                return (
                    <div
                        key={index}
                        className={`flex flex-col gap-20  w-full h-full`}
                    >
                        {col}
                    </div>
                );
            })}
        </div>
    );
};
