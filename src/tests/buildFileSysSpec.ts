import { buildDir, isDirCreated,buildFileSystem } from "../buildFileSys";
describe("buildFileSys Functions",()=>{
    describe("Function buildDir",()=>{
        it("should create an imgs dir",async()=>{
            await buildDir("imgs");
            expect(await isDirCreated("imgs")).toEqual(true);
        })
        it("should create a cache dir",async()=>{
            await buildDir("cache");
            expect(await isDirCreated("cache")).toEqual(true);
        })
        it("should create a placeholderCache dir",async()=>{
            await buildDir("placeholderCache");
            expect(await isDirCreated("placeholderCache")).toEqual(true);
        })
    })
    describe("Function buildFileSystem",()=>{
        it("should create (imgs,cache,placeholderCache) dirs",async()=>{
            await buildFileSystem();
            expect(
                await isDirCreated("imgs")==true &&
                 await isDirCreated("cache") == true&&
                 await isDirCreated("placeholderCache")==true)
                 .toEqual(true);
        })
    })
})