import {promises as fsPromises} from "fs";

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

const previouslyProcessed =  async(filename:string,width:number,height:number,extension:string):Promise<boolean>=>{
    const dir = __dirname+(filename=="placeholder"?"\\placeholderCache":"\\cache");
    const previouslyProcessedImgs = await fsPromises.readdir(dir);
    return (previouslyProcessedImgs as unknown as string[]).includes(`${filename}-${width}X${height}.${extension}`);
}


export {
    filenameSplit,
    previouslyProcessed
};