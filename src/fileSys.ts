import {promises as fsPromises} from "fs";
const sharp = require("sharp");
async function buildCacheDir(){
    try{
        if(!(await isCacheDirCreated())){
            await fsPromises.mkdir("src/cache");
        }
        else{
            console.log("Cache directory already created.");
        }
    }catch(err){
        console.log(err);
    }
}

async function isCacheDirCreated():Promise<boolean>{
    try{
        const files:unknown = await readFileSys();
        return (files as string[]).includes("cache");
    }catch(err){
        return false;
    }
}    

async function readDir(dir:string) {
    try {
        const files = await fsPromises.readdir(dir);
        return files;
      } catch (err) {
        console.error(err);
      } 
}

async function readFileSys(){
    return readDir("src");
}

function filenameSplit(file:string):{filename:string,width?:string,height?:string,extension:string}{
    const filenameWidthHeight = file.split(".")[0];
    const extension = file.split(".")[1];
    const filename = filenameWidthHeight.split("-")[0];
    if(filenameWidthHeight.split("-").length == 1){
        return {filename,extension};
    }
    const widthHeight = filenameWidthHeight.split("-")[1];
    const width = widthHeight.split("X")[0];
    const height= widthHeight.split("X")[1];
    return {filename,width,height,extension};
}

const doResize = async (filename:string,width:number,height:number):Promise<unknown>=>{

    try{
        const data = filenameSplit(filename);
        const targetPath = `src/cache/${data.filename}-${width}X${height}.${data.extension}`;
        await sharp(`src/imgs/${filename}`).resize(width,height).toFile(targetPath);
        return `/cache/${data.filename}-${width}X${height}.${data.extension}`;
    }catch(err){
        console.log(err);
    }
}


export {
    buildCacheDir,
    filenameSplit,
    doResize,
    readDir
};