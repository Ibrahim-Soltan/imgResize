import path from 'path/posix';
import sharp from 'sharp';
import { previouslyProcessed } from './fileSys';

// Note: the placeholderCache directory is created when the server starts.

// TODO: Create a placeholder image
const makePlaceholder = async (
  width: number,
  height: number
): Promise<string> => {
  // TODO: Check if the required placeholder was previously created
  if (!(await previouslyProcessed('placeholder', width, height, 'png'))) {
    // TODO: Make the font size suitable for the image size
    const fontSize = Math.min(width, height) / 10;
    const overlay = `<svg width="${width - 20}" height="${height - 20}">
    <text x="50%" y="50%" font-family="sans-serif" font-size="${fontSize}" text-anchor="middle">placeholder</text>
  </svg>`;
    //TODO: name the file placeholder-widthXheight.png to be able to find it later.
    await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 200, g: 200, b: 200, alpha: 1 },
      },
    })
      .composite([
        {
          input: Buffer.from(overlay),
          gravity: 'center',
        },
      ])
      .jpeg()

      .toFile(
        path.join(
          __dirname,
          'placeholderCache',
          `placeholder-${width}X${height}.png`
        )
      );
  } else {
    console.log('The request was previously processed');
  }
  //TODO: Return the filepath of the required place to the middleware to display it.

  return path.join('placeholderCache', `placeholder-${width}X${height}.png`);
};

export { makePlaceholder };
