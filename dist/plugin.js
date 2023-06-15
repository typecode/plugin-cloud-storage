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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudStorage = void 0;
var webpack_1 = require("./webpack");
var beforeChange_1 = require("./hooks/beforeChange");
var afterDelete_1 = require("./hooks/afterDelete");
var getFields_1 = require("./fields/getFields");
// This plugin extends all targeted collections by offloading uploaded files
// to cloud storage instead of solely storing files locally.
// It is based on an adapter approach, where adapters can be written for any cloud provider.
// Adapters are responsible for providing four actions that this plugin will use:
// 1. handleUpload, 2. handleDelete, 3. generateURL, 4. staticHandler
// Optionally, the adapter can specify any Webpack config overrides if they are necessary.
var cloudStorage = function (pluginOptions) {
    return function (incomingConfig) {
        var allCollectionOptions = pluginOptions.collections, enabled = pluginOptions.enabled;
        var config = __assign({}, incomingConfig);
        var webpack = (0, webpack_1.extendWebpackConfig)({ options: pluginOptions, config: incomingConfig });
        config.admin = __assign(__assign({}, (config.admin || {})), { webpack: webpack });
        // Return early if disabled. Only webpack config mods are applied.
        if (enabled === false) {
            return config;
        }
        var initFunctions = [];
        return __assign(__assign({}, config), { collections: (config.collections || []).map(function (existingCollection) {
                var _a, _b;
                var options = allCollectionOptions[existingCollection.slug];
                if (options === null || options === void 0 ? void 0 : options.adapter) {
                    var adapter = options.adapter({
                        collection: existingCollection,
                        prefix: options.prefix,
                    });
                    if (adapter.onInit)
                        initFunctions.push(adapter.onInit);
                    var fields = (0, getFields_1.getFields)({
                        collection: existingCollection,
                        disablePayloadAccessControl: options.disablePayloadAccessControl,
                        generateFileURL: options.generateFileURL,
                        prefix: options.prefix,
                        adapter: adapter,
                    });
                    var handlers = __spreadArray([], (typeof existingCollection.upload === 'object' &&
                        Array.isArray(existingCollection.upload.handlers)
                        ? existingCollection.upload.handlers
                        : []), true);
                    if (!options.disablePayloadAccessControl) {
                        handlers.push(adapter.staticHandler);
                    }
                    return __assign(__assign({}, existingCollection), { upload: __assign(__assign({}, (typeof existingCollection.upload === 'object' ? existingCollection.upload : {})), { handlers: handlers, disableLocalStorage: typeof options.disableLocalStorage === 'boolean'
                                ? options.disableLocalStorage
                                : true }), hooks: __assign(__assign({}, (existingCollection.hooks || {})), { beforeChange: __spreadArray(__spreadArray([], (((_a = existingCollection.hooks) === null || _a === void 0 ? void 0 : _a.beforeChange) || []), true), [
                                (0, beforeChange_1.getBeforeChangeHook)({ adapter: adapter, collection: existingCollection }),
                            ], false), afterDelete: __spreadArray(__spreadArray([], (((_b = existingCollection.hooks) === null || _b === void 0 ? void 0 : _b.afterDelete) || []), true), [
                                (0, afterDelete_1.getAfterDeleteHook)({ adapter: adapter, collection: existingCollection }),
                            ], false) }), fields: fields });
                }
                return existingCollection;
            }), onInit: function (payload) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            initFunctions.forEach(function (fn) { return fn(); });
                            if (!config.onInit) return [3 /*break*/, 2];
                            return [4 /*yield*/, config.onInit(payload)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); } });
    };
};
exports.cloudStorage = cloudStorage;
//# sourceMappingURL=plugin.js.map