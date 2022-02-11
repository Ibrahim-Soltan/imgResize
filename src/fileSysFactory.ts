import {promises as fsPromises} from "fs";
async function buildCacheDir(){
    try{
        if(!(await isCacheDirCreated())){
            await fsPromises.mkdir("src/cache");
        }
        else{
            console.log("Cache directory already created.");
        }
    }catch(err){
        console.log(err);
    }
}

async function isCacheDirCreated():Promise<boolean>{
    try{
        const files:unknown = await readFileSys();
        return (files as string[]).includes("cache");
    }catch(err){
        return false;
    }
}    

async function readFileSys(){
    try {
        const files = await fsPromises.readdir("src");
        return files;
      } catch (err) {
        console.error(err);
      }
}




export default buildCacheDir;