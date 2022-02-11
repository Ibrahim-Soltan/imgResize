import express from "express";
import {buildCacheDir,filenameSplit,doResize} from "./fileSys";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const height = req.query.height;
    const width = req.query.width;
    const filename = req.query.filename;
    res.send(`Resizing image ${filename} to ${width}x${height}`);
});

app.listen(port,()=>{
    console.log("Server listen to port "+port);
    buildCacheDir();
});