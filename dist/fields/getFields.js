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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFields = void 0;
var path_1 = __importDefault(require("path"));
var afterRead_1 = require("../hooks/afterRead");
var getFields = function (_a) {
    var _b;
    var adapter = _a.adapter, collection = _a.collection, disablePayloadAccessControl = _a.disablePayloadAccessControl, generateFileURL = _a.generateFileURL, prefix = _a.prefix;
    var baseURLField = {
        name: 'url',
        label: 'URL',
        type: 'text',
        admin: {
            readOnly: true,
            hidden: true,
        },
    };
    var basePrefixField = {
        name: 'prefix',
        type: 'text',
        admin: {
            readOnly: true,
            hidden: true,
        },
    };
    var fields = __spreadArray([], collection.fields, true);
    // Inject a hook into all URL fields to generate URLs
    var existingURLFieldIndex = -1;
    var existingURLField = fields.find(function (existingField, i) {
        if ('name' in existingField && existingField.name === 'url') {
            existingURLFieldIndex = i;
            return true;
        }
        return false;
    });
    if (existingURLFieldIndex > -1) {
        fields.splice(existingURLFieldIndex, 1);
    }
    fields.push(__assign(__assign(__assign({}, baseURLField), (existingURLField || {})), { hooks: {
            afterRead: __spreadArray([
                (0, afterRead_1.getAfterReadHook)({ adapter: adapter, collection: collection, disablePayloadAccessControl: disablePayloadAccessControl, generateFileURL: generateFileURL })
            ], (((_b = existingURLField === null || existingURLField === void 0 ? void 0 : existingURLField.hooks) === null || _b === void 0 ? void 0 : _b.afterRead) || []), true),
        } }));
    if (typeof collection.upload === 'object' && collection.upload.imageSizes) {
        var existingSizesFieldIndex_1 = -1;
        var existingSizesField_1 = fields.find(function (existingField, i) {
            if ('name' in existingField && existingField.name === 'sizes') {
                existingSizesFieldIndex_1 = i;
                return true;
            }
            return false;
        });
        if (existingSizesFieldIndex_1 > -1) {
            fields.splice(existingSizesFieldIndex_1, 1);
        }
        var sizesField = __assign(__assign({}, (existingSizesField_1 || {})), { name: 'sizes', type: 'group', admin: {
                hidden: true,
            }, fields: collection.upload.imageSizes.map(function (size) {
                var _a;
                var existingSizeField = existingSizesField_1 === null || existingSizesField_1 === void 0 ? void 0 : existingSizesField_1.fields.find(function (existingField) { return 'name' in existingField && existingField.name === size.name; });
                var existingSizeURLField = existingSizeField === null || existingSizeField === void 0 ? void 0 : existingSizeField.fields.find(function (existingField) { return 'name' in existingField && existingField.name === 'url'; });
                return __assign(__assign({}, existingSizeField), { name: size.name, type: 'group', fields: [
                        __assign(__assign(__assign({}, (existingSizeURLField || {})), baseURLField), { hooks: {
                                afterRead: __spreadArray([
                                    (0, afterRead_1.getAfterReadHook)({
                                        adapter: adapter,
                                        collection: collection,
                                        size: size,
                                        disablePayloadAccessControl: disablePayloadAccessControl,
                                        generateFileURL: generateFileURL,
                                    })
                                ], (((_a = existingSizeURLField === null || existingSizeURLField === void 0 ? void 0 : existingSizeURLField.hooks) === null || _a === void 0 ? void 0 : _a.afterRead) || []), true),
                            } }),
                    ] });
            }) });
        fields.push(sizesField);
    }
    // If prefix is enabled, save it to db
    if (prefix) {
        var existingPrefixFieldIndex_1 = -1;
        var existingPrefixField = fields.find(function (existingField, i) {
            if ('name' in existingField && existingField.name === 'prefix') {
                existingPrefixFieldIndex_1 = i;
                return true;
            }
            return false;
        });
        if (existingPrefixFieldIndex_1 > -1) {
            fields.splice(existingPrefixFieldIndex_1, 1);
        }
        fields.push(__assign(__assign(__assign({}, basePrefixField), (existingPrefixField || {})), { defaultValue: path_1.default.posix.join(prefix) }));
    }
    return fields;
};
exports.getFields = getFields;
//# sourceMappingURL=getFields.js.map