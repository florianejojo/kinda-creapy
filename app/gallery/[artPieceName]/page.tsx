// app/gallery/[id].tsx
import { artworks } from "@/data/artwork";
import { notFound } from "next/navigation";
import { Frame } from "@/app/components/Frame";
import Link from "next/link";
import { formatNameToId } from "@/app/utils/utils";
import { WordByWordText } from "@/app/components/WordByWordText";

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
        <div className="max-w-4xl mx-auto items-center px-5 font-extralight grid grid-rows-[1fr_2fr_2fr] max-h-screen">
            <header className="flex self-start justify-between items-center mt-10">
                <Link href="/" className="text-md font-extralight border-b ">
                    Retour
                </Link>
                <h1 className="text-2xl font-bol text-center ">
                    {artwork.name}
                </h1>
            </header>

            <div className="items-center ">
                <p className="text-end text-xs my-5  ">
                    {artwork.technique} - {artwork.size}
                </p>
                <Frame
                    image={artwork.image}
                    alt={artwork.alt}
                    isLazyLoaded={false}
                />
            </div>
            <p className="text-xs font-extralight text-right w-full pt-10 text-gray-300 overflow-scroll self-start">
                <WordByWordText text={artwork.description} interval={50} />
            </p>
        </div>
    );
}

export async function generateStaticParams() {
    return artworks.map((artwork) => ({
        id: formatNameToId(artwork.name),
    }));
}
