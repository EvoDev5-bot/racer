import { checkCollision, Hitbox } from "./hitbox.js";
export class Car {
    constructor(x, y, image, game, playerNo) {
        this.w = 64;
        this.h = 64;
        this.speed = 0;
        this.angle = (Math.PI / 180) * -90;
        this.above = true;
        this.score = 0;
        this.left = true;
        [this.x, this.y, this.image, this.game, this.playerNo] = [
            x,
            y,
            image,
            game,
            playerNo,
        ];
        this.hitbox = new Hitbox(this.x, this.y, this.w, this.h);
    }
    update(deltatime) {
        const prevX = this.x;
        const prevY = this.y;
        const input = this.game.input.keys;
        if (this.y > this.game.finishLine.y && this.above) {
            if (this.left)
                this.score--;
            this.above = false;
        }
        if (this.y + this.h < this.game.finishLine.y && !this.above) {
            if (this.left)
                this.score++;
            this.above = true;
        }
        if (this.x + this.w < this.game.obstacle.x)
            this.left = true;
        else
            this.left = false;
        [this.hitbox.x, this.hitbox.y] = [this.x, this.y];
        this.x += this.speed * deltatime * 0.1 * Math.cos(this.angle);
        this.y += this.speed * deltatime * 0.1 * Math.sin(this.angle);
        if (checkCollision(this.hitbox, this.game.obstacle.hitbox)) {
            this.x -=
                this.speed * deltatime * 0.1 * Math.cos(this.angle) * 3 * this.speed;
            this.y -=
                this.speed * deltatime * 0.1 * Math.sin(this.angle) * 3 * this.speed;
            this.speed = 0;
        }
        if (this.playerNo == 1) {
            if (input.indexOf("ArrowRight") != -1)
                this.angle += 0.0008 * deltatime;
            if (input.indexOf("ArrowLeft") != -1)
                this.angle -= 0.0008 * deltatime;
            if (input.indexOf("ArrowUp") != -1)
                this.speed += 0.001 * deltatime;
            if (input.indexOf("ArrowDown") != -1 && this.speed != 0)
                this.speed -= 0.001 * deltatime;
        }
        else {
            if (input.indexOf("d") != -1)
                this.angle += 0.0004 * deltatime;
            if (input.indexOf("a") != -1)
                this.angle -= 0.0004 * deltatime;
            if (input.indexOf("w") != -1)
                this.speed += 0.001 * deltatime;
            if (input.indexOf("s") != -1)
                this.speed -= 0.001 * deltatime;
        }
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, 0, 0);
        ctx.restore();
    }
}
