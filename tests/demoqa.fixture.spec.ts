import { chromium, test } from "@playwright/test";

test("Without fixtures", async () => {
  // create a browser chrome instance
  const browser = await chromium.launch();
  // create isolated chrome browser context
  const context = await browser.newContext();
  // create page
  const page = await context.newPage();
  // Go to page https://demoqa.com/automation-practice-form
  await page.goto("/automation-practice-form");

  //   Use context to remove cookies
  const pageCookies = await context.cookies();
  console.log(pageCookies);
  console.log("AFTER CLEAR COOKIES");
  await context.clearCookies();
  const cookiesCleared = await context.cookies();
  console.log(cookiesCleared);

  // create another isolated browser
  // create another isolated browser context
  const context2 = await browser.newContext();
  // create another isolated page
  const page2 = await context2.newPage();
  await page2.goto("https://hatstore.co.uk/");
  await page2.pause();

  // make a request
  const req = await page.request.get("https://reqres.in/api/users/3");
  const resp = await req.json();
  console.log(resp);
});

test("With fixtures", async ({
  page,
  browser,
  context,
  request,
  browserName,
}) => {
  // Go to page https://demoqa.com/automation-practice-form
  await page.goto("/automation-practice-form");

  //   Use context to remove cookies
  const pageCookies = await context.cookies();
  console.log(pageCookies);
  console.log("AFTER CLEAR COOKIES");
  await context.clearCookies();
  const cookiesCleared = await context.cookies();
  console.log(cookiesCleared);

  // create another isolated browser
  // create another isolated browser context
  const context2 = await browser.newContext();
  // create another isolated page
  const page2 = await context2.newPage();
  await page2.goto("https://hatstore.co.uk/");
  await page2.pause();

  // make a request
  const req = await request.get("https://reqres.in/api/users/3");
  const resp = await req.json();
  console.log(resp);

  console.log(await browserName);
});
