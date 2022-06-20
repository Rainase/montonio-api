import { Credentials, LocaleTypes, UserOpts } from './types';
export declare const montonioApi: ({ secrectKey, accessKey, sandbox, }: Credentials) => {
    getPaymentUrl: (options: UserOpts) => string;
    paymentMethods: (lang: LocaleTypes) => Promise<any>;
};
