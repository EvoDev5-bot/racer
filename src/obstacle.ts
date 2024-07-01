import { Hitbox } from "./hitbox.js";

export class Obstacle {
  x: number;
  y: number;
  w = 100;
  h: number;
  hitbox: Hitbox;
  constructor() {
    [this.x, this.y, this.h] = [
      window.innerWidth / 2 - this.w / 2,
      100,
      window.innerHeight - 200,
    ];
    this.hitbox = new Hitbox(this.x, this.y, this.w, this.h);
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
