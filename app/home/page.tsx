import { artworks } from "../../data/artwork";
import Link from "next/link";
import { Frame } from "../components/Frame";
import { TreeCanvas } from "../components/TreeCanvas";
import { categories } from "@/data/categories";
import { WordByWordText } from "../components/WordByWordText";
import { classNames, formatNameToId } from "../utils/utils";
import { GridFilledLayout } from "../components/GridFilledLayout";
import { fetchArtworkAndSaveImages } from "../api/notion/getArtwork";

export default async function Home() {
    const cards = await fetchArtworkAndSaveImages();

    console.log({ cards });

    const gridItem = " w-80 h-auto z-10 flex items-end";

    return (
        <>
            <div className="w-full bg-white text-black uppercase font-extralight text-center tracking-tight">
                Site en construction
            </div>
            <div className="absolute inset-0 z-0">
                <TreeCanvas />
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between m-5 md:p-10  tracking-widest sm:max-w-6xl mx-auto z-10">
                <header className="relative flex flex-col wrap z-1 text-xs mb-10 py-3 gap-5 font-extralight justify-center sm:max-w-3xl  w-full sm:border-t">
                    <h1 className="text-xl font-extralight text-center w-full pb-5 sm:hidden  border-b">
                        KINDA CREAPY
                    </h1>
                    <div className="justify-center grid grid-cols-3 sm:grid-cols-7">
                        {categories.map((category) => (
                            <div
                                key={category.name}
                                className="text-center uppercase"
                            >
                                {category.name}
                            </div>
                        ))}

                        <h1 className="text-xl font-extralight text-center w-full pb-5 hidden sm:block">
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
                    </div>
                </header>
                <div className="w-full z-10">
                    <GridFilledLayout
                        elements={[...cards].map((artwork, index) => {
                            console.log({ artwork });
                            return (
                                <div
                                    className={gridItem}
                                    key={
                                        artwork
                                            ? artwork.id
                                            : "categoryDescription"
                                    }
                                >
                                    {artwork ? (
                                        <Link
                                            href={`/gallery/${formatNameToId(
                                                artwork.name
                                            )}`}
                                            className={
                                                "grid grid-rows-[1fr_auto]"
                                            }
                                        >
                                            <Frame
                                                image={artwork.images[0]}
                                                alt={artwork.alt}
                                                isLazyLoaded={index > 5}
                                            />

                                            <h2 className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
                                                {artwork.name}
                                            </h2>
                                        </Link>
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
                        })}
                    />
                </div>
            </main>
        </>
    );
}


