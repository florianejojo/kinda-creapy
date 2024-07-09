// app/gallery/[id].tsx
import { Artwork, artworks } from "@/data/artwork";
import { GetStaticPaths, GetStaticProps } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

type ArtworkProps = {
    params: { artPieceId: string };
};

export default function ArtworkPage({ params }: ArtworkProps) {
    const artwork = artworks.find((artwork) => {
        return artwork.id === Number(params.artPieceId);
    });

    if (!artwork) {
        notFound();
        return null; // Ajoutez une return pour arrêter l'exécution si notFound est appelé
    }

    return (
        <div className="container mx-auto p-4  max-w-5xl">
            <header></header>
            <h1 className="text-3xl font-bold text-center my-10">
                {artwork.title}
            </h1>

            <div className="grid grid-cols-2">
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
                <div className="bg-beige-100 px-24 text-justify flex items-center ">
                    <p className="text-gray-600">{artwork.description}</p>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return artworks.map((artwork) => ({
        id: artwork.id.toString(),
    }));
}
