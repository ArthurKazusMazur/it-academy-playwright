import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProfilePage extends BasePage {
  readonly page: Page;
  readonly logOutButton: Locator;
  readonly loggedUserNameLable: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.logOutButton = this.page.locator("#submit", { hasText: "Log out" });
    this.loggedUserNameLable = this.page.locator("#userName-value");
  }

  async goto() {
    await this.page.goto("/profile", { waitUntil: "domcontentloaded" });
  }

  async checkIfLogged() {
    await this.page.waitForLoadState("load", {
      timeout: 15 * 1000,
    });
    await expect(this.loggedUserNameLable).not.toBeEmpty();
    await expect(
      this.logOutButton,
      "User could not login the system"
    ).toBeVisible();
  }
}
