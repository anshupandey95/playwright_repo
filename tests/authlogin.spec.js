const { test,expect } = require('@playwright/test');

test('my login', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const productName = "ZARA COAT 3"
  const logemail = "test33342@gmail.com"

  const products = page.locator(".card-body")

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator("#userEmail").fill(logemail)
  await page.locator("#userPassword").fill("Test@54321")
  await page.locator("[value='Login']").click();+
  await page.waitForLoadState('networkidle')

const texts = await page.locator(".card-body b").allTextContents();
console.log(texts);
const count = await products.count();
for(let i=0; i<count; ++i) {
    if( await products.nth(i).locator("b").textContent()=== productName)  {
        await products.nth(i).locator("text=Add To Cart").click();
        break;

    }
}
await page.locator("[routerlink='/dashboard/cart']").click()
await page.locator("div li").first().waitFor();
const Bool  =await page.locator("h3:has-text('ZARA COAT 3')").isVisible()
expect(Bool).toBeTruthy();
await page.locator("text=Checkout").click();
//await page.locator("[placeholder*='Country']").pressSequentially("india")
 await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {

         await dropdown.locator("button").nth(i).click();
         break;
      }
   }



await expect(page.locator(".user__name [type='text']").first()).toHaveText(logemail);


const submitBtn = page.locator(".action__submit");

await page.locator("div[toast-component]").waitFor({ state: "detached" }).catch(() => {});
await page.locator(".ta-backdrop").waitFor({ state: "detached" }).catch(() => {});



await expect(submitBtn).toBeVisible();
await expect(submitBtn).toBeEnabled();
await submitBtn.click();




//await page.locator(".hero-primary").toHaveText(" Thankyou for the order. ")
 await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

const orderidText =page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderidText)

await page.locator("li [routerlink='/dashboard/myorders']").click()
const rows  = page.locator("tbody tr")

for(let i=0;i<await rows.count(); ++i) {
   const rowOrderId = await  rows.nth(i).page.locator("th").textContent()

   if(orderidText.includes(rowOrderId)) {
    await rows.nth(i).locator("button").first().click();
    break;
   }
} 
const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();



})
  