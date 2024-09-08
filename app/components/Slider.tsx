import { useEffect, useState } from "react";

export function Slider({ slides, position, setPosition, className }) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0); // Position initiale du clic ou touch
    const [translateX, setTranslateX] = useState<string>("100%");

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX); // Enregistre la position initiale du clic
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX); // Enregistre la position initiale du touch
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleDrag(e.clientX); // Utilise la même logique pour le mouvement de la souris
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        // e.preventDefault(); // Empêche le comportement par défaut
        handleDrag(e.touches[0].clientX); // Utilise la même logique pour le mouvement tactile
    };

    const handleDrag = (currentX) => {
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
            setPosition("theArtist");
        } else if (!isSwippingRight && Math.abs(diff) > 40) {
            setTranslateX("100%");
            handleMouseUp();
            setPosition("kindaCreapy");
        } else setTranslateX(percent + "%");
    };

    const handleMouseUp = () => {
        setIsDragging(false); // Fin du drag
    };

    const handleTouchEnd = () => {
        setIsDragging(false); // Fin du drag tactile
    };

    useEffect(() => {
        const handleTouchMove = (e) => {
            if (!isDragging) return;

            e.preventDefault(); // Empêche le comportement par défaut
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
        };

        const sliderElement = document.getElementById("slider");
        if (sliderElement) {
            sliderElement.addEventListener("touchmove", handleTouchMove, {
                passive: false,
            });
            sliderElement.addEventListener("touchend", handleTouchEnd);
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener("touchmove", handleTouchMove);
                sliderElement.removeEventListener("touchend", handleTouchEnd);
            }
        };
    }, [isDragging]);

    return (
        <div
            id="slider"
            className={`cursor-pointer w-64 text-white text-center flex flex-row transition-all duration-500 transform hover:scale-105 overflow-hidden ${className}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart} // Gestion des événements tactiles
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
