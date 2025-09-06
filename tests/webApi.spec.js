const { test,expect,request } = require('@playwright/test');
let token ;
let orderid;

const orderpayload = {
  orders: [
    {
      country: "Indonesia",
      productOrderedId: "68a961959320a140fe1ca57e"
    }
  ]
};
test.beforeAll(async ()=> {
    const apiContext = await request.newContext();

  const response = await apiContext.post(
  "https://rahulshettyacademy.com/api/ecom/auth/login",
  {
    data: {
      userEmail: "test33342@gmail.com",
      userPassword: "Test@54321"
    }
  }
  

);
const loginResponse = await response.json();
   token = loginResponse.token;
  console.log("Token:", token);





  const responseobject = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  },
  data: orderpayload
});


const orderresponsebody  = await responseobject.json();
console.log(orderresponsebody)
   orderid = orderresponsebody.orders[0];
  



})


test('my api injection login', async ({ page }) => {
  await page.addInitScript((token) => {
    window.localStorage.setItem('token', token);
  }, token);

  const productName = "ZARA COAT 3"
  const logemail = "test33342@gmail.com"
  await page.goto('https://rahulshettyacademy.com/client/');

  // ✅ Everything below should be INSIDE the test block:
  await page.locator("li [routerlink='/dashboard/myorders']").click();
  const rows = page.locator("tbody tr");

  for (let i = 0; i < await rows.count(); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();

    if (orderid.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIdDetails = await page.locator(".col-text").allTextContents();
  expect(orderid.includes(orderIdDetails)).toBeTruthy();
});
  