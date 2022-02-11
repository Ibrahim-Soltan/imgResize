"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileSys_1 = require("../fileSys");
describe("fileSys Functions:", function () {
    describe("Function filenameSplit:", function () {
        it("should split sea-100X100.png", function () {
            expect((0, fileSys_1.filenameSplit)("sea-100X200.png")).toEqual({
                filename: "sea",
                width: "100",
                height: "200",
                extension: "png"
            });
        });
        it("should spilt when sea.png leaving ", function () {
            expect((0, fileSys_1.filenameSplit)("sea.png")).toEqual({
                filename: "sea",
                extension: "png"
            });
        });
    });
});
