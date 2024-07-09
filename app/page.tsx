import { artworks } from "../data/artwork";
import { Artwork } from "../data/artwork";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10 lg:p-24">
            <header>
                <h1 className="text-7xl font-extralight text-center">
                    KINDA CREAPY
                </h1>
                <h2 className="text-sm font-extralight text-end mt-10">
                    R. VERROEULST.
                </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {artworks.map((artwork) => (
                    <div>
                        <div className="p-4 bg-tan-400 border-8 border-brown-700 rounded-lg">
                            <div className="p-4 bg-white border-4 border-white">
                                <div className="p-1 bg-beige-300 border-4 border-white">
                                    <Image
                                        src={artwork.image}
                                        alt={artwork.title}
                                        width={200}
                                        height={200}
                                        layout="responsive"
                                        className="rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
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
                    </div>
                ))}
            </div>
        </main>
    );
}
