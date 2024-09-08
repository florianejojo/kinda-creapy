import { artworks } from "../data/artwork";
import Image from "next/image";
import Link from "next/link";
import { Frame } from "./components/Frame";
import { TreeCanvas } from "./components/TreeCanvas";
import { categories } from "@/data/categories";
import { WordByWordText } from "./components/WordByWordText";
import { classNames, formatNameToId, shuffleArray } from "./components/utils";

export default function Home() {
    const shuffledArtworks = shuffleArray(artworks);
    const firstBatch = shuffledArtworks.slice(0, 4);
    const secondBatch = shuffledArtworks.slice(4);
    const cards = [
        ...shuffledArtworks.slice(0, 4),
        null,
        shuffledArtworks.slice(4),
    ];

    return (
        <>
            <div className="w-full bg-white text-black uppercase font-extralight text-center ">
                Site en construction
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10 max-w-6xl mx-auto ">
                <div className="absolute inset-0 z-0">
                    <TreeCanvas />
                </div>
                <h1 className="text-xl font-extralight text-center mt-10 md:hidden">
                    KINDA CREAPY
                </h1>
                <header className="relative z-10 text-xs grid grid-cols-3 gap-5 font-extralight justify-center max-w-3xl my-10 sm:grid-cols-7">
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

                    {/* <h2 className="text-sm font-extralight text-end mt-10">
                        Remy Verroeuslt
                    </h2> */}
                </header>
                {/* <div className="relative z-10 flex flex-col gap-20 sm:grid md:grid-cols-2 lg:grid-cols-3 mt-10 items-baseline sm:gap-20"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {cards.map((artwork) => {
                        if (artwork === null)
                            return (
                                <WordByWordText
                                    key={categories[0].name}
                                    text={categories[0].description}
                                    interval={200}
                                />
                            );
                        if (artwork)
                            return (
                                <Link
                                    className={classNames(
                                        "flex flex-col items-center justify-center",
                                        artwork.isSpinable &&
                                            "border opacity-10"
                                    )}
                                    href={`/gallery/${formatNameToId(
                                        artwork.name
                                    )}`}
                                    key={artwork.id}
                                >
                                    <Frame
                                        color={artwork.color}
                                        // isSpinable={artwork.isSpinable}
                                    >
                                        <Image
                                            className={classNames(
                                                "max-w-max relative",
                                                artwork.isSpinable &&
                                                    "motion-safe:animate-spin-slow border-2"
                                            )}
                                            src={artwork.image}
                                            alt={artwork.name}
                                            width={200}
                                            height={200}
                                            layout="responsive"
                                        />
                                    </Frame>

                                    <h2 className="text-sm font-extralight text-right w-full pt-2">
                                        {artwork.name}
                                    </h2>
                                </Link>
                            );
                    })}
                </div>

                {/* </div> */}
            </main>
        </>
    );
}
