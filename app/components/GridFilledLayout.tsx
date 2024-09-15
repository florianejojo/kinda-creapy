"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";

export const GridFilledLayout = ({ elements }) => {
    const [colNumbers, setColNumbers] = useState(1);

    const makeCols = useCallback(() => {
        const columns: ReactNode[][] = Array.from(
            { length: colNumbers },
            () => []
        );

        elements.forEach((element: ReactNode, index) => {
            const colIndex = index % colNumbers;
            if (columns[colIndex])
                columns[colIndex].push(
                    <div key={"col-" + index} className="self-center">
                        {element}
                    </div>
                );
        });

        return columns;
    }, [colNumbers, elements]);

    const updateColNumber = () => {
        if (window.innerWidth >= 1024) {
            setColNumbers(3);
        } else if (window.innerWidth >= 768) {
            setColNumbers(2);
        } else {
            setColNumbers(1);
        }
    };

    useEffect(() => {
        updateColNumber();
        window.addEventListener("resize", updateColNumber);
        return () => window.removeEventListener("resize", updateColNumber);
    }, []);

    const columns = makeCols();

    return (
        <div className={`grid grid-cols-${colNumbers} gap-20`}>
            {columns.map((col, index) => {
                return (
                    <div
                        key={index}
                        className={`flex flex-col gap-20  w-full h-full`}
                    >
                        {col}
                    </div>
                );
            })}
        </div>
    );
};
