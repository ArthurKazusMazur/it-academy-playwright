import { test } from "../../support/fixtures/page.fixtures";
import { expect } from "playwright/test";
import { MainPage } from "../../support/pages/main.page";


test("Main page default visual test ", async ({ mainPage, page }) => {
  // Navigate to a page
  await mainPage.goto();
  // Make visaul assertion
  await expect(page).toHaveScreenshot();
});

test("Main page full page screenshot visaul test", async ({
  mainPage,
  page,
}) => {
  await mainPage.goto();
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Main page Widgets screenshot visual test", async ({ mainPage, page }) => {
  await mainPage.goto();
  const element = mainPage.cardWidgets;
  await expect(element).toHaveScreenshot("card-widgets.png");
});

test("Main page mask untracked elements", async ({ mainPage, page }) => {
  await mainPage.goto();
  const element = mainPage.mainBanner;
  await expect(page).toHaveScreenshot({
    mask: [element, mainPage.cardWidgets],
  });
});
