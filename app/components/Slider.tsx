import { PATHS } from "@/app/types/types";
import { MouseEvent, ReactNode, useEffect, useState } from "react";
type SliderProps = {
    slides: ReactNode[];
    position: PATHS;
    setPosition: (position: PATHS) => void;
    className: string;
};
export function Slider({
    slides,
    position,
    setPosition,
    className,
}: SliderProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0); // Position initiale du clic ou touch
    const [translateX, setTranslateX] = useState<string>(
        position === PATHS.curriculum ? "0" : "100%"
    );

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        handleDrag(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;

        handleDrag(e.touches[0].clientX);
    };

    const handleDrag = (currentX: number) => {
        const sliderElement = document.getElementById("slider");
        const isSwippingRight = startX - currentX < 0;
        const diff = currentX - startX;

        if (!sliderElement) return;
        const sliderWidth = sliderElement.scrollWidth;

        const percent = Math.max(
            Math.min(((startX - currentX) / sliderWidth) * 100 + 100, 100),
            0
        ).toFixed(0);

        if (isSwippingRight && Math.abs(diff) > 40) {
            setTranslateX("0%");
            handleMouseUp();
            setPosition(PATHS.curriculum);
        } else if (!isSwippingRight && Math.abs(diff) > 40) {
            setTranslateX("100%");
            handleMouseUp();
            setPosition(PATHS.home);
        } else setTranslateX(percent + "%");
    };
    const handleMouseUp = () => setIsDragging(false);
    useEffect(() => {
        // Événements tactiles natifs
        const handleNativeTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            handleDrag(e.touches[0].clientX);
        };

        const handleNativeTouchStart = (e: TouchEvent) => {
            setIsDragging(true);
            setStartX(e.touches[0].clientX);
        };
        const sliderElement = document.getElementById("slider");
        if (sliderElement) {
            sliderElement.addEventListener("touchmove", handleNativeTouchMove, {
                passive: false,
            });
            sliderElement.addEventListener(
                "touchstart",
                handleNativeTouchStart,
                {
                    passive: false,
                }
            );
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener(
                    "touchmove",
                    handleNativeTouchMove
                );
                sliderElement.removeEventListener(
                    "touchstart",
                    handleNativeTouchStart
                );
            }
        };
    }, [isDragging]);
    return (
        <div
            id="slider"
            className={`cursor-pointer w-64 text-white text-scenter flex flex-row transition-all duration-500 transform hover:scale-105 overflow-hidden ${className}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="transition-all duration-500 transform min-w-64"
                    style={{ transform: `translateX(-${translateX})` }}
                >
                    {slide}
                </div>
            ))}
        </div>
    );
}
