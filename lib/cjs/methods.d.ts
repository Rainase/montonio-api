import { Credentials, LocaleTypes, UserOpts } from './types';
export declare const makePaymentUrl: ({ secrectKey, accessKey, sandbox }: Credentials, { amount, currency, merchant_reference, merchant_return_url, merchant_notification_url, }: UserOpts) => string;
export declare const getMethods: ({ accessKey, secrectKey, sandbox }: Credentials, lang: LocaleTypes) => Promise<any>;
