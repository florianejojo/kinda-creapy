// export const drawTree = (
//     ctx,
//     x: number,
//     y: number,
//     length: number,
//     angle: number,
//     depth: number,
//     branchWidth: number,
//     color1: string,
//     color2: string
// ) => {
//     if (depth === 0) return;

//     ctx.beginPath();
//     ctx.moveTo(x, y);

//     const xEnd = x + length * Math.cos(angle);
//     const yEnd = y - length * Math.sin(angle);

//     ctx.lineTo(xEnd, yEnd);
//     ctx.strokeStyle = depth % 2 === 0 ? color1 : color2;
//     ctx.lineWidth = branchWidth;
//     ctx.stroke();

//     drawTree(
//         ctx,
//         xEnd,
//         yEnd,
//         length * 0.75,
//         angle - Math.PI / 7,
//         depth - 1,
//         branchWidth * 0.7,
//         color1,
//         color2
//     );
//     drawTree(
//         ctx,
//         xEnd,
//         yEnd,
//         length * 0.75,
//         angle + Math.PI / 7,
//         depth - 1,
//         branchWidth * 0.7,
//         color1,
//         color2
//     );
// };

// export const animate = (ctx, canvas) => {
//     if (!ctx) return;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     const time = new Date().getTime() * 0.002;
//     const length = 150 + 50 * Math.sin(time);
//     const angle = Math.PI / 2;

//     drawTree(
//         canvas.width / 2,
//         canvas.height,
//         length,
//         angle,
//         10,
//         10,
//         "green",
//         "blue"
//     );
// };
