"use client";
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";

interface Pixel {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    draw: (ctx: CanvasRenderingContext2D) => void;
    divide: () => Pixel[];
}

const createPixel = (
    x: number,
    y: number,
    vx: number,
    vy: number,
    color: string
): Pixel => {
    return {
        x,
        y,
        vx,
        vy,
        color,
        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(Math.floor(this.x), Math.floor(this.y), 1, 1);
        },
        divide() {
            const shouldDivide = Math.random() < 0.01; // 1% de chance de se diviser
            if (shouldDivide) {
                return [
                    createPixel(
                        this.x,
                        this.y,
                        this.vx + Math.random() - 0.5,
                        this.vy + Math.random() - 0.5,
                        this.color
                    ),
                    createPixel(
                        this.x,
                        this.y,
                        this.vx + Math.random() - 0.5,
                        this.vy + Math.random() - 0.5,
                        this.color
                    ),
                ];
            } else {
                return [this];
            }
        },
    };
};

export const AlgoBlood: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const pixelsRef = useRef<Pixel[]>([]);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Indique que le composant est monté côté client
    }, []);

    useEffect(() => {
        if (!isClient) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Crée le pixel initial en bas de l'écran
        pixelsRef.current = [
            createPixel(canvas.width / 2, canvas.height, 0.1, -0.1, "brown"), // vy négatif pour monter
        ];

        function draw() {
            if (!ctx) return;
            const newPixels: Pixel[] = [];
            pixelsRef.current.forEach((pixel) => {
                pixel.draw(ctx);
                pixel.x += pixel.vx;
                pixel.y += pixel.vy;
                newPixels.push(...pixel.divide());
            });
            pixelsRef.current = newPixels;
            rafRef.current = window.requestAnimationFrame(draw);
        }

        rafRef.current = window.requestAnimationFrame(draw);

        const stopTimeout = setTimeout(() => {
            if (rafRef.current) {
                window.cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        }, 10000);

        return () => {
            if (rafRef.current) {
                window.cancelAnimationFrame(rafRef.current);
            }
            clearTimeout(stopTimeout);
        };
    }, [isClient]);

    return (
        <canvas
            ref={canvasRef}
            width={isClient ? window.innerWidth : 0}
            height={isClient ? window.innerHeight : 0}
            className="bg-inherit fixed z-0 "
        />
    );
};
