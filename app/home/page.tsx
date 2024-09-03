import { artworks } from "../../data/artwork";

import { TreeCanvas } from "../components/TreeCanvas";
import { categories } from "@/data/categories";
import { WordByWordText } from "../components/WordByWordText";
import { classNames, formatNameToId, shuffleArray } from "../utils/utils";
import { GridFilledLayout } from "../components/GridFilledLayout";
import { Header } from "../components/Header";
import { ArtPiece } from "../components/ArtPiece";

export default function Home() {
    return (
        <>
            <div className="w-full bg-white text-black uppercase font-extralight text-center tracking-tight">
                Site en construction
            </div>
            {/* <TreeCanvas /> */}
            <Header />

            <main className="flex min-h-screen flex-col items-center justify-between m-5 md:p-10  tracking-widest sm:max-w-6xl mx-auto z-10">
                <div className="w-full z-10">
                    <GridFilledLayout />
                </div>
            </main>
        </>
    );
}
