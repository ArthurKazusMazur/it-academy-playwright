import { FullConfig } from "@playwright/test";
import { Browser, Page, chromium } from "playwright/test";
import LoginPage from "./support/pages/login.page";
import { userData } from "./support/data/user.data";
import { ProfilePage } from "./support/pages/profile.page";

async function globalSetup(config: FullConfig) {
  // Initialization of new browser, context and page
  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  // login logic
  await page.goto(config.projects[0].use.baseURL + "/login", {
    waitUntil: "domcontentloaded",
  });
  
  await loginPage.doUserLogin(
    userData.validUserLogin.username,
    userData.validUserLogin.password
  );

  await profilePage.checkIfLogged();

  // Save session data
  await page.context().storageState({ path: "./userSession.json" });

  // Close browser
  await browser.close();
}

export default globalSetup;
