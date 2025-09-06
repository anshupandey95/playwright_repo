const { test,expect } = require('@playwright/test');
test('some more functions to handle ', async ({ page }) => {
  

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page.goto('https://www.google.com/')

  await page.goBack()
  await page.goForward()
  await page.goBack()
  await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible();

  await page.locator("#hide-textbox").click()

  await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden();


   page.on('dialog',dialog=> dialog.accept());

    await page.locator("#confirmbtn").click()








})