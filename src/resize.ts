import sharp from "sharp";
import { filenameSplit, previouslyProcessed } from "./fileSys";

const doResize = async (filename:string,width:number,height:number):Promise<unknown>=>{

    try{
        const data = filenameSplit(filename);
        const targetPath = `${__dirname}\\cache\\${data.filename}-${width}X${height}.${data.extension}`;
        if(!(await previouslyProcessed(data.filename,width,height,data.extension))){
            await sharp(`${__dirname}\\imgs\\${filename}`).resize(width,height).toFile(targetPath);
        }else{
            console.log("Already processed");
        }
        return `\\cache\\${data.filename}-${width}X${height}.${data.extension}`;

    }catch(err){
        console.log(err);
    }
}

export{
    doResize
}