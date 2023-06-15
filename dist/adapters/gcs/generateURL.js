"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenerateURL = void 0;
var path_1 = __importDefault(require("path"));
var getGenerateURL = function (_a) {
    var getStorageClient = _a.getStorageClient, bucket = _a.bucket;
    return function (_a) {
        var filename = _a.filename, _b = _a.prefix, prefix = _b === void 0 ? '' : _b;
        return decodeURIComponent(getStorageClient().bucket(bucket).file(path_1.default.posix.join(prefix, filename)).publicUrl());
    };
};
exports.getGenerateURL = getGenerateURL;
//# sourceMappingURL=generateURL.js.map