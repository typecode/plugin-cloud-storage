"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcsAdapter = void 0;
var storage_1 = require("@google-cloud/storage");
var generateURL_1 = require("./generateURL");
var staticHandler_1 = require("./staticHandler");
var handleDelete_1 = require("./handleDelete");
var handleUpload_1 = require("./handleUpload");
var webpack_1 = require("./webpack");
var gcsAdapter = function (_a) {
    var options = _a.options, bucket = _a.bucket, acl = _a.acl;
    return function (_a) {
        var collection = _a.collection, prefix = _a.prefix;
        var storageClient = null;
        var getStorageClient = function () {
            if (storageClient)
                return storageClient;
            return (storageClient = new storage_1.Storage(options));
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
            generateURL: (0, generateURL_1.getGenerateURL)({ getStorageClient: getStorageClient, bucket: bucket }),
            staticHandler: (0, staticHandler_1.getHandler)({ getStorageClient: getStorageClient, bucket: bucket, collection: collection }),
            webpack: webpack_1.extendWebpackConfig,
        };
    };
};
exports.gcsAdapter = gcsAdapter;
//# sourceMappingURL=index.js.map