"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncomingFiles = void 0;
function getIncomingFiles(_a) {
    var _b;
    var req = _a.req, data = _a.data;
    var file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.file;
    var files = [];
    if (file && data.filename && data.mimeType) {
        var mainFile = {
            filename: data.filename,
            mimeType: data.mimeType,
            buffer: file.data,
            tempFilePath: file.tempFilePath,
            filesize: file.size,
        };
        files = [mainFile];
        if (data === null || data === void 0 ? void 0 : data.sizes) {
            Object.entries(data.sizes).forEach(function (_a) {
                var _b;
                var key = _a[0], resizedFileData = _a[1];
                if (((_b = req.payloadUploadSizes) === null || _b === void 0 ? void 0 : _b[key]) && data.mimeType) {
                    files = files.concat([
                        {
                            filename: "".concat(resizedFileData.filename),
                            mimeType: data.mimeType,
                            buffer: req.payloadUploadSizes[key],
                            filesize: req.payloadUploadSizes[key].length,
                        },
                    ]);
                }
            });
        }
    }
    return files;
}
exports.getIncomingFiles = getIncomingFiles;
//# sourceMappingURL=getIncomingFiles.js.map