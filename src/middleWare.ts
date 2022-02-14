import express from 'express';
import { makePlaceholder } from './placeholdersFactory';
import { doResize } from './resize';
import { promises as fsPromises } from 'fs';
import path from 'path/posix';

// TODO: Middle Ware that handles the requests
const midware = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  // TODO: Read the filename, width and height from the request query
  const filename = req.query.filename as string;

  console.log('\n\n');
  console.log('Request sent:');
  let finalImg: unknown;
  // TODO: Validate that width and height are numbers
  if (
    isNaN(req.query.width as unknown as number) ||
    isNaN(req.query.height as unknown as number)
  ) {
    console.log('Invalid width and/or height.');
    res.status(400);
    res.send('Invalid width and/or height.');
  } else {
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    if (filename == 'placeholder') {
      console.log(`Make placeholder dimensions:${width}X${height}.`);
      // TODO: make a placeholder image
      finalImg = await makePlaceholder(width, height);
      // TODO: Display the placeholder to the user
      res.sendFile(path.join(__dirname, finalImg as string));
      res.status(200);
    } else if (
      !(await fsPromises.readdir(__dirname + '/imgs')).includes(filename)
    ) {
      // TODO: If the filename is not placeholder and is not found in the images file reject the request.
      console.log('Request deneid ... The required image is not found.');
      res.status(404);
      res.send('The required image is not found');
    } else {
      console.log(`Resize ${filename} to ${width}X${height}.`);
      //TODO: Resize the image.
      finalImg = await doResize(filename, width, height);
      //TODO: Display the image.
      res.sendFile(path.join(__dirname, finalImg as string));
      res.status(200);
    }
  }
  next();
};
export default midware;
