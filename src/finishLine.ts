import { Game } from "./game";

export class FinishLine {
  x = 0;
  y: number;
  h = 8;
  w: number;
  game: Game;
  constructor(game: Game) {
    [this.game, this.y, this.w] = [
      game,
      game.canvas.height / 2 - this.h / 2,
      game.obstacle.x,
    ];
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.restore();
  }
}
