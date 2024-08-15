// app/gallery/[id].tsx
import { artworks } from "@/data/artwork";
import { GetStaticPaths, GetStaticProps } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Frame } from "@/app/components/Frame";
import Link from "next/link";
import { formatNameToId } from "@/app/components/utils";

type ArtworkProps = {
    params: { artPieceName: string };
};

export default function ArtworkPage({ params }: ArtworkProps) {
    const artwork = artworks.find((artwork) => {
        return formatNameToId(artwork.name) === params.artPieceName;
    });

    if (!artwork) {
        notFound();
        return null;
    }

    return (
        <div>
            <header>
                <Link
                    href="/"
                    className="text-md font-extralight text-start p-2 m-2 border-b"
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
                                alt={artwork.name}
                                width={200}
                                height={200}
                                layout="responsive"
                            />
                        </Frame>
                    </div>

                    <div className="bg-beige-100 text-justify flex items-center flex-col my-auto">
                        <h1 className="text-3xl font-bold text-center my-10">
                            {artwork.name}
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
        id: formatNameToId(artwork.name),
    }));
}
