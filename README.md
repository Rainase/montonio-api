# montonio-api
Unofficial API for montonio payment gateway

[Montonio Docs](https://payments-docs.montonio.com/#introduction)
# Install

### Install using npm

`npm i @offrain/montonio-api`

# Usage
### Bank Payment Methods
```js
import { montonioApi } from '@offrain/montonio-api';
// Initialize requests with API keys provided from Montonio
const montonio = montonioApi({
  secrectKey: 'MONTONIO_SECRET_KEY',
  accessKey: 'MONTONIO_ACCESS_KEY',
  sandbox: true // optional defaults to false
});

// Get Bank Payment Methods
montonio
  .paymentMethods('FI')
  .then((val) => console.log(val))
  .catch((error) => error);

```
Returns Array of Bank Payment options
```js
[
  {
    "bic": "OKOYFIHH",
    "name": "OP",
    "logo_url": "https://public.montonio.com/images/aspsps_logos/op.png"
  },
  {
    "bic": "DABAFIHH",
    "name": "Danske Bank",
    "logo_url": "https://public.montonio.com/images/aspsps_logos/danske.png"
  },
  {
    "bic": "RVUALT2V",
    "name": "Revolut",
    "logo_url": "https://public.montonio.com/images/aspsps_logos/revolut.png"
  },
  {
    "bic": "CARD",
    "name": "Visa / Mastercard",
    "logo_url": "https://public.montonio.com/images/aspsps_logos/visa.png"
  }
]
```
### Options

- `countryCode` : `EE`, `FI`, `LV` or `LT` _optional, default `EE`

### Create Payment Url

```js
montonio.getPaymentUrl({
  amount: 1,
  merchant_return_url: 'https://example.com/thankyou',
  merchant_reference: 'order_id_23',
});

### Options

```
- `amount` : `Number` Sets price for the gateway
- `merchant_return_url` : The URL `string` where the customer will be redirected back to after completing or cancelling a payment.
- `merchant_reference` : The order reference `string` in the merchant's system (e.g. the order ID).
- `preselected_aspsp` : The bank that the customer chose for this payment if you allow them to select their bank of choice in your checkout. Leave this blank to let the customer choose their bank in [Montonio](https://montonio.com) interface. `_optional`.

Returns payment url `https://[sandbox-]payments.montonio.com?payment_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`

