import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class TextBoxPage extends BasePage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly nameOutput: Locator;
  readonly emailOutput: Locator;
  readonly currentAddressOutput: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    // Locators
    this.fullNameInput = page.locator("#userName");
    this.emailInput = page.locator('[type="email"]');
    this.currentAddressInput = page.locator(".form-control").nth(2);
    this.submitButton = page.locator('[type="button"]', { hasText: "Submit" });
    this.nameOutput = page.locator("#name");
    this.emailOutput = page.locator("#email");
    this.currentAddressOutput = page.locator("#output #currentAddress");
  }

  // Methods
  async goto() {
    await this.page.goto("/text-box", { waitUntil: "domcontentloaded" });
  }

  async fillFullName(username: string) {
    await this.fullNameInput.fill(username);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillCurrentAddress(address: string) {
    await this.currentAddressInput.fill(address);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  // Assertions methods
  async assertBorderColor(element: Locator, color: string) {
    await expect(element, `Frame has color different then ${color}`).toHaveCSS(
      "border",
      color
    );
  }
}
