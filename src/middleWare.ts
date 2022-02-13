import express  from "express";
import { makePlaceholder } from "./placeholdersFactory";
import { doResize } from "./resize";
import { promises as fsPromises } from "fs";


const midware = async(req:express.Request,res:express.Response,next:Function)=>{
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    let finalImg:unknown;
    if(filename == "placeholder"){ 
        console.log("making placeholder");  
        finalImg = await makePlaceholder(width,height);
        res.sendFile(__dirname+finalImg);
        res.status(200);
    }
    else if(!(await fsPromises.readdir(__dirname+"/imgs")).includes(filename)){
        res.status(404);
        res.send("The required image is not found");
    }
    else{
        finalImg = await doResize(filename,width,height);
        res.sendFile(__dirname+finalImg);
        res.status(200);
    }
    next();
}
export default midware;