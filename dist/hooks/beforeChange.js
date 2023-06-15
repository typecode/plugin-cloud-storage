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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.getBeforeChangeHook = void 0;
var getIncomingFiles_1 = require("../utilities/getIncomingFiles");
var getBeforeChangeHook = function (_a) {
    var collection = _a.collection, adapter = _a.adapter;
    return function (_a) {
        var req = _a.req, data = _a.data, originalDoc = _a.originalDoc;
        return __awaiter(void 0, void 0, void 0, function () {
            var files, filesToDelete, deletionPromises, promises, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        files = (0, getIncomingFiles_1.getIncomingFiles)({ req: req, data: data });
                        if (!(files.length > 0)) return [3 /*break*/, 4];
                        if (!originalDoc) return [3 /*break*/, 2];
                        filesToDelete = [];
                        if (typeof (originalDoc === null || originalDoc === void 0 ? void 0 : originalDoc.filename) === 'string') {
                            filesToDelete.push(originalDoc.filename);
                        }
                        if (typeof originalDoc.sizes === 'object') {
                            filesToDelete = filesToDelete.concat(Object.values((originalDoc === null || originalDoc === void 0 ? void 0 : originalDoc.sizes) || []).map(function (resizedFileData) { return resizedFileData === null || resizedFileData === void 0 ? void 0 : resizedFileData.filename; }));
                        }
                        deletionPromises = filesToDelete.map(function (filename) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!filename) return [3 /*break*/, 2];
                                        return [4 /*yield*/, adapter.handleDelete({ collection: collection, doc: originalDoc, req: req, filename: filename })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(deletionPromises)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        promises = files.map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, adapter.handleUpload({ collection: collection, data: data, req: req, file: file })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        req.payload.logger.error("There was an error while uploading files corresponding to the collection ".concat(collection.slug, " with filename ").concat(data.filename, ":"));
                        req.payload.logger.error(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, data];
                }
            });
        });
    };
};
exports.getBeforeChangeHook = getBeforeChangeHook;
//# sourceMappingURL=beforeChange.js.map