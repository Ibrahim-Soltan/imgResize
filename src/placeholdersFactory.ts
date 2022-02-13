


const { svg } = require("svg-text-util")
const sharp = require("sharp")

const makePlaceholder = (width:number,height:number):string=>{
    const textSize = Math.min(width,height)/4;
    const buffer = svg(1000, 400)
        .text('placeholder', { size: textSize, color: 'red', align: 'center' })
        .   buffer()

    sharp(buffer)
        .png()
            .toFile(`${__dirname}/placeholderCache/placeholder-${width}X${height}.png`);
    
    return `\\placeholderCache\\placeholder-${width}X${height}.png`;

}

export {
    makePlaceholder
}