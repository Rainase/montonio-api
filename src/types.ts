export interface Credentials {
  accessKey: string
  secrectKey: string
  sandbox?: Evn | false
}
export enum Evn {
  true, false
}
export interface SecretOptions {
  access_key: string,
}
export interface UserOpts {
  amount: number
  currency: string,
  merchant_reference: string
  merchant_return_url: string
  merchant_notification_url: string
  payment_information_unstructured?: string
  preselected_aspsp?: string
  preselected_locale?:string
  checkout_email?: string
}
export interface PayloadOpts {
  amount: number
  access_key:string
  currency: string,
  merchant_reference: string
  merchant_return_url: string
  merchant_notification_url: string
  payment_information_unstructured?: string
  preselected_aspsp?: string
  preselected_locale?:string
  checkout_email?: string
}
export interface PaymentMethodsTypes {
  accessKey:string
}
export type CountryCode = 'FI' | 'EE' | 'LV' | 'LT'
interface Bank {
  bic: string
  name: string
  logo_url: string
}
export type BankList = {
  [key in CountryCode]: Bank[]
}