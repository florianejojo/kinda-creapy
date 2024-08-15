"use client";

import { useEffect } from "react";
import { classNames } from "../utils/utils";

type FrameProps = {
    children: React.ReactNode;
    color: string;
    isSpinable?: boolean;
};

export const Frame = ({ children, color, isSpinable = false }: FrameProps) => {
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
            {children}
            <div className="absolute bottom-2 right-2 text-white opacity-50 max-x-10 font-extralight">
                KINDA CREAPY
            </div>
        </div>
    );
};
