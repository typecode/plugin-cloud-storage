"use strict";
exports.BlobServiceClient = {
    fromConnectionString: function () { return ({
        getContainerClient: function () { return ({
            createIfNotExists: function () { return null; },
        }); },
    }); },
};
exports.AbortController = {
    timeout: function () { return null; },
};
exports.Readable = { from: function () { return null; } };
//# sourceMappingURL=mock.js.map