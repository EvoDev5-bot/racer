import { Game } from "./game";

export function displayStatusText(game: Game) {
  game.ctx.font = "25px Playwrite US Modern";

  game.ctx.fillText(`Player 1: ${game.car1?.score}`, 100, 40);
  game.ctx.fillText(`Player 2: ${game.car2?.score}`, 100, 80);
}
