import { loadAllAssets } from "./assets.js";
import { Car } from "./car.js";
import { displayStatusText } from "./displayStatusText.js";
import { FinishLine } from "./finishLine.js";
import { Input } from "./input.js";
import { Obstacle } from "./obstacle.js";

export class Game {
  lastTime = 0;
  canvas = document.querySelector("canvas") as HTMLCanvasElement;
  ctx = this.canvas.getContext("2d")!;
  images: { name: string; image: HTMLImageElement }[] = [];
  car1: Car | undefined;
  car2: Car | undefined;
  obstacle = new Obstacle();
  input = new Input();
  finishLine: FinishLine;
  constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.finishLine = new FinishLine(this);
    loadAllAssets(this.ctx).then((images) => {
      this.images = images;

      this.car1 = new Car(
        300,
        this.finishLine.y,
        this.images[1].image,
        this,
        1
      );
      this.car2 = new Car(
        400,
        this.finishLine.y,
        this.images[0].image,
        this,
        2
      );
    });

    this.update = this.update.bind(this);
  }
  update(timeStamp: number) {
    const deltatime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    [this.car1, this.car2].forEach((elem) => {
      if (elem != undefined) {
        elem.draw(this.ctx);
        elem.update(deltatime);
      }
    });
    [this.obstacle, this.finishLine].forEach((elem) => {
      elem.draw(this.ctx);
    });

    displayStatusText(this);

    requestAnimationFrame(this.update);
  }
}
