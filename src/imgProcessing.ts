import express from "express";
import midware from "./middleWare";
const routes = express.Router();

routes.get("/",midware,async(req,res)=>{

})
export default routes;

