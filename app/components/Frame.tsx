"use client";

import { useEffect } from "react";
import Image from "next/image";
import imageMap from "@/imageImports";

type FrameProps = {
    image: string;
    alt: string;
    isLazyLoaded: boolean;
};

export const Frame = ({ image, alt, isLazyLoaded }: FrameProps) => {
    // useEffect(() => {
    //     const handleContextMenu = (e: MouseEvent) => {
    //         e.preventDefault();
    //     };

    //     const handleDragStart = (e: DragEvent) => {
    //         e.preventDefault();
    //     };

    //     document.addEventListener("contextmenu", handleContextMenu);

    //     const images = document.querySelectorAll("img");
    //     images.forEach((img) => {
    //         img.addEventListener("dragstart", handleDragStart);
    //     });

    //     return () => {
    //         document.removeEventListener("contextmenu", handleContextMenu);
    //         images.forEach((img) => {
    //             img.removeEventListener("dragstart", handleDragStart);
    //         });
    //     };
    // }, []);
    const img = imageMap[image as keyof typeof imageMap];

    return (
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
    );
};
