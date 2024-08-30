"use client";

import { useEffect } from "react";
import Image from "next/image";
import imageMap from "../imageImports5";

type FrameProps = {
    image: string;
    alt: string;
    isLazyLoaded: boolean;
};

export const Frame = ({ image, alt, isLazyLoaded }: FrameProps) => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        document.addEventListener("contextmenu", handleContextMenu);

        const images = document.querySelectorAll("img");
        images.forEach((img) => {
            img.addEventListener("dragstart", handleDragStart);
        });

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            images.forEach((img) => {
                img.removeEventListener("dragstart", handleDragStart);
            });
        };
    }, []);

    console.log({ imageMap }, image, imageMap[image]);

    return (
        <div className="border-2 w-full h-full">
            <Image
                blurDataURL={imageMap[image].blurDataURL}
                {...imageMap[image as keyof typeof imageMap]}
                // src={image[0]}
                alt={alt}
                objectFit="cover"
                placeholder="blur"
                loading={isLazyLoaded ? "lazy" : "eager"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};
