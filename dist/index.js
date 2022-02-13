"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgProcessing_1 = __importDefault(require("./imgProcessing"));
var buildFileSys_1 = require("./buildFileSys");
var app = (0, express_1.default)();
var port = 3000;
app.use("/api", imgProcessing_1.default);
app.listen(port, function () {
    console.log("Server listen to port " + port);
    (0, buildFileSys_1.buildFileSystem)();
});
exports.default = app;
//http://localhost:3000/?filename=fjord.jpg&width=200&height=200
//D:\FWD Web Dev\Advanced\imgResize\src\placeholderCache\placeholder-300X300.png
