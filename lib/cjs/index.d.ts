import { Credentials, CountryCode, UserOpts } from './types';
export declare const montonioApi: ({ secrectKey, accessKey, sandbox, }: Credentials) => {
    getPaymentUrl: (options: UserOpts) => string;
    paymentMethods: (lang: CountryCode) => Promise<any>;
};
