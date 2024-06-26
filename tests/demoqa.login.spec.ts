import { test } from "@playwright/test";
import { LoginPage } from "../support/pages/login.page";
import { ProfilePage } from "../support/pages/profile.page";
import { userData } from "../support/data/user.data";

test("Test with login. Should pass", async ({ page }) => {
  // const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  // await loginPage.goto();
  // await loginPage.doUserLogin(
  //   userData.validUserLogin.username,
  //   userData.validUserLogin.password
  // );
  await profilePage.goto();
  // await page.waitForLoadState();

  await profilePage.checkIfLogged();
});

test("Test without login. Login should be preserved", async ({ page }) => {
  const profilePage = new ProfilePage(page);

  await profilePage.goto();
  await profilePage.checkIfLogged();
});
