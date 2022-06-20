"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.montonioApi = void 0;
const methods_1 = require("./methods");
const montonioApi = ({ secrectKey, accessKey, sandbox, }) => ({
    getPaymentUrl: (options) => (0, methods_1.makePaymentUrl)({ secrectKey, accessKey, sandbox }, options),
    paymentMethods: (lang) => (0, methods_1.getMethods)({ secrectKey, accessKey, sandbox }, lang),
});
exports.montonioApi = montonioApi;
