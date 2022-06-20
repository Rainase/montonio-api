import { makePaymentUrl, getMethods } from './methods';
import { Credentials, PaymentMethodsTypes, UserOpts } from './types';

export const montonioApi = ({
  secrectKey,
  accessKey,
  sandbox,
}: Credentials) => ({
  getPaymentUrl: (options: UserOpts) =>
    makePaymentUrl({ secrectKey, accessKey, sandbox }, options),
  paymentMethods: (lang:string) => getMethods({ secrectKey, accessKey, sandbox }, lang),
});
