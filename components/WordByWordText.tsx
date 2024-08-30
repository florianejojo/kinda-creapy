"use client";
import { useEffect, useState } from "react";

interface WordByWordTextProps {
    text: string;
    interval?: number;
}

export const WordByWordText: React.FC<WordByWordTextProps> = ({
    text,
    interval = 100,
}) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);

    const characters = text.split("");

    useEffect(() => {
        if (index < characters.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + characters[index]);
                setIndex(index + 1);
            }, interval);

            return () => clearTimeout(timer);
        }
    }, [index, interval, characters]);

    return <p className="min-h-80 w-full">{displayedText}</p>;
};
