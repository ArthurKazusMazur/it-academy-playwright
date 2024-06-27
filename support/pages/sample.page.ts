import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class SamplePage extends BasePage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    // Locators
    this.header = page.locator("h1");
  }
}

export default SamplePage;
