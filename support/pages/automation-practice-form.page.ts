import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class AutomationPracticeFormPage extends BasePage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly maleRadioButton: Locator;
  readonly sportsCheckbox: Locator;
  readonly readingCheckbox: Locator;
  readonly musicCheckbox: Locator;
  readonly submitButton: Locator;
  readonly studentDataForm: Locator;
  readonly studentNameValueField: Locator;
  readonly sdudentMobileValueField: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    // Locators
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.emailInput = page.locator("#userEmail");
    this.phoneNumberInput = page.locator("#userNumber");
    this.maleRadioButton = page.locator('[value="Male"]');
    this.sportsCheckbox = page.getByLabel("Sports");
    this.readingCheckbox = page.getByLabel("Reading");
    this.musicCheckbox = page.getByLabel("Music");
    this.submitButton = page.locator("#submit");
    this.studentDataForm = page.locator(".modal-content");
    this.studentNameValueField = page.locator("tbody tr :nth-child(2)").first();
    this.sdudentMobileValueField = page
      .locator("tbody tr :nth-child(2)")
      .nth(3);
  }

  // Methods
  async goto() {
    await this.page.goto("/automation-practice-form", {
      waitUntil: "domcontentloaded",
    });
  }

  async fillFirstName(name: string) {
    await this.firstNameInput.fill(name);
  }

  async fillLastName(surname: string) {
    await this.lastNameInput.fill(surname);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPhoneNumber(phoneNumber: string) {
    await this.phoneNumberInput.fill(phoneNumber);
  }

  async checkMaleRadioButton() {
    await this.maleRadioButton.click({ force: true });
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}
