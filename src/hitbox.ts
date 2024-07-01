export class Hitbox {
  x: number;
  y: number;
  w: number;
  h: number;
  constructor(x: number, y: number, w: number, h: number) {
    [this.x, this.y, this.w, this.h] = [x, y, w, h];
  }
}

export function checkCollision(hb1: Hitbox, hb2: Hitbox) {
  if (hb1.x + hb1.w < hb2.x) return false;
  if (hb1.x > hb2.x + hb2.w) return false;
  if (hb1.y > hb2.y + hb2.h) return false;
  if (hb1.y + hb1.h < hb2.y) return false;

  return true;
}
