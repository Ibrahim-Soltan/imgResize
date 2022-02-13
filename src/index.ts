import express from "express";
import routes from "./imgProcessing";
import { buildFileSystem } from "./buildFileSys";
import midware from "./middleWare";
const app = express();
const port = 3000;

app.use("/api",routes);

app.listen(port,()=>{
    console.log("Server listen to port "+port);
    buildFileSystem();
});

export default app;


//http://localhost:3000/?filename=fjord.jpg&width=200&height=200

//D:\FWD Web Dev\Advanced\imgResize\src\placeholderCache\placeholder-300X300.png