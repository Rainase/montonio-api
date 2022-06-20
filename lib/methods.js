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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMethods = exports.makePaymentUrl = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
const makePaymentUrl = ({ secrectKey, accessKey, sandbox }, { amount, currency, merchant_reference, merchant_return_url, merchant_notification_url, preselected_aspsp }) => {
    const baseUrl = sandbox ? config_1.config.sandboxUrl : config_1.config.productionUrl;
    const payload = {
        amount: amount,
        currency: currency ? currency : 'EUR',
        merchant_reference: merchant_reference,
        access_key: accessKey,
        merchant_return_url: merchant_return_url,
        merchant_notification_url: merchant_notification_url,
        preselected_aspsp: preselected_aspsp ? preselected_aspsp : ''
    };
    const token = jsonwebtoken_1.default.sign(payload, secrectKey, {
        algorithm: 'HS256',
        expiresIn: '10m',
    });
    const paymentUrl = `${baseUrl}?payment_token=${token}`;
    return paymentUrl;
};
exports.makePaymentUrl = makePaymentUrl;
const getMethods = ({ accessKey, secrectKey, sandbox }, lang) => __awaiter(void 0, void 0, void 0, function* () {
    const baseUrl = sandbox ? config_1.config.sandboxMethods : config_1.config.prodcutionMethods;
    try {
        const payload = {
            access_key: accessKey
        };
        const token = jsonwebtoken_1.default.sign(payload, secrectKey, { algorithm: 'HS256', expiresIn: '1h' });
        const resp = yield (0, axios_1.default)(baseUrl, { headers: { 'Authorization': `Bearer ${token}` } });
        if (lang === '')
            return resp.data;
        return resp.data[lang];
    }
    catch (error) {
        return error;
    }
});
exports.getMethods = getMethods;
