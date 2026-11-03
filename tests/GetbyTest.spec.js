const { test, expect } = require('@playwright/test');

test('Playwright special locators Test', async ({ page }) => {

    const slowExpect = expect.configure({ timeout: 9000 });
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill('NewUser@123');
    // await page.getByRole('textbox', { name: 'Email' }).fill('NewTestUser');
    await page.getByRole('button', { name: 'Submit' }).click();
    //5 seconds deafult timeout for expect assertion
    await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout: 7000});
    
    await page.getByRole('link', { name: 'Shop' }).click();
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop Name")
    await page.locator("app-card").filter({ hasText: 'Nokia Edge'}).getByRole("button").click();

});

test('Playwright Test level timeout', async ({ page }) => {
    
    const slowExpect = expect.configure({ timeout: 9000 });
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill('NewUser@123');
    // await page.getByRole('textbox', { name: 'Email' }).fill('NewTestUser');
    await page.getByRole('button', { name: 'Submit' }).click();
    //5 seconds deafult timeout for expect assertion
    await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout: 7000});
    
    await page.getByRole('link', { name: 'Shop' }).click();
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop")
    await page.locator("app-card").filter({ hasText: 'Nokia Edge'}).getByRole("button").click();

});


