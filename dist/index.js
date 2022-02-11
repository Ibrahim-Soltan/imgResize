"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fileSys_1 = require("./fileSys");
var app = (0, express_1.default)();
var port = 3000;
app.get("/", function (req, res) {
    var height = req.query.height;
    var width = req.query.width;
    var filename = req.query.filename;
    res.send("Resizing image ".concat(filename, " to ").concat(height, "x").concat(width));
});
app.listen(port, function () {
    console.log("Server listen to port " + port);
    (0, fileSys_1.buildCacheDir)();
});
