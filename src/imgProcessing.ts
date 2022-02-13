import express from "express";
import { makePlaceholder } from "./placeholdersFactory";
import { doResize } from "./resize";
const routes = express.Router();

routes.get("/",async(req,res)=>{
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    let finalImg:unknown;
    if(filename == "placeholder"){ 
        console.log("making placeholder");  
        finalImg = await makePlaceholder(width,height);
        res.sendFile(__dirname+finalImg);
    }
    else{
        finalImg = await doResize(filename,width,height);
        res.sendFile(__dirname+finalImg);
    }
    console.log(__dirname+finalImg);
})
export default routes;

