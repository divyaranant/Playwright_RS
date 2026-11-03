# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart1.spec.js >> @API Place the order
- Location: tests\WebAPIPart1.spec.js:18:1

# Error details

```
TypeError: Cannot read properties of undefined (reading '0')
```

# Test source

```ts
  1  | class APiUtils {
  2  |     constructor(apiContext, loginPayLoad) {
  3  |         this.apiContext = apiContext;
  4  |         this.loginPayLoad = loginPayLoad;
  5  |     }
  6  |  
  7  |     async getToken() {
  8  |         const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
  9  |             data: this.loginPayLoad
  10 |         }); // 200, 201
  11 |         const loginResponseJson = await loginResponse.json();
  12 |         const token = loginResponseJson.token;
  13 |         console.log(token);
  14 |         return token;
  15 |     }
  16 |  
  17 |     async createOrder(orderPayLoad) {
  18 |         let response = {};
  19 |         response.token = await this.getToken();
  20 |         const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
  21 |             data: orderPayLoad,
  22 |             headers: {
  23 |                 'Authorization': response.token,
  24 |                 'Content-Type': 'application/json'
  25 |             }
  26 |         });
  27 |  
  28 |         const orderResponseJson = await orderResponse.json();
  29 |         console.log(orderResponseJson);
> 30 |         const orderId = orderResponseJson.orders[0];
     |                                                 ^ TypeError: Cannot read properties of undefined (reading '0')
  31 |         response.orderId = orderId;
  32 |  
  33 |         return response;
  34 |     }
  35 | }
  36 |  
  37 | module.exports = { APiUtils };
```