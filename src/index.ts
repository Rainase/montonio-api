import { makePaymentUrl, getMethods } from './methods';
import { Credentials, CountryCode, UserOpts } from './types';

export const montonioApi = ({
  secrectKey,
  accessKey,
  sandbox,
}: Credentials) => ({
  getPaymentUrl: (options: UserOpts) =>
    makePaymentUrl({ secrectKey, accessKey, sandbox }, options),
  paymentMethods: (lang:CountryCode) => getMethods({ secrectKey, accessKey, sandbox }, lang),
});
