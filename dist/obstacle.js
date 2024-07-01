import { Hitbox } from "./hitbox.js";
export class Obstacle {
    constructor() {
        this.w = 100;
        [this.x, this.y, this.h] = [
            window.innerWidth / 2 - this.w / 2,
            100,
            window.innerHeight - 200,
        ];
        this.hitbox = new Hitbox(this.x, this.y, this.w, this.h);
    }
    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}
