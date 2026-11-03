const { expect } = require('@playwright/test');

class DashboardPage
{

constructor(page)
{   
    this.page = page;
    this.products = page.locator('.card-body');
    this.cart = page.locator("[routerlink*='cart']");
}

async searchProductsAddCart(productName)
{
  await expect(this.products.first()).toBeVisible();

  const product = this.products.filter({
    has: this.page.getByText(productName, { exact: true })
  });

  await expect(product).toHaveCount(1);
  await product.getByRole('button', { name: 'Add To Cart' }).click();
}

async navigateToCart()
{
    await this.cart.click();
}

}

module.exports = {DashboardPage}