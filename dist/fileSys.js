"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.previouslyProcessed = exports.readDir = exports.doResize = exports.filenameSplit = exports.buildCacheDir = void 0;
var fs_1 = require("fs");
var sharp = require("sharp");
function buildCacheDir() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, isCacheDirCreated()];
                case 1:
                    if (!!(_a.sent())) return [3 /*break*/, 3];
                    return [4 /*yield*/, fs_1.promises.mkdir("src/cache")];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Cache directory already created.");
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.buildCacheDir = buildCacheDir;
function isCacheDirCreated() {
    return __awaiter(this, void 0, void 0, function () {
        var files, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, readFileSys()];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.includes("cache")];
                case 2:
                    err_2 = _a.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function readDir(dir) {
    return __awaiter(this, void 0, void 0, function () {
        var files, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_1.promises.readdir(dir)];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files];
                case 2:
                    err_3 = _a.sent();
                    console.error(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.readDir = readDir;
function readFileSys() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, readDir("src")];
        });
    });
}
function filenameSplit(file) {
    var filenameWidthHeight = file.split(".")[0];
    var extension = file.split(".")[1];
    var filename = filenameWidthHeight.split("-")[0];
    if (filenameWidthHeight.split("-").length == 1) {
        return { filename: filename, extension: extension };
    }
    var widthHeight = filenameWidthHeight.split("-")[1];
    var width = widthHeight.split("X")[0];
    var height = widthHeight.split("X")[1];
    return { filename: filename, width: width, height: height, extension: extension };
}
exports.filenameSplit = filenameSplit;
var doResize = function (filename, width, height) { return __awaiter(void 0, void 0, void 0, function () {
    var data, targetPath, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                data = filenameSplit(filename);
                targetPath = "src/cache/".concat(data.filename, "-").concat(width, "X").concat(height, ".").concat(data.extension);
                return [4 /*yield*/, sharp("src/imgs/".concat(filename)).resize(width, height).toFile(targetPath)];
            case 1:
                _a.sent();
                return [2 /*return*/, "/cache/".concat(data.filename, "-").concat(width, "X").concat(height, ".").concat(data.extension)];
            case 2:
                err_4 = _a.sent();
                console.log(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.doResize = doResize;
var previouslyProcessed = function (filename, width, height, extension) { return __awaiter(void 0, void 0, void 0, function () {
    var previouslyProcessedImgs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, readDir("src/cache")];
            case 1:
                previouslyProcessedImgs = _a.sent();
                return [2 /*return*/, previouslyProcessedImgs.includes("".concat(filename, "-").concat(width, "X").concat(height, ".").concat(extension))];
        }
    });
}); };
exports.previouslyProcessed = previouslyProcessed;
