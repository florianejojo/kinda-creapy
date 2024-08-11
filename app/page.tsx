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
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10">
            {/* TreeCanvas en arrière-plan */}
            <div className="absolute inset-0 z-0">
                <TreeCanvas />
            </div>
            <header className="relative z-10">
                <h1 className="text-7xl font-extralight text-center">
                    KINDA CREAPY
                </h1>
                <h2 className="text-sm font-extralight text-end mt-10">
                    R. VERROEULST.
                </h2>
                <TabGroup className="flex flex-col items-center w-full">
                    <TabList className="my-5">
                        {categories.map((category) => {
                            return (
                                <Tab
                                    className={
                                        "border border-white rounded p-1 m-1 data-[headlessui-state=selected]:border-red-800 data-[headlessui-state=over active]:border-red-800"
                                    }
                                >
                                    {category.name}
                                </Tab>
                            );
                        })}
                    </TabList>
                    <TabPanels className="min-h-44 max-w-lg text-sm font-extralight flex items-center justify-start">
                        {categories.map((category) => {
                            return (
                                <TabPanel>
                                    <WordByWordText
                                        text={category.description}
                                        interval={100}
                                    />
                                </TabPanel>
                            );
                        })}
                    </TabPanels>
                </TabGroup>
            </header>

            <div className=" relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 items-center ">
                {shuffleArray(artworks).map((artwork) => (
                    <Link href={`/gallery/${artwork.id}`} key={artwork.id}>
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
                            <h2 className="text-xl font-extralight">
                                {artwork.title}
                            </h2>
                            <p className="text-gray-600 font-light">
                                {artwork.description.length > 150
                                    ? artwork.description.substring(0, 150) +
                                      "..."
                                    : artwork.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

