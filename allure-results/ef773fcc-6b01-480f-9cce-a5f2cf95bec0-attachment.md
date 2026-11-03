# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: GetbyTest.spec.js >> Playwright special locators Test
- Location: tests\GetbyTest.spec.js:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.my-4').first()
Expected: "Shop"
Received: "Shop Name"
Timeout:  9000ms

Call log:
  - Expect "toHaveText" locator('.my-4').first() with timeout 9000ms
  - waiting for locator('.my-4').first()
    21 × locator resolved to <h1 class="my-4">Shop Name</h1>
       - unexpected value "Shop Name"

```

```yaml
- heading "Shop Name" [level=1]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Playwright special locators Test', async ({ page }) => {
  4  | 
  5  |     const slowExpect = expect.configure({ timeout: 9000 });
  6  |     await page.goto('https://rahulshettyacademy.com/angularpractice/');
  7  |     await page.getByLabel('Check me out if you Love IceCreams!').check();
  8  |     await page.getByLabel('Employed').check();
  9  |     await page.getByLabel('Gender').selectOption('Female');
  10 |     await page.getByPlaceholder('Password').fill('NewUser@123');
  11 |     // await page.getByRole('textbox', { name: 'Email' }).fill('NewTestUser');
  12 |     await page.getByRole('button', { name: 'Submit' }).click();
  13 |     //5 seconds deafult timeout for expect assertion
  14 |     await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout: 7000});
  15 |     
  16 |     await page.getByRole('link', { name: 'Shop' }).click();
> 17 |     await slowExpect(page.locator(".my-4").first()).toHaveText("Shop")
     |                                                     ^ Error: expect(locator).toHaveText(expected) failed
  18 |     await page.locator("app-card").filter({ hasText: 'Nokia Edge'}).getByRole("button").click();
  19 | 
  20 | });
  21 | 
  22 | test('Playwright Test level timeout', async ({ page }) => {
  23 |     
  24 |     test.timeout(6000);
  25 |     const slowExpect = expect.configure({ timeout: 9000 });
  26 |     await page.goto('https://rahulshettyacademy.com/angularpractice/');
  27 |     await page.getByLabel('Check me out if you Love IceCreams!').check();
  28 |     await page.getByLabel('Employed').check();
  29 |     await page.getByLabel('Gender').selectOption('Female');
  30 |     await page.getByPlaceholder('Password').fill('NewUser@123');
  31 |     // await page.getByRole('textbox', { name: 'Email' }).fill('NewTestUser');
  32 |     await page.getByRole('button', { name: 'Submit' }).click();
  33 |     //5 seconds deafult timeout for expect assertion
  34 |     await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout: 7000});
  35 |     
  36 |     await page.getByRole('link', { name: 'Shop' }).click();
  37 |     await slowExpect(page.locator(".my-4").first()).toHaveText("Shop")
  38 |     await page.locator("app-card").filter({ hasText: 'Nokia Edge'}).getByRole("button").click();
  39 | 
  40 | });
  41 | 
  42 | 
  43 | 
```