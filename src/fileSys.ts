import { promises as fsPromises } from 'fs';
import path from 'path/posix';

// TODO: Split filename seaphoto-200X300.jpg to {filename: "seaphoto", width:200, height: 300, extension:"jpg"}
function filenameSplit(file: string): {
  filename: string;
  width?: string;
  height?: string;
  extension: string;
} {
  const filenameWidthHeight = file.split('.')[0];
  const extension = file.split('.')[1];
  const filename = filenameWidthHeight.split('-')[0];
  if (filenameWidthHeight.split('-').length == 1) {
    return { filename, extension };
  }
  const widthHeight = filenameWidthHeight.split('-')[1];
  const width = widthHeight.split('X')[0];
  const height = widthHeight.split('X')[1];
  return { filename, width, height, extension };
}
// TODO: check if an image already exists with the correct resizing.
const previouslyProcessed = async (
  filename: string,
  width: number,
  height: number,
  extension: string
): Promise<boolean> => {
  path.join(
    __dirname,
    filename == 'placeholder' ? 'placeholderCache' : 'cache'
  );
  // TODO: if the filename is placeholder, search in the placeholderCache directory, else search in the cache directory
  const dir = path.join(
    __dirname,
    filename == 'placeholder' ? 'placeholderCache' : 'cache'
  );
  const previouslyProcessedImgs = await fsPromises.readdir(dir);
  // TODO: Return true if the image was previously processed and false otherwise
  return (previouslyProcessedImgs as unknown as string[]).includes(
    `${filename}-${width}X${height}.${extension}`
  );
};

export { filenameSplit, previouslyProcessed };
