const { expect } = require('@playwright/test');

class LoginPage {

constructor(page)
{   
    this.page = page;
    this.signInbutton = page.getByRole('button', { name: 'Login', exact: true });
    this.userName = page.locator("#userEmail")
    this.Password = page.locator("#userPassword")
    this.dashboardProducts = page.locator('.card-body');
}

async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client");
}
async validLogin(username,password)
{
  await this.userName.fill(username);
  await this.Password.fill(password);
  await this.signInbutton.click();
  await expect(this.dashboardProducts.first()).toBeVisible({ timeout: 10000 });
}
}

module.exports = {LoginPage}