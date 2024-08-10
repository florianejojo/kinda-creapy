// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { artworks } from "@/data/artwork";
// interface Pixel {
//     x: number;
//     y: number;
//     vx: number;
//     vy: number;
//     color: string;
//     draw: (ctx: CanvasRenderingContext2D) => void;
//     divide: () => Pixel[];
// }
// const createPixel = (
//     x: number,
//     y: number,
//     vx: number,
//     vy: number,
//     color: string
// ): Pixel => {
//     return {
//         x,
//         y,
//         vx,
//         vy,
//         color,
//         draw(ctx: CanvasRenderingContext2D) {
//             ctx.fillStyle = this.color;
//             ctx.fillRect(Math.floor(this.x), Math.floor(this.y), 1, 1);
//         },
//         divide() {
//             // Probabilité de division
//             const shouldDivide = Math.random() < 0.01; // 5% de chance de se diviser
//             if (shouldDivide) {
//                 // Crée deux nouveaux pixels avec des directions légèrement différentes
//                 return [
//                     createPixel(
//                         this.x,
//                         this.y,
//                         this.vx + Math.random() - 0.5,
//                         this.vy + Math.random() - 0.5,
//                         this.color
//                     ),
//                     createPixel(
//                         this.x,
//                         this.y,
//                         this.vx + Math.random() - 0.5,
//                         this.vy + Math.random() - 0.5,
//                         this.color
//                     ),
//                 ];
//             } else {
//                 return [this];
//             }
//         },
//     };
// };

// export const TreeCanvas: React.FC = ({ children }) => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const rafRef = useRef<number | null>(null);
//     const runningRef = useRef<boolean>(false);
//     const pixelsRef = useRef<Pixel[]>([]);
//     const [secondes, setSecondes] = useState(0)

//     const interval = setInterval(() => {
//         console.log(secondes)
//         setSecondes(secondes + 1)

//     }, 1000)

//     useEffect(() => {
//         runningRef.current =

//     }, [])

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;
//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         // Crée le pixel initial en bas de l'écran
//         pixelsRef.current = [
//             createPixel(canvas.width / 2, canvas.height, 0.1, -0.1, "brown"), // vy négatif pour monter
//         ];

//         function draw() {
//             // Pour chaque pixel, dessiner et gérer la division
//             const newPixels: Pixel[] = [];
//             pixelsRef.current.forEach((pixel) => {
//                 pixel.draw(ctx);
//                 pixel.x += pixel.vx;
//                 pixel.y += pixel.vy;

//                 // Diviser le pixel si nécessaire et ajouter à la liste des nouveaux pixels
//                 newPixels.push(...pixel.divide());
//             });

//             // Mettre à jour la liste des pixels
//             pixelsRef.current = newPixels;

//             // Continuer l'animation
//             rafRef.current = window.requestAnimationFrame(draw);
//         }

//         // Démarrer l'animation au clic
//         canvas.addEventListener("click", function () {
//             if (!runningRef.current) {
//                 rafRef.current = window.requestAnimationFrame(draw);
//                 runningRef.current = true;
//             }
//         });

//         // Arrêter l'animation lorsque la souris quitte le canvas
//         canvas.addEventListener("mouseout", function () {
//             if (rafRef.current) {
//                 window.cancelAnimationFrame(rafRef.current);
//                 runningRef.current = false;
//             }
//         });

//         // Nettoyage des écouteurs d'événements
//         return () => {
//             if (canvas) {
//                 canvas.removeEventListener("click", () =>
//                     window.requestAnimationFrame(draw)
//                 );
//                 canvas.removeEventListener("mouseout", () =>
//                     window.cancelAnimationFrame(rafRef.current!)
//                 );
//             }
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             width={window.innerWidth}
//             height={window.innerHeight}
//             className="bg-inherit fixed z-0"
//         ></canvas>
//     );
// };
