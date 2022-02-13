"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middleWare_1 = __importDefault(require("./middleWare"));
var routes = express_1.default.Router();
// TODO: Setup a route that uses midware as a middleware
routes.get('/', middleWare_1.default, function () {
    //TODO: Handles the request
});
exports.default = routes;
