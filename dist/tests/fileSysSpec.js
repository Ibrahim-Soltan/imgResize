"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileSys_1 = require("../fileSys");
describe("fileSys Functions:", function () {
    describe("Function filenameSplit:", function () {
        it("should return [\"sea\",\"100\",\"200\",\"png\"] when sea-100X100.png is passed", function () {
            expect((0, fileSys_1.filenameSplit)("sea-100X100.png")).toEqual(["sea", "100", "100", "png"]);
        });
    });
});
