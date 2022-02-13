const sharp = require("sharp")

const makePlaceholder = async (width:number,height:number):Promise<string>=>{
    const fontSize = Math.min(width,height)/10;
    const overlay = `<svg width="${width - 20}" height="${height - 20}">
    <text x="50%" y="50%" font-family="sans-serif" font-size="${fontSize}" text-anchor="middle">placeholder</text>
  </svg>`;

  await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 200, g: 200, b: 200, alpha: 1 }
    }
  })
    .composite([{
      input: Buffer.from(overlay),
      gravity: 'center',
    }])
    .jpeg()
    .toFile(`${__dirname}/placeholderCache/placeholder-${width}X${height}.png`);
    
    return `\\placeholderCache\\placeholder-${width}X${height}.png`;

}

export {
    makePlaceholder
}
