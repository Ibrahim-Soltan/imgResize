import { filenameSplit } from "../fileSys";
describe("fileSys Functions:",()=>{
    describe("Function filenameSplit:",()=>{
        it("should return [\"sea\",\"100\",\"200\",\"png\"] when sea-100X100.png is passed",()=>{
            expect(filenameSplit("sea-100X100.png")).toEqual(["sea","100","100","png"]);
        })
    })
})
