// app/gallery/[id].tsx
import { notFound } from "next/navigation";
import { Frame } from "@/components/Frame";
import Link from "next/link";
import { WordByWordText } from "@/components/WordByWordText";
import { Metadata } from "next";
import { formatNameToId } from "@/utils/generic.utils";

// export async function generateMetadata({
//     params,
// }: ArtworkProps): Promise<Metadata> {
//     const artwork = artworks.find((artwork) => {
//         return formatNameToId(artwork.name) === params.artPieceName;
//     });

//     return {
//         title: artwork && formatNameToId(artwork.name),
//         description: artwork?.description,
//         // openGraph: {
//         //     images: [
//         //         {
//         //             url: "",
//         //         },
//         //     ],
//         // },
//     };
// }

type ArtworkProps = {
    params: { artPieceName: string };
};

export default function ArtworkPage({ params }: ArtworkProps) {
    // const artwork = artworks.find((artwork) => {
    //     return formatNameToId(artwork.name) === params.artPieceName;
    // });

    // if (!artwork) {
    //     notFound();
    //     return null;
    // }

    return "hey";
}

// export async function generateStaticParams() {
//     return artworks.map((artwork) => ({
//         id: formatNameToId(artwork.name),
//     }));
// }
