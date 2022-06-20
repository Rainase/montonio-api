'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const sandboxUrl = 'https://sandbox-payments.montonio.com';
const productionUrl = 'https://payments.montonio.com';
const sandboxMethods = 'https://api.sandbox-payments.montonio.com/pis/v2/merchants/aspsps';
const prodcutionMethods = 'https://api.payments.montonio.com/pis/v2/merchants/aspsps';
exports.config = {
    sandboxUrl, productionUrl, sandboxMethods, prodcutionMethods
};
