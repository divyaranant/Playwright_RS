# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> Screenshot & visual comparison
- Location: tests\MoreValidations.spec.js:24:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#displayed-tex')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#displayed-tex') with timeout 5000ms
  - waiting for locator('#displayed-tex')

```

```yaml
- banner:
  - link:
    - /url: https://www.rahulshettyacademy.com/
    - img
  - link "🎯 I’ll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - link "Home":
    - /url: https://www.rahulshettyacademy.com/
    - button "Home"
  - button "Practice"
  - button "Login"
  - button "Signup"
- heading "Practice Page" [level=1]
- group "Radio Button Example":
  - text: Radio Button Example
  - radio
  - text: Radio1
  - radio
  - text: Radio2
  - radio
  - text: Radio3
- group "Suggession Class Example":
  - text: Suggession Class Example
  - textbox "Type to Select Countries"
- group "Dropdown Example":
  - text: Dropdown Example
  - combobox:
    - option "Select" [selected]
    - option "Option1"
    - option "Option2"
    - option "Option3"
- group "Checkbox Example":
  - text: Checkbox Example
  - checkbox
  - text: Option1
  - checkbox
  - text: Option2
  - checkbox
  - text: Option3
- group "Switch Window Example":
  - text: Switch Window Example
  - button "Open Window"
- group "Switch Tab Example":
  - text: Switch Tab Example
  - link "Open Tab":
    - /url: https://www.qaclickacademy.com
- group "Switch To Alert Example":
  - text: Switch To Alert Example
  - textbox "Enter Your Name"
  - button "Alert"
  - button "Confirm"
- group "Web Table Example":
  - text: Web Table Example
  - table:
    - rowgroup:
      - row "Instructor Course Price":
        - columnheader "Instructor"
        - columnheader "Course"
        - columnheader "Price"
      - row "Rahul Shetty Selenium Webdriver with Java Basics + Advanced + Interview Guide 30":
        - cell "Rahul Shetty"
        - cell "Selenium Webdriver with Java Basics + Advanced + Interview Guide"
        - cell "30"
      - row "Rahul Shetty Learn SQL in Practical + Database Testing from Scratch 25":
        - cell "Rahul Shetty"
        - cell "Learn SQL in Practical + Database Testing from Scratch"
        - cell "25"
      - row "Rahul Shetty Appium (Selenium) - Mobile Automation Testing from Scratch 30":
        - cell "Rahul Shetty"
        - cell "Appium (Selenium) - Mobile Automation Testing from Scratch"
        - cell "30"
      - row "Rahul Shetty WebSecurity Testing for Beginners-QA knowledge to next level 20":
        - cell "Rahul Shetty"
        - cell "WebSecurity Testing for Beginners-QA knowledge to next level"
        - cell "20"
      - row "Rahul Shetty Learn JMETER from Scratch - (Performance + Load) Testing Tool 25":
        - cell "Rahul Shetty"
        - cell "Learn JMETER from Scratch - (Performance + Load) Testing Tool"
        - cell "25"
      - row "Rahul Shetty WebServices / REST API Testing with SoapUI 35":
        - cell "Rahul Shetty"
        - cell "WebServices / REST API Testing with SoapUI"
        - cell "35"
      - row "Rahul Shetty QA Expert Course :Software Testing + Bugzilla + SQL + Agile 25":
        - cell "Rahul Shetty"
        - cell "QA Expert Course :Software Testing + Bugzilla + SQL + Agile"
        - cell "25"
      - row "Rahul Shetty Master Selenium Automation in simple Python Language 25":
        - cell "Rahul Shetty"
        - cell "Master Selenium Automation in simple Python Language"
        - cell "25"
      - row "Rahul Shetty Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C 20":
        - cell "Rahul Shetty"
        - cell "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C"
        - cell "20"
      - row "Rahul Shetty Write effective QA Resume that will turn to interview call 0":
        - cell "Rahul Shetty"
        - cell "Write effective QA Resume that will turn to interview call"
        - cell "0"
- group "Element Displayed Example":
  - text: Element Displayed Example
  - button "Hide"
  - button "Show"
  - textbox "Hide/Show Example"
- group "Web Table Fixed header":
  - text: Web Table Fixed header
  - table:
    - rowgroup:
      - row "Name Position City Amount":
        - columnheader "Name"
        - columnheader "Position"
        - columnheader "City"
        - columnheader "Amount"
    - rowgroup:
      - row "Alex Engineer Chennai 28":
        - cell "Alex"
        - cell "Engineer"
        - cell "Chennai"
        - cell "28"
      - row "Ben Mechanic Bengaluru 23":
        - cell "Ben"
        - cell "Mechanic"
        - cell "Bengaluru"
        - cell "23"
      - row "Dwayne Manager Kolkata 48":
        - cell "Dwayne"
        - cell "Manager"
        - cell "Kolkata"
        - cell "48"
      - row "Ivory Receptionist Chennai 18":
        - cell "Ivory"
        - cell "Receptionist"
        - cell "Chennai"
        - cell "18"
      - row "Jack Engineer Pune 32":
        - cell "Jack"
        - cell "Engineer"
        - cell "Pune"
        - cell "32"
      - row "Joe Postman Chennai 46":
        - cell "Joe"
        - cell "Postman"
        - cell "Chennai"
        - cell "46"
      - row "Raymond Businessman Mumbai 37":
        - cell "Raymond"
        - cell "Businessman"
        - cell "Mumbai"
        - cell "37"
      - row "Ronaldo Sportsman Chennai 31":
        - cell "Ronaldo"
        - cell "Sportsman"
        - cell "Chennai"
        - cell "31"
      - row "Smith Cricketer Delhi 33":
        - cell "Smith"
        - cell "Cricketer"
        - cell "Delhi"
        - cell "33"
  - text: "Total Amount Collected: 296"
- group "Mouse Hover Example":
  - text: Mouse Hover Example
  - button "Mouse Hover"
- group "iFrame Example":
  - text: iFrame Example
  - iframe
- table:
  - rowgroup:
    - row "Discount Coupons REST API SoapUI Appium JMeter Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Social Media Facebook Twitter Google+ Youtube":
      - cell "Discount Coupons REST API SoapUI Appium JMeter":
        - list:
          - listitem:
            - heading "Discount Coupons" [level=3]:
              - link "Discount Coupons":
                - /url: "#"
          - listitem:
            - link "REST API":
              - /url: http://www.restapitutorial.com/
          - listitem:
            - link "SoapUI":
              - /url: https://www.soapui.org/
          - listitem:
            - link "Appium":
              - /url: https://courses.rahulshettyacademy.com/p/appium-tutorial
          - listitem:
            - link "JMeter":
              - /url: https://jmeter.apache.org/
      - cell "Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing.":
        - list:
          - listitem:
            - heading "Latest News" [level=3]:
              - link "Latest News":
                - /url: "#"
          - listitem:
            - link "Broken Link":
              - /url: https://rahulshettyacademy.com/brokenlink
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
      - cell "Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing.":
        - list:
          - listitem:
            - heading "Contact info" [level=3]:
              - link "Contact info":
                - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
      - cell "Social Media Facebook Twitter Google+ Youtube":
        - list:
          - listitem:
            - heading "Social Media" [level=3]:
              - link "Social Media":
                - /url: "#"
          - listitem:
            - link "Facebook":
              - /url: "#"
          - listitem:
            - link "Twitter":
              - /url: "#"
          - listitem:
            - link "Google+":
              - /url: "#"
          - listitem:
            - link "Youtube":
              - /url: "#"
- text: © 2019 Powered by
- strong:
  - link "Medianh Consulting":
    - /url: http://www.medianhconsulting.com
- status
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | //test.describe.configure({mode:'serial'});
  4  | test("popups validation", async ({page})=>
  5  |     {
  6  | 
  7  |         await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  8  |         // await page.goto("https://www.youtube.com");
  9  |         // await page.goBack();
  10 |         // await page.goForward();
  11 |        await expect(page.locator("#displayed-text")).toBeVisible();
  12 |        await page.locator("#hide-textbox").click();
  13 |        await expect(page.locator("#displayed-text")).toBeHidden();
  14 |        page.once('dialog', dialog => dialog.accept());
  15 |        page.pause();
  16 |        await page.locator("#confirmbtn").click();
  17 |        await page.locator("#mousehover").hover();
  18 |        const framesPage = page.frameLocator("#courses-iframe");
  19 |        await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  20 |        const textCheck = await framesPage.locator(".text h2").textContent();
  21 |        console.log(textCheck.split(" ")[1]);
  22 |     });
  23 | 
  24 |     test("Screenshot & visual comparison", async({ page }) =>
  25 |     {
  26 |          await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
> 27 |          await expect(page.locator("#displayed-tex")).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  28 |          await page.locator("#displayed-text").screenshot({path:'partialscreenshot.png'})
  29 |          await page.locator("#hide-textbox").click();
  30 |          await page.screenshot({path: 'screenshot.png'})
  31 |          await expect(page.locator("#displayed-text")).toBeHidden();
  32 |       
  33 |     });
  34 | 
  35 |     test('visual', async({ page }) =>
  36 |     {
  37 |         await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  38 |         expect(await page.screenshot()).toMatchSnapshot('landing.png')
  39 | 
  40 |     });
```