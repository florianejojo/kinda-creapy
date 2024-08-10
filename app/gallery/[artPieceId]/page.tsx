// app/gallery/[id].tsx
import { Artwork, artworks } from "@/data/artwork";
import { GetStaticPaths, GetStaticProps } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Frame } from "@/app/components/Frame";
import Link from "next/link";

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
        <div>
            <header>
                <Link
                    href="/"
                    className="text-4xl font-extralight text-start p-2 m-2 border-b"
                >
                    KINDA CREAPY
                </Link>
            </header>

            <div className="container mx-auto p-4 my-auto max-w-2xl">
                <div className="items-center">
                    <div>
                        <p className="text-end text-sm my-5">
                            {artwork.technique} - {artwork.size}
                        </p>
                        <Frame color={artwork.color}>
                            <Image
                                src={artwork.image}
                                alt={artwork.title}
                                width={200}
                                height={200}
                                layout="responsive"
                            />
                        </Frame>
                    </div>

                    <div className="bg-beige-100 text-justify flex items-center flex-col my-auto">
                        <h1 className="text-3xl font-bold text-center my-10">
                            {artwork.title}
                        </h1>
                        <p className="text-gray-600">{artwork.description}</p>
                    </div>
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
