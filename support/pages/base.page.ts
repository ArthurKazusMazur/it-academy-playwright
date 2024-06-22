import { expect, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertElementContainsText(element: any, text: string) {
    await expect(element).toContainText(text);
  }

  async assertPageUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertIsVisible(element: any) {
    await expect(element).toBeVisible();
  }
}
