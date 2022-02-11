import express from "express";
import buildCacheDir from "./fileSysFactory";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Resizing Images...");
});

app.listen(port,()=>{
    console.log("Server listen to port "+port);
    buildCacheDir();
});