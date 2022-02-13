import { promises as fsPromises } from 'fs';

// TODO: Check if a directory is created
async function isDirCreated(dir: string): Promise<boolean> {
  try {
    // TODO: Read all directories
    const files: unknown = await fsPromises.readdir(__dirname);
    //TODO: Return true is the directory exists and false otherwise
    return (files as string[]).includes(dir);
  } catch (err) {
    return false;
  }
}

// TODO : Build a directory.
async function buildDir(dir: string): Promise<void> {
  try {
    // TODO: Check if the directory was previously created
    if (!(await isDirCreated(dir))) {
      // TODO: If the directory does not exist, create it
      console.log(`Creating ${dir} directory`);
      await fsPromises.mkdir(__dirname + `\\${dir}`);
    } else {
      // TODO: If the directory was previouslt created, log a message
      console.log(`${dir} directory already created.`);
    }
  } catch (err) {
    console.log(err);
  }
}

// TODO: Build the three main directories
async function buildFileSystem(): Promise<void> {
  try {
    Promise.all([
      //Saves original images
      buildDir('imgs'),
      //Saves processed(Resized) images
      buildDir('cache'),
      //Save created placeholders
      buildDir('placeholderCache'),
    ]);
  } catch (err) {
    console.log(err);
  }
}
export { buildDir, isDirCreated, buildFileSystem };
