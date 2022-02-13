import {promises as fsPromises} from "fs";

async function isDirCreated(dir:string):Promise<boolean>{
    try{
        const files:unknown = await fsPromises.readdir(__dirname);
        return (files as string[]).includes(dir);
    }catch(err){
        return false;
    }
}

async function buildDir(dir:string){
    try{
        if(!(await isDirCreated(dir))){
            await fsPromises.mkdir(__dirname+`\\${dir}`);
        }
        else{
            console.log(`${dir} directory already created.`);
        }
    }catch(err){
        console.log(err);
    }
}
async function buildFileSystem() {
    try{
        Promise.all([buildDir("imgs"),buildDir("cache"),buildDir("placeholderCache")]);
    }catch(err){
        console.log(err);
    }   

}
export{
    buildDir,
    isDirCreated,
    buildFileSystem
}
