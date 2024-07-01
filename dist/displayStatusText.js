export function displayStatusText(game) {
    var _a, _b;
    game.ctx.font = "25px Playwrite US Modern";
    game.ctx.fillText(`Player 1: ${(_a = game.car1) === null || _a === void 0 ? void 0 : _a.score}`, 100, 40);
    game.ctx.fillText(`Player 2: ${(_b = game.car2) === null || _b === void 0 ? void 0 : _b.score}`, 100, 80);
}
