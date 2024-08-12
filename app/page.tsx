import { artworks } from "../data/artwork";
import Image from "next/image";
import Link from "next/link";
import { Frame } from "./components/Frame";
import { TreeCanvas } from "./components/TreeCanvas";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { categories } from "@/data/categories";
import { WordByWordText } from "./components/WordByWordText";
import { shuffleArray } from "./components/utils";

export default function Home() {
    const shuffled = shuffleArray(artworks);
    return (
        <>
            {" "}
            <div className="w-full bg-white text-black uppercase font-extralight text-center">
                Site en construction
            </div>{" "}
            <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10">
                {/* TreeCanvas en arrière-plan */}
                <div className="absolute inset-0 z-0">
                    <TreeCanvas />
                </div>
                <h1 className="text-xl font-extralight text-center mt-10 md:hidden">
                    KINDA CREAPY
                </h1>
                <header className="relative z-10 text-xs items-center grid grid-cols-3 gap-5 font-extralight justify-center max-w-3xl my-10 sm:grid-cols-7">
                    {categories.map((category) => {
                        return (
                            <div
                                key={category.name}
                                className="text-center uppercase"
                            >
                                {category.name}
                            </div>
                        );
                    })}

                    {/* {categories.map((category) => {
                    return (
                        <div
                            className={
                                "border border-white rounded p-1 m-1 data-[headlessui-state=selected]:border-red-800 data-[headlessui-state=over active]:border-red-800"
                            }
                        >
                            {category.name}
                        </div>
                    );
                })} */}

                    <h1 className="text-xl font-extralight text-center hidden sm:block">
                        KINDA CREAPY
                    </h1>

                    {[
                        { name: "Infos" },
                        { name: "News" },
                        { name: "Contact" },
                    ].map((category) => {
                        return (
                            <div
                                key={category.name}
                                className="text-center uppercase hidden sm:block"
                            >
                                {category.name}
                            </div>
                        );
                    })}

                    {/* <h2 className="text-sm font-extralight text-end mt-10">
                    R. VERROEULST.
                </h2> */}
                </header>
                <div className=" relative z-10 flex flex-col gap-20 sm:grid  md:grid-cols-2 lg:grid-cols-3 mt-10 items-center sm:gap-20">
                    {shuffled.map(
                        (artwork, index) =>
                            index < 4 && (
                                <Link
                                    href={`/gallery/${artwork.id}`}
                                    key={artwork.id}
                                >
                                    <Frame
                                        color={artwork.color}
                                        isSpinable={artwork.isSpinable}
                                    >
                                        <Image
                                            src={artwork.image}
                                            alt={artwork.title}
                                            width={200}
                                            height={200}
                                            layout="responsive"
                                        />
                                    </Frame>

                                    <div className="p-4 text-end">
                                        <h2 className="text-sm font-extralight">
                                            {artwork.title}
                                        </h2>
                                        {/* <p className="text-xs text-gray-600 font-light">
                                        {artwork.description.length > 150
                                            ? artwork.description.substring(
                                                  0,
                                                  150
                                              ) + "..."
                                            : artwork.description}
                                    </p> */}
                                    </div>
                                </Link>
                            )
                    )}
                    <WordByWordText
                        text={categories[0].description}
                        interval={200}
                    />
                    {shuffled.map(
                        (artwork, index) =>
                            index >= 4 && (
                                <Link
                                    href={`/gallery/${artwork.id}`}
                                    key={artwork.id}
                                >
                                    <Frame
                                        color={artwork.color}
                                        isSpinable={artwork.isSpinable}
                                    >
                                        <Image
                                            src={artwork.image}
                                            alt={artwork.title}
                                            width={200}
                                            height={200}
                                            layout="responsive"
                                        />
                                    </Frame>

                                    <div className="p-4 text-end">
                                        <h2 className="text-sm font-extralight">
                                            {artwork.title}
                                        </h2>
                                        {/* <p className="text-xs text-gray-600 font-light">
                                        {artwork.description.length > 150
                                            ? artwork.description.substring(
                                                  0,
                                                  150
                                              ) + "..."
                                            : artwork.description}
                                    </p> */}
                                    </div>
                                </Link>
                            )
                    )}
                </div>
                {/* {categories.map((category) => {
                return (
                    <div>
                        <WordByWordText
                            text={category.description}
                            interval={0}
                        />
                    </div>
                );
            })} */}
            </main>
        </>
    );
}

