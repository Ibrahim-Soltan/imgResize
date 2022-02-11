import { filenameSplit,readDir } from "../fileSys";
describe("fileSys Functions:",()=>{
    describe("Function filenameSplit:",()=>{
        it("should split sea-100X100.png",()=>{
            expect(filenameSplit("sea-100X200.png")).toEqual({
                filename:"sea",
                width:"100",
                height:"200",
                extension:"png"
            });
        })
        it("should spilt when sea.png leaving ",()=>{
            expect(filenameSplit("sea.png")).toEqual({
                filename:"sea",      
                extension:"png"
            });
        })
    })
    describe("Function readDir:",async()=>{
        it("should return [encenadaport.jpg,fjord.jpg,icelandwaterfall.jpg,palmtunnel.jpg,santamonica.jpg] when imgs is passes",async ()=>{
            expect((await readDir("src/imgs")) as unknown as string).toEqual(["encenadaport.jpg","fjord.jpg","icelandwaterfall.jpg","palmtunnel.jpg","santamonica.jpg"])
        })
    })
})
