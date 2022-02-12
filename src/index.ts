import express from "express";
import {buildCacheDir,filenameSplit,doResize} from "./fileSys";
const app = express();
const port = 3000;

app.get("/",async(req,res)=>{
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const finalImg = await doResize(filename,width,height);
    res.sendFile(__dirname+finalImg);
});

app.listen(port,()=>{
    console.log("Server listen to port "+port);
    buildCacheDir();
});

//http://localhost:3000/?filename=fjord.jpg&width=200&height=200