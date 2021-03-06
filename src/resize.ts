import path from 'path/posix';
import sharp from 'sharp';
import { filenameSplit, previouslyProcessed } from './fileSys';

// Note: the cache directory is created when the server starts ... See listen function in index.ts line 14.
// TODO: Resize an image
const doResize = async (
  filename: string,
  width: number,
  height: number
): Promise<unknown> => {
  try {
    // TODO: Splits the filename
    const data = filenameSplit(filename);

    const targetPath = path.join(
      __dirname,
      'cache',
      `${data.filename}-${width}X${height}.${data.extension}`
    );
    //TODO: Check if the resizing was previously processed
    if (
      !(await previouslyProcessed(data.filename, width, height, data.extension))
    ) {
      //TODO: Resize the image and store it in the correct directory(cache), name it image-widthXheight.png to be able to find it later

      await sharp(path.join(__dirname, 'imgs', filename))
        .resize(width, height, { fit: 'fill' })
        .toFile(targetPath);
    } else {
      console.log('The request was previously processed');
    }
    //TODO: Return the correct filename and filepath to the middle ware to be able to display it
    return path.join(
      'cache',
      `${data.filename}-${width}X${height}.${data.extension}`
    );
  } catch (err) {
    console.log(err);
  }
};

export { doResize };
