const { test, expect } = require('@playwright/test');

test('UI Controls Playwright Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractice/');

  const userName = page.locator('#username');
  const password = page.locator("[type='password']");
  const signInButton = page.locator('#signInBtn');
  const dropdown = page.locator('select.form-control');
  const radioButton = page.locator('.radiotextsty');

  await expect(dropdown).toBeVisible();
  await dropdown.selectOption('Consultant');
  await expect(dropdown).toHaveValue('consult');
  await radioButton.nth(1).click();
  await expect(radioButton.nth(1)).toBeChecked();
  await page.locator('#okayBtn').click();
  await page.locator('#terms').click();
  //expect(await expect(page.locator('.blinkingText'))).toBeFalsy();
  // await userName.fill('rahulshettyacademy');
  // await password.fill('Learning@830$3mK2');
  // await signInButton.click();
});

test('Child window Playwright Test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractice/');
  const documentLink = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click()
  ]);
  const text = await newPage.locator('.red').textContent();
  console.log(text);
  const emailDomain = text?.match(/@(\S+)/)?.[1];
  expect(emailDomain).toBe('rahulshettyacademy.com');
  const username = emailDomain.replace(/\.com$/, '');
  await page.locator('#username').fill(username);
  await page.locator('#password').fill('Learning@830$3mK2');
  await page.locator('#signInBtn').click();
  await expect(page).toHaveURL(/\/angularpractice\/shop/);
  await expect(page.locator('.card')).toHaveCount(4);

});