const {test, expect} = require('@playwright/test');

test('Browser Context Playwright Test', async ({ browser }) => 
{
  //chrome - plugins/cookies
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractice/");
});

test('@web Page Playwright Test', async ({ page }) => 
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractice/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    //css, xpath, text, id, class, tagname, attributes
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await page.getByText("Sign In").click();

    await page.waitForURL('**/angularpractice/shop');
    await expect(page.locator('.card')).toHaveCount(4);

    const productNames = page.locator('.card h4 a');
    await expect(productNames).toHaveText([
      'iphone X',
      'Samsung Note 8',
      'Nokia Edge',
      'Blackberry',
    ]);
    console.log(await productNames.allTextContents());
})