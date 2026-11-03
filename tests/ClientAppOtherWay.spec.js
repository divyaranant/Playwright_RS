const { test, expect } = require('@playwright/test');

test('@Web Client App login', async ({ page }) => {
  const email = 'yournewuser@example.com';

  await page.goto('https://rahulshettyacademy.com/client');
  await page.getByPlaceholder('email@example.com').fill(email);
  await page.getByPlaceholder('enter your passsword').fill('YourPassword123!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('.card-body b').first().waitFor();

  const productCard = page.locator('.card-body').filter({ hasText: 'ZARA COAT 3' });
  await productCard.getByRole('button', { name: 'Add To Cart' }).click();
  await page.getByRole('listitem', { class: 'fa fa-shopping-cart' }).getByRole('button', { name: 'Cart' }).click();

  await page.locator('div li').first().waitFor();
  await expect(page.getByText('ZARA COAT 3')).toBeVisible();
  await page.getByRole('button', { name: 'Checkout' }).click();

  const paymentForm = page.locator('.form__cc');
  await expect(paymentForm).toBeVisible();

  const cardInputs = paymentForm.locator('input');
  await cardInputs.nth(0).fill('4111 1111 1111 1111');

  const expiryDateSelects = paymentForm.locator('select');
  await expiryDateSelects.nth(0).selectOption('12');
  await expiryDateSelects.nth(1).selectOption('26');

  await cardInputs.nth(1).fill('123');
  await cardInputs.nth(2).fill('John Doe');

  await page.getByPlaceholder('Select Country').pressSequentially('Ind', { delay: 1000 });
  await page.getByRole('button', { name: 'India' }).nth(1).click();

  await page.getByText('Place Order').click();
  await expect(page.getByText('Thankyou for the order.')).toBeVisible();
});