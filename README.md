# montonio-api
# Install

### Install using npm

`npm i @offrain/montonio-api`

# Usage

```js
// ES module
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
```
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
