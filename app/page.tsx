import { artworks } from "../data/artwork";
import Link from "next/link";
import { Frame } from "./components/Frame";
import { TreeCanvas } from "./components/TreeCanvas";
import { categories } from "@/data/categories";
import { WordByWordText } from "./components/WordByWordText";
import { classNames, formatNameToId, shuffleArray } from "./utils/utils";

export default function Home() {
    const shuffledArtworks = shuffleArray(artworks);

    const cards = [
        ...shuffledArtworks.slice(0, 4),
        null,
        ...shuffledArtworks.slice(4),
    ];

    return (
        <>
            <div className="w-full bg-white text-black uppercase font-extralight text-center tracking-tight">
                Site en construction
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10 max-w-6xl mx-auto tracking-widest">
                <div className="absolute inset-0 z-0">
                    <TreeCanvas />
                </div>
                <h1 className="text-xl font-extralight text-center mt-10 md:hidden">
                    KINDA CREAPY
                </h1>
                <header className="border-t p-5 relative z-1 text-xs grid grid-cols-3 gap-5 font-extralight justify-center max-w-3xl sm:grid-cols-7 mb-10">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="text-center uppercase"
                        >
                            {category.name}
                        </div>
                    ))}

                    <h1 className="text-xl font-extralight text-center hidden sm:block">
                        KINDA CREAPY
                    </h1>

                    {["Infos", "News", "Contact"].map((item) => (
                        <div
                            key={item}
                            className="text-center uppercase hidden sm:block"
                        >
                            {item}
                        </div>
                    ))}
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-baseline z-10">
                    {cards.map((artwork) => {
                        if (artwork === null)
                            return (
                                <div
                                    key={categories[0].name}
                                    className="text-xs font-extralight p-5 leading-5 text-center w-full h-full flex items-center justify-center self-center border border-red-800"
                                >
                                    <WordByWordText
                                        text={categories[0].description}
                                        interval={70}
                                    />
                                </div>
                            );
                        if (artwork) {
                            return (
                                <Link
                                    href={`/gallery/${formatNameToId(
                                        artwork.name
                                    )}`}
                                    key={artwork.id}
                                >
                                    <div
                                        className={classNames(
                                            "flex flex-col items-center justify-center"
                                        )}
                                    >
                                        <Frame
                                            isSpinable={artwork.isSpinable}
                                            image={artwork.image}
                                            name={artwork.name}
                                            alt={artwork.alt}
                                        />
                                    </div>

                                    <h2 className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
                                        {artwork.name}
                                    </h2>
                                </Link>
                            );
                        }
                    })}
                </div>
            </main>
        </>
    );
}
