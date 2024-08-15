"use client";

import { useEffect } from "react";
import { classNames } from "../utils/utils";
import Image from "next/image";
import imageMap from "@/imageImports";

type FrameProps = {
    isSpinable?: boolean;
    image: string;
    name: string;
};

export const Frame = ({ isSpinable = false, image, name }: FrameProps) => {
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

    return (
        <div
            className={classNames(
                "max-w-max relative",
                isSpinable && "motion-safe:animate-spin-slow"
            )}
        >
            <Image
                src={imageMap[image as keyof typeof imageMap]}
                alt={name}
                placeholder="blur"
                loading="eager"
            />
        </div>
    );
};
