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
exports.extendWebpackConfig = void 0;
var extendWebpackConfig = function (_a) {
    var config = _a.config, options = _a.options;
    return function (webpackConfig) {
        var _a, _b;
        var existingWebpackConfig = typeof ((_a = config.admin) === null || _a === void 0 ? void 0 : _a.webpack) === 'function'
            ? config.admin.webpack(webpackConfig)
            : webpackConfig;
        var newConfig = __assign(__assign({}, existingWebpackConfig), { resolve: __assign(__assign({}, (existingWebpackConfig.resolve || {})), { alias: __assign({}, (((_b = existingWebpackConfig.resolve) === null || _b === void 0 ? void 0 : _b.alias) ? existingWebpackConfig.resolve.alias : {})) }) });
        return Object.entries(options.collections).reduce(function (resultingWebpackConfig, _a) {
            var _b;
            var slug = _a[0], collectionOptions = _a[1];
            var matchedCollection = (_b = config.collections) === null || _b === void 0 ? void 0 : _b.find(function (coll) { return coll.slug === slug; });
            if (matchedCollection && typeof collectionOptions.adapter === 'function') {
                var adapter = collectionOptions.adapter({
                    collection: matchedCollection,
                });
                if (adapter.webpack) {
                    return adapter.webpack(resultingWebpackConfig);
                }
            }
            return resultingWebpackConfig;
        }, newConfig);
    };
};
exports.extendWebpackConfig = extendWebpackConfig;
//# sourceMappingURL=webpack.js.map