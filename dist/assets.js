var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function loadAllAssets(ctx) {
    let images = [];
    const assets = ["BlackOut.png", "BlueStrip.png"];
    let assetsLoaded = 0;
    function loadAsset(asset) {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = asset;
            image.onload = () => {
                resolve(image);
            };
        });
    }
    function loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            const imageAssets = [];
            const assetPromises = assets.map((asset) => {
                return loadAsset(`./assets/${asset}`).then((image) => {
                    imageAssets.push({ name: asset, image: image });
                    assetsLoaded++;
                });
            });
            yield Promise.all(assetPromises);
            return imageAssets;
        });
    }
    function updateAssetDisplay(ctx) {
        ctx.font = "40px Arial";
        ctx.textAlign = "center";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillText(`Loading asset: ${assets[assetsLoaded]}`, ctx.canvas.width / 2, ctx.canvas.height / 2);
        if (assetsLoaded != 2)
            requestAnimationFrame(() => updateAssetDisplay(ctx));
        else {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }
    updateAssetDisplay(ctx);
    return loadAssets();
}
