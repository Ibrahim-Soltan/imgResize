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
// TODO: setup a server that uses router(routes) with path /api
app.use('/api', imgProcessing_1.default);
app.listen(port, function () {
    console.log('Server listen to port ' + port);
    // TODO: Build the filesystem (The three main directories) when the server starts
    (0, buildFileSys_1.buildFileSystem)();
});
exports.default = app;
//http://localhost:3000/api/?filename=placeholder&width=200&height=200 -> Displays a placeholder
//http://localhost:3000/api/?filename=palmtunnel.jpg&width=200&height=200 -> Resizes the image
//http://localhost:3000/api/?filename=notfound.jpg&width=200&height=200 -> Displays "The required images was not found"
