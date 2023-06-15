"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.azureBlobStorageAdapter = void 0;
var storage_blob_1 = require("@azure/storage-blob");
var staticHandler_1 = require("./staticHandler");
var generateURL_1 = require("./generateURL");
var handleDelete_1 = require("./handleDelete");
var handleUpload_1 = require("./handleUpload");
var webpack_1 = require("./webpack");
var azureBlobStorageAdapter = function (_a) {
    var connectionString = _a.connectionString, allowContainerCreate = _a.allowContainerCreate, containerName = _a.containerName, baseURL = _a.baseURL;
    var storageClient = null;
    var getStorageClient = function () {
        if (storageClient)
            return storageClient;
        var blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(connectionString);
        return (storageClient = blobServiceClient.getContainerClient(containerName));
    };
    var createContainerIfNotExists = function () {
        getStorageClient().createIfNotExists({ access: 'blob' });
    };
    return function (_a) {
        var collection = _a.collection, prefix = _a.prefix;
        return __assign({ handleUpload: (0, handleUpload_1.getHandleUpload)({
                collection: collection,
                getStorageClient: getStorageClient,
                prefix: prefix,
            }), handleDelete: (0, handleDelete_1.getHandleDelete)({ collection: collection, getStorageClient: getStorageClient }), generateURL: (0, generateURL_1.getGenerateURL)({ containerName: containerName, baseURL: baseURL }), staticHandler: (0, staticHandler_1.getHandler)({ getStorageClient: getStorageClient, collection: collection }), webpack: webpack_1.extendWebpackConfig }, (allowContainerCreate && { onInit: createContainerIfNotExists }));
    };
};
exports.azureBlobStorageAdapter = azureBlobStorageAdapter;
//# sourceMappingURL=index.js.map