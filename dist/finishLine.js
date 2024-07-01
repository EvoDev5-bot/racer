export class FinishLine {
    constructor(game) {
        this.x = 0;
        this.h = 8;
        [this.game, this.y, this.w] = [
            game,
            game.canvas.height / 2 - this.h / 2,
            game.obstacle.x,
        ];
    }
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }
}
