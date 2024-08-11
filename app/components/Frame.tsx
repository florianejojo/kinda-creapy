"use client";

import { classNames } from "./utils";

type FrameProps = {
    children: React.ReactNode;
    color: string;
    isSpinable?: boolean;
};

export const Frame = ({ children, color, isSpinable = false }: FrameProps) => {
    return (
        <div
            className={classNames(
                "border-2 border-red-800 p-2 bg-transparent rounded",
                isSpinable && "motion-safe:animate-spin-slow"
            )}
        >
            {children}
        </div>
    );
};
