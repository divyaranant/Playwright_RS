# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClinetAppLoginCopy.spec.js >> @Web Client App login 2
- Location: tests\ClinetAppLoginCopy.spec.js:11:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.card-body').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.card-body').first() with timeout 10000ms
  - waiting for locator('.card-body').first()

```

```yaml
- banner:
  - text: Ecom
  - link " dummywebsite@rahulshettyacademy.com":
    - /url: emailto:dummywebsite@rahulshettyacademy.com
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
- heading "We Make Your Shopping Simple" [level=3]
- heading "Practice Website for Rahul Shetty Academy Students" [level=1]:
  - text: Practice Website for
  - emphasis: Rahul Shetty Academy
  - text: Students
- link "Register":
  - /url: "#/auth/register"
- paragraph: Register to sign in with your personal account
- heading "Log in" [level=1]
- text: Email
- textbox "email@example.com": anshika@gmail.com
- text: Password
- textbox "enter your passsword": Iamking@00
- button "Login"
- link "Forgot password?":
  - /url: "#/auth/password-new"
- paragraph: Don't have an account? Register here
- heading "Why People Choose Us?" [level=1]
- text: 
- heading "3546540" [level=1]
- paragraph: Successfull Orders
- text: 
- heading "37653" [level=1]
- paragraph: Customers
- text: 
- heading "3243" [level=1]
- paragraph: Sellers
- text: 
- heading "4500+" [level=1]
- paragraph: Daily Orders
- text: 
- heading "500+" [level=1]
- paragraph: Daily New Customer Joining
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class LoginPage {
  4  | 
  5  | constructor(page)
  6  | {   
  7  |     this.page = page;
  8  |     this.signInbutton = page.getByRole('button', { name: 'Login', exact: true });
  9  |     this.userName = page.locator("#userEmail")
  10 |     this.Password = page.locator("#userPassword")
  11 |     this.dashboardProducts = page.locator('.card-body');
  12 | }
  13 | 
  14 | async goTo()
  15 | {
  16 |     await this.page.goto("https://rahulshettyacademy.com/client");
  17 | }
  18 | async validLogin(username,password)
  19 | {
  20 |   await this.userName.fill(username);
  21 |   await this.Password.fill(password);
  22 |   await this.signInbutton.click();
> 23 |   await expect(this.dashboardProducts.first()).toBeVisible({ timeout: 10000 });
     |                                                ^ Error: expect(locator).toBeVisible() failed
  24 | }
  25 | }
  26 | 
  27 | module.exports = {LoginPage}
```