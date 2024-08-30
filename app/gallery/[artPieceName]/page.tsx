// app/gallery/[id].tsx
import { artworks } from "@/data/artwork";
import { notFound } from "next/navigation";
import { Frame } from "@/app/components/Frame";
import Link from "next/link";
import { formatNameToId } from "@/app/utils/utils";
import { WordByWordText } from "@/app/components/WordByWordText";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: ArtworkProps): Promise<Metadata> {
    const artwork = artworks.find((artwork) => {
        return formatNameToId(artwork.name) === params.artPieceName;
    });

    return {
        title: artwork && formatNameToId(artwork.name),
        description: artwork?.description,
        // openGraph: {
        //     images: [
        //         {
        //             url: "",
        //         },
        //     ],
        // },
    };
}

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
    console.log("ICIII", { artwork });

    return (
        <div className="max-w-md  mx-auto items-center px-5 font-extralight grid grid-rows-[1fr_2fr_2fr] max-h-screen">
            <header className="flex self-start justify-between items-center mt-10 border-b">
                <Link href="/" className="text-md font-extralight">
                    Retour
                </Link>
                <h1 className="text-2xl font-bol text-center ">
                    {artwork.name}
                </h1>
            </header>

            <div className="items-center max-w-sm mx-auto ">
                <Frame
                    image={artwork.image}
                    alt={artwork.alt}
                    isLazyLoaded={false}
                />
                <p className="text-end text-xs my-5  ">
                    {artwork.technique} - {artwork.size}
                </p>
            </div>

            <p className="text-xs w-full font-extralight text-justify max-w-smm mx-auto pt-10 text-gray-300 overflow-scroll self-start">
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
