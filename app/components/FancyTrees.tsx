// const MASK = 0xffffffff;
// const LEAVES_SIZE = 200;
// const SPREAD = 0.6;
// const MAX_BRANCH_WIDTH = 10;

// class Tree {
//     constructor(seed, x) {
//         this.seed = seed;
//         this.x = x;
//     }

//     random() {
//         this.m_z = (36969 * (this.m_z & 65535) + (this.m_z >> 16)) & MASK;
//         this.m_w = (18000 * (this.m_w & 65535) + (this.m_w >> 16)) & MASK;
//         var result = ((this.m_z << 16) + (this.m_w & 65535)) >>> 0;
//         result /= 4294967296;
//         return result;
//     }

//     draw(ctx, h, w, x, _callback = () => {}) {
//         this.m_w = (123456789 + this.seed) & MASK;
//         this.m_z = (987654321 - this.seed) & MASK;

//         this.ctx = ctx;
//         this.height = h;
//         this.width = w;
//         this.ctx.translate(x, this.height);
//         this.leavesColor =
//             "#" +
//             (0x1000000 + this.random() * 0xffffff).toString(16).substr(1, 6);
//         this.ctx.lineWidth = 1 + this.random() * MAX_BRANCH_WIDTH;
//         this.ctx.lineJoin = "round";
//         this.branch(0);
//         _callback(true);
//     }

//     branch(depth) {
//         if (depth < 12) {
//             this.ctx.beginPath();
//             this.ctx.moveTo(0, 0);
//             this.ctx.lineTo(0, -50);

//             this.ctx.stroke();

//             this.ctx.translate(0, -50);
//             var randomN = -(this.random() * 0.1) + 0.1;

//             this.ctx.rotate(randomN);

//             if (this.random() * 1 < SPREAD) {
//                 this.ctx.rotate(-0.35);
//                 this.ctx.scale(0.7, 0.7);
//                 this.ctx.save();
//                 this.branch(depth + 1);
//                 this.ctx.restore();
//                 this.ctx.rotate(0.6);
//                 this.ctx.save();
//                 this.branch(depth + 1);
//                 this.ctx.restore();
//             } else {
//                 this.branch(depth);
//             }
//         } else {
//             var lengthFactor = 200;
//             this.ctx.fillStyle = this.leavesColor;
//             this.ctx.fillRect(0, 0, LEAVES_SIZE, lengthFactor);
//             this.ctx.stroke();
//         }
//     }
// }
