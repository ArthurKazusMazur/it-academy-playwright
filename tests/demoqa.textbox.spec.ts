import { test, expect } from "@playwright/test";
import { TextBoxPage } from "../support/pages/text-box.page";

test.describe("DemoQA: testing forms.", () => {
  test("Testing text form. Valid data", async ({ page }) => {
    const userData = {
      fullName: "Dormidont Podoprigora",
      email: "my.email@mail.com",
      currentAddress: "Paris, 18-24, Picadilly circus",
    };

    const textBoxPage = new TextBoxPage(page);

    await textBoxPage.goto();

    await textBoxPage.fillFullName(userData.fullName);
    await textBoxPage.fillEmail(userData.email);
    await textBoxPage.fillCurrentAddress(userData.currentAddress);
    await textBoxPage.clickSubmitButton();

    await textBoxPage.assertElementContainsText(
      textBoxPage.nameOutput,
      userData.fullName
    );
    await expect(textBoxPage.emailOutput).toContainText(userData.email);
    await expect(textBoxPage.currentAddressOutput).toContainText(
      userData.currentAddress
    );
  });

  test("Negative. Testing text form. Invalid data", async ({ page }) => {
    const userData = {
      fullName: "Dormidont Podoprigora",
      email: "my.email",
      currentAddress: "Paris, 18-24, Picadilly circus",
    };

    const textBoxPage = new TextBoxPage(page);

    await textBoxPage.goto();

    await textBoxPage.fillFullName(userData.fullName);
    await textBoxPage.fillEmail(userData.email);
    await textBoxPage.fillCurrentAddress(userData.currentAddress);
    await textBoxPage.clickSubmitButton();

    await textBoxPage.assertBorderColor(
      textBoxPage.emailInput,
      "1px solid rgb(255, 0, 0)"
    );
  });
});
