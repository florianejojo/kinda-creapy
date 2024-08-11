"use client";

import React, { useState, useEffect } from "react";

interface WordByWordTextProps {
    text: string;
    interval?: number; // Intervalle de temps entre chaque mot en millisecondes
}

export const WordByWordText: React.FC<WordByWordTextProps> = ({
    text,
    interval = 100,
}) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);

    const words = text.split(" ");

    useEffect(() => {
        if (index < words.length) {
            const timer = setTimeout(() => {
                setDisplayedText(
                    (prev) => prev + (index > 0 ? " " : "") + words[index]
                );
                setIndex(index + 1);
            }, interval);

            return () => clearTimeout(timer);
        }
    }, [index, interval, words]);

    return <div>{displayedText}</div>;
};
