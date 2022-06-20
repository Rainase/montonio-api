import { makePaymentUrl, getMethods } from './methods';
import { Credentials, LocaleTypes, PaymentMethodsTypes, UserOpts } from './types';

export const montonioApi = ({
  secrectKey,
  accessKey,
  sandbox,
}: Credentials) => ({
  getPaymentUrl: (options: UserOpts) =>
    makePaymentUrl({ secrectKey, accessKey, sandbox }, options),
  paymentMethods: (lang:LocaleTypes) => getMethods({ secrectKey, accessKey, sandbox }, lang),
});
