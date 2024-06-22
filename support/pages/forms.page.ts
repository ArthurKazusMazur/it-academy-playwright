import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class FormsPage extends BasePage {
  readonly page: Page;
  readonly practiceFormButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    // Locators
    this.practiceFormButton = page.getByText("Practice Form");
  }

  // Methods
  async goto() {
    await this.page.goto("/forms", { waitUntil: "domcontentloaded" });
  }

  async practiceFormsButtonClick() {
    await this.practiceFormButton.click();
  }
}
