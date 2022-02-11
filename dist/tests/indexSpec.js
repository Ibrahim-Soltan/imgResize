"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
it("should return 1 when 8 is passed", function () {
    expect((0, index_1.default)(8)).toEqual(1);
});
it("should return 0 when 7 is passed", function () {
    expect((0, index_1.default)(7)).toEqual(0);
});
