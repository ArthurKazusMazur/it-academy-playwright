import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class BrowserWindowsPage extends BasePage {
  readonly page: Page;
  readonly newTabButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    // Locators
    this.newTabButton = page.locator("#tabButton");
  }

  // Methods
  async goto() {
    await this.page.goto("/browser-windows", { waitUntil: "domcontentloaded" });
  }
}

export default BrowserWindowsPage;
