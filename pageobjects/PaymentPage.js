const { expect } = require('@playwright/test');

class PaymentPage {
  constructor(page) {
    this.page = page;
    this.paymentForm = page.locator('.form__cc');
    this.cardInputs = this.paymentForm.locator('input');
    this.expiryDateSelects = this.paymentForm.locator('select');
    this.countryInput = page.locator("[placeholder*='Select Country']");
    this.countryDropdown = page.locator('.ta-results');
    this.placeOrder = page.getByText('Place Order', { exact: true });
  }

  async loadPaymentForm() {
    await expect(this.paymentForm).toBeVisible();
  }

  async fillPaymentDetails() {
    await this.cardInputs.nth(0).fill('4111 1111 1111 1111');
    await this.expiryDateSelects.nth(0).selectOption('12');
    await this.expiryDateSelects.nth(1).selectOption('26');
    await this.cardInputs.nth(1).fill('123');
    await this.cardInputs.nth(2).fill('John Doe');
  }

  async selectCountry(countryName) {
    await this.countryInput.fill('');
    await this.countryInput.pressSequentially(countryName.slice(0, 3), { delay: 100 });
    await expect(this.countryDropdown).toBeVisible();
    await this.countryDropdown
      .getByRole('button', { name: new RegExp(`${countryName}$`) })
      .click();
  }

  async clickPlaceOrder() {
    await this.placeOrder.click();
  }
}

module.exports = { PaymentPage };
