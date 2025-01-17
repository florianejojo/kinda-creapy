// app/gallery/[id].tsx
import { artworks } from "@/app/_shared/constants/artwork";
import { notFound } from "next/navigation";
import { Frame } from "@/app/_shared/Frame";
import Link from "next/link";
import { formatNameToId } from "@/app/utils/utils";
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

    return (
        <div className="max-w-md  mx-auto items-center px-5 font-extralight grid grid-rows-[1fr_2fr_2fr] max-h-screen ">
            <div className="items-center max-w-sm mx-auto border">
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
                <p>{artwork.description}</p>
            </p>
        </div>
    );
}

export async function generateStaticParams() {
    return artworks.map((artwork) => ({
        id: formatNameToId(artwork.name),
    }));
}
