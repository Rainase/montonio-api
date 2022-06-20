"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const genToken = (amount) => {
    const payload = {
        amount: amount,
        currency: 'EUR',
        access_key: 'merchant_access_key',
        merchant_reference: 'SO661123',
        merchant_return_url: 'https://montonio.com/orders/27731773/thank_you',
        merchant_notification_url: 'https://montonio.com/orders/payment_webhook',
        payment_information_unstructured: 'Payment for order SO661123',
        preselected_aspsp: 'LHVBEE22',
        preselected_locale: 'et',
        checkout_email: 'test-customer@montonio.com'
    };
    const token = jsonwebtoken_1.default.sign(payload, 'merchant_secret_key', { algorithm: 'HS256', expiresIn: '10m' });
};
exports.genToken = genToken;
