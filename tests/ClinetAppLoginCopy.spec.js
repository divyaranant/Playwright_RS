const { test, expect } = require('@playwright/test');
const { customtest } = require('../utils/test-base');
const {POManager} = require('../pageobjects/POManager')
const {CheckoutPage} = require('../pageobjects/CheckoutPage');
const { PaymentPage } = require('../pageobjects/PaymentPage');
//Json -> String -> js object
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

for (const [index, data] of dataSet.entries())
{
test(`@Web Client App login ${index + 1}`, async ({ page }) => {
  // js file - Login js, DashboardPage
  const poManager = new POManager(page);

  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(data.username,data.password)
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductsAddCart(data.productName);
  await dashboardPage.navigateToCart();
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.cartItemVerification();
  await checkoutPage.clickOnCheckout();
  const paymentPage = new PaymentPage(page);
  await paymentPage.loadPaymentForm();
  await paymentPage.fillPaymentDetails();
  await paymentPage.selectCountry('India');
  await paymentPage.clickPlaceOrder();

 
  await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
  console.log(await page.locator('.em-spacer-1 .ng-star-inserted').textContent());
  await page.locator('button[routerlink="/dashboard/myorders"]').click();
  const tableOfOrders = page.locator('tbody');
  await tableOfOrders.waitFor();
  const rows = tableOfOrders.locator('tr');
  const rowCount = await rows.count();
  for (let i = 0; i < rowCount; i++) {
    const orderID = await rows.nth(i).locator('th').textContent();
    console.log(orderID);
    if (orderID && orderID.trim() === '6adb7894a90a419aa824ac29') {
      await rows.allTextContents();
      await rows.nth(i).locator('button').first().click();
      
      break;
    } 
  }
  });

}

customtest ('Client App login', async ({ page, testDataForOrder }) => {
  // js file - Login js, DashboardPage
  const poManager = new POManager(page);

  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password)
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductsAddCart(testDataForOrder.productName);
  await dashboardPage.navigateToCart();
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.cartItemVerification();
  await checkoutPage.clickOnCheckout();
}
);