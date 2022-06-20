import jwt from 'jsonwebtoken';
import axios from 'axios';
import { config } from './config';
import { Credentials, LocaleTypes, PaymentMethodsTypes, UserOpts } from './types';
export const makePaymentUrl = (
  { secrectKey, accessKey, sandbox }: Credentials,
  {
    amount,
    currency,
    merchant_reference,
    merchant_return_url,
    merchant_notification_url,
  }: UserOpts
): string => {
  const baseUrl = sandbox ? config.sandboxUrl : config.productionUrl
  const payload: UserOpts = {
    amount: amount,
    currency: currency ? currency : 'EUR',
    merchant_reference: merchant_reference,
    access_key: accessKey,
    merchant_return_url: merchant_return_url,
    merchant_notification_url: merchant_notification_url,
  };
  const token = jwt.sign(payload, secrectKey, {
    algorithm: 'HS256',
    expiresIn: '10m',
  });
  const paymentUrl = `${baseUrl}?payment_token=${token}`;
  return paymentUrl;
};

export const getMethods = async ({accessKey, secrectKey, sandbox}:Credentials, lang:LocaleTypes) => {
  const baseUrl = sandbox ? config.sandboxMethods : config.prodcutionMethods
  try {
    const payload = {
      access_key: accessKey
  }
  const token = jwt.sign(
    payload, 
    secrectKey,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
  const resp = await axios(baseUrl, {headers: {'Authorization': `Bearer ${token}`}})
  return resp.data[lang]
  } catch (error) {
  return error
  }
}

