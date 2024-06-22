import { Browser, Page, chromium } from "playwright/test";

async function globalSetup() {
  // Initialization of new browser, context and page
  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  // login logic
  // await page.goto("https://demoqa.com/login");
  // await page.locator("#userName").fill("kaszulkIns");
  // await page.locator("#password").fill("1046512@Kliu");
  // await page.locator("#login").click();

  await page.goto("http://localhost:2221/my-account");

  await page.locator('[placeholder="E-Mail"]').fill("admin");
  await page.locator("[placeholder='Password']").fill("Admin123");
  await page.locator("[type='submit']", { hasText: "Login" }).click();

  // Save session data
  await page.context().storageState({ path: "./userSession.json" });

  // Close browser
  await browser.close();
}

export default globalSetup;
