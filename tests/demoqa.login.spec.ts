import { test, expect } from "@playwright/test";

// test.use({ storageState: "userSession.json" });
test("Test 1", async ({ page }) => {
  await page.goto("http://localhost:2221/my-account");
  //   await page.locator("#userName").fill("kaszulkIns");
  //   await page.locator("#password").fill("1046512@Kliu");
  //   await page.locator("#login").click();

  await expect(page.locator("h1")).toHaveText("My Account");
});

test("Test 2", async ({ page }) => {
  await page.goto("http://localhost:2221/my-account");
  //   await page.locator("#userName").fill("kaszulkIns");
  //   await page.locator("#password").fill("1046512@Kliu");
  //   await page.locator("#login").click();

  const logOutButton = page.locator("a", { hasText: "Checkout" });

  await expect(logOutButton).toBeVisible();
});
