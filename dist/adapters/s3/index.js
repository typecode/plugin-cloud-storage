"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Adapter = void 0;
var AWS = __importStar(require("@aws-sdk/client-s3"));
var generateURL_1 = require("./generateURL");
var staticHandler_1 = require("./staticHandler");
var handleDelete_1 = require("./handleDelete");
var handleUpload_1 = require("./handleUpload");
var webpack_1 = require("./webpack");
var s3Adapter = function (_a) {
    var _b = _a.config, config = _b === void 0 ? {} : _b, bucket = _a.bucket, acl = _a.acl;
    return function (_a) {
        var collection = _a.collection, prefix = _a.prefix;
        var storageClient = null;
        var getStorageClient = function () {
            if (storageClient)
                return storageClient;
            storageClient = new AWS.S3(config);
            return storageClient;
        };
        return {
            handleUpload: (0, handleUpload_1.getHandleUpload)({
                collection: collection,
                getStorageClient: getStorageClient,
                bucket: bucket,
                acl: acl,
                prefix: prefix,
            }),
            handleDelete: (0, handleDelete_1.getHandleDelete)({ getStorageClient: getStorageClient, bucket: bucket }),
            generateURL: (0, generateURL_1.getGenerateURL)({ bucket: bucket, config: config }),
            staticHandler: (0, staticHandler_1.getHandler)({ bucket: bucket, getStorageClient: getStorageClient, collection: collection }),
            webpack: webpack_1.extendWebpackConfig,
        };
    };
};
exports.s3Adapter = s3Adapter;
//# sourceMappingURL=index.js.map