const { test, expect } = require('@playwright/test');

test('@Web Client App login', async ({ page }) => {
  // js file - Login js, DashboardPage
  const email = 'yournewuser@example.com';
  const productName = 'ZARA COAT 3';
  const products = page.locator('.card-body');

  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill('YourPassword123!');
  await page.locator("[value='Login']").click();
  await page.locator('.card-body b').first().waitFor();

  const titles = await page.locator('.card-body b').allTextContents();
  console.log(titles);

  let clicked = false;
  const count = await products.count();

  for (let i = 0; i < count; ++i) {
    const productTitle = await products.nth(i).locator('b').textContent();
    if (productTitle && productTitle.trim().toLowerCase() === productName.toLowerCase()) {
      await products.nth(i).locator('text=Add To Cart').click();
      clicked = true;
      break;
    }

  }

  expect(clicked, `Product "${productName}" was not found and Add To Cart was not clicked.`).toBeTruthy();
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();

  const paymentForm = page.locator('.form__cc');
  await expect(paymentForm).toBeVisible();

  const cardInputs = paymentForm.locator('input');
  await cardInputs.nth(0).fill('4111 1111 1111 1111');

  const expiryDateSelects = paymentForm.locator('select');
  await expiryDateSelects.nth(0).selectOption('12');
  await expiryDateSelects.nth(1).selectOption('26');

  await cardInputs.nth(1).fill('123');
  await cardInputs.nth(2).fill('John Doe');

  await page.locator("[placeholder*='Select Country']").pressSequentially("Ind",{delay: 1000});
  const dropdown = page.locator('.ta-results');
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator('button').count();
  for (let i = 0; i < optionsCount; ++i) {
    const text = await dropdown.locator('button').nth(i).textContent();
    if (text=== ' India') {
      await dropdown.locator('button').nth(i).click();
      break;
    }
  }
  await page.locator('text=Place Order').click();

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