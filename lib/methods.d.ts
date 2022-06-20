import { Credentials, UserOpts } from './types';
export declare const makePaymentUrl: ({ secrectKey, accessKey, sandbox }: Credentials, { amount, currency, merchant_reference, merchant_return_url, merchant_notification_url, preselected_aspsp }: UserOpts) => string;
export declare const getMethods: ({ accessKey, secrectKey, sandbox }: Credentials, lang: string) => Promise<any>;
