export function loadAllAssets(ctx: CanvasRenderingContext2D) {
  let images: { name: string; image: unknown }[] = [];

  const assets = ["BlackOut.png", "BlueStrip.png"];
  let assetsLoaded = 0;

  function loadAsset(asset: string): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = asset;
      image.onload = () => {
        resolve(image);
      };
    });
  }

  async function loadAssets(): Promise<
    Array<{
      name: string;
      image: HTMLImageElement;
    }>
  > {
    const imageAssets: Array<{ name: string; image: HTMLImageElement }> = [];

    const assetPromises = assets.map((asset) => {
      return loadAsset(`./assets/${asset}`).then((image) => {
        imageAssets.push({ name: asset, image: image });
        assetsLoaded++;
      });
    });

    await Promise.all(assetPromises);

    return imageAssets;
  }

  function updateAssetDisplay(ctx: CanvasRenderingContext2D) {
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillText(
      `Loading asset: ${assets[assetsLoaded]}`,
      ctx.canvas.width / 2,
      ctx.canvas.height / 2
    );
    if (assetsLoaded != 2) requestAnimationFrame(() => updateAssetDisplay(ctx));
    else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }
  updateAssetDisplay(ctx);
  return loadAssets();
}
