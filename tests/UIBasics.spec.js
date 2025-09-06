const { test, expect } = require('@playwright/test');

test.only('my first test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const usernamelocator = page.locator('#username');
  const passloc = page.locator('#password');
  const signInloc = page.locator('#signInBtn');
  const cardtitles = page.locator(".card-body a")

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  
  await usernamelocator.fill('rahulshettyacadem');
  await passloc.fill('learning');
  await page.locator('#terms').click();
  await signInloc.click();

  // 🔍 Get and check error message
  const textwrong = await page.locator("[style*='block']").textContent();
  console.log(textwrong);
  await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');

  
  await usernamelocator.fill('');
  await usernamelocator.fill('rahulshettyacademy');
  await signInloc.click(); 

  await expect(page).toHaveTitle('ProtoCommerce')

//   const text = await cardtitles.first().textContent();
// console.log(text);

const alltext = await cardtitles.allTextContents();
console.log(alltext);


  // ✅ This is your final attempt

  
});
                                  

test('my first test  browser context', async ({ page }) => {
    
    
    await page.goto('https://www.google.com/');  
   const titlegoogle =  await page.title()
    console.log(titlegoogle) 
    await expect(page).toHaveTitle('Google')  // Use .goto with a URL
});