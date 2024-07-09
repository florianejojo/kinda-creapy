import { artworks } from "../data/artwork";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10 ">
            <header>
                <h1 className="text-7xl font-extralight text-center">
                    KINDA CREEPY
                </h1>
                <h2 className="text-sm font-extralight text-end mt-10">
                    R. VERROEULST.
                </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 items-center">
                {artworks.map((artwork) => (
                    <Link href={`/gallery/${artwork.id}`} key={artwork.id}>
                        <div className="border-4 border-b-orange-900/50  border-r-orange-900/50  border-t-black border-l-black">
                            <div className="border-8 border-orange-900">
                                <div className="bg-yellow-100/90 p-10">
                                    <div className="border-4 border-white/55">
                                        <Image
                                            src={artwork.image}
                                            alt={artwork.title}
                                            width={200}
                                            height={200}
                                            layout="responsive"
                                            // className="rounded-md"
                                        />
                                    </div>
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
                    </Link>
                ))}
            </div>
        </main>
    );
}

// export const getStaticProps: GetStaticProps = async () => {
//     // Simuler la récupération de données (par exemple, à partir d'un fichier ou d'une API)
//     const data = artworks;

//     return {
//         props: {
//             artworks: data,
//         },
//     };
// };
