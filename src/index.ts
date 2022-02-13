import express from "express";
import path from "path/posix";
import {doResize} from "./fileSys";
import { makePlaceholder } from "./placeholdersFactory";
const app = express();
const port = 3000;

app.get("/",async(req,res)=>{
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
    
});

app.listen(port,()=>{
    console.log("Server listen to port "+port);
});

//http://localhost:3000/?filename=fjord.jpg&width=200&height=200

//D:\FWD Web Dev\Advanced\imgResize\src\placeholderCache\placeholder-300X300.png