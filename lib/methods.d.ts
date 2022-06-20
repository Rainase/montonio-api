import { CountryCode, Credentials, UserOpts } from './types';
export declare const makePaymentUrl: ({ secrectKey, accessKey, sandbox }: Credentials, { amount, currency, merchant_reference, merchant_return_url, preselected_aspsp }: UserOpts) => string;
/**
 * Displaying the List of Available Banks
 * Pass a country_code to get banks for specific country e.g 'FI' | 'EE' | 'LV' | 'LT'
 * @returns List of available banks for a merchant.
 */
export declare const getMethods: ({ accessKey, secrectKey, sandbox }: Credentials, lang: CountryCode) => Promise<any>;
