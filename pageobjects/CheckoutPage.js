const { expect } = require("@playwright/test")

class CheckoutPage {
constructor(page)
{
    this.page = page;
    this.cartItem = page.locator("div li").first();
    this.cartItemText = page.locator("h3:has-text('Zara Coat 3')")
    this.checkOut = page.locator("text=Checkout");
}

async cartItemVerification()
{
  await this.cartItem.waitFor();
  await expect(this.cartItemText).toBeVisible();
  
}
async clickOnCheckout()
{
  await this.checkOut.click();
}

}

module.exports = {CheckoutPage}