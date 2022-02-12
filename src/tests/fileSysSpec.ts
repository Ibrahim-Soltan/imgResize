import { filenameSplit,readDir,previouslyProcessed } from "../fileSys";
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
    fdescribe("Function previouslyProcessed:",()=>{
        it("should return true when fjord 200 200 jpg is passed",async()=>{
            expect(await previouslyProcessed("fjord",200,200,"jpg")).toEqual(true);
        })
        it("should return false when fjord 400 400 jpg is passed",async()=>{
            expect(await previouslyProcessed("fjord",400,400,"jpg")).toEqual(false);
        })
    })
})
