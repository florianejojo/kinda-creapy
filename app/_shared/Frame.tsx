"use client";

import Image from "next/image";
import imageMap from "@/imageImports";

type FrameProps = {
    image: string;
    alt: string;
    isLazyLoaded: boolean;
};

export const Frame = ({ image, alt, isLazyLoaded }: FrameProps) => {
    const img = imageMap[image as keyof typeof imageMap];

    return (
        img && (
            <Image
                src={img.src}
                width={img.width}
                height={img.height}
                blurDataURL={img.blurDataURL}
                alt={alt}
                placeholder="blur"
                loading={isLazyLoaded ? "lazy" : "eager"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        )
    );
};
