import { expect, test } from "@playwright/test";
import MainPage from "../support/pages/main.page";
import { FormsPage } from "../support/pages/forms.page";
import BrowserWindowsPage from "../support/pages/browser-windows.page";
import SamplePage from "../support/pages/sample.page";

test("Multiple tabs. Two tabs same time", async ({ page, context }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();

  // Define new tab instance
  const newTab = await context.newPage();
  const formsPageTab = new FormsPage(newTab);

  await formsPageTab.goto();

  await formsPageTab.practiceFormsButtonClick();

  // Switch context to the first tab
  await page.bringToFront();

  await mainPage.cardWidgets.click();

  await page.close();
});

test("Multiple tabs. Two tabs consiquently", async ({ page, context }) => {
  const browserWindowsPage = new BrowserWindowsPage(page);

  //    Navigation to the first tab
  await browserWindowsPage.goto();

  // Define event listener to wait for a event responsible fot new tab to be opened
  const tabPromise = context.waitForEvent("page");

  await browserWindowsPage.newTabButton.click();

  const newTab = await tabPromise;
  const samplePageTab = new SamplePage(newTab);

  //    New tab should be opened
  expect(
 await samplePageTab.assertElementContainsText(
      samplePageTab.header,
      "This is a sample page"
    )
  );
});
