import { test as base } from "@playwright/test";
import { TextBoxPage } from "../pages/text-box.page";
import { MainPage } from "../pages/main.page";
import { FormsPage } from "../pages/forms.page";
import { AutomationPracticeFormPage } from "../pages/automation-practice-form.page";

type Fixtures = {
  textBoxPage: TextBoxPage;
  mainPage: MainPage;
  formsPage: FormsPage;
  automationPracticeFormPage: AutomationPracticeFormPage;
};

export const test = base.extend<Fixtures>({
  textBoxPage: async ({ page }, use) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();
    await use(textBoxPage);
  },

  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },

  formsPage: async ({ page }, use) => {
    const formsPage = new FormsPage(page);
    await use(formsPage);
  },

  automationPracticeFormPage: async ({ page }, use) => {
    const automationPracticeFormPage = new AutomationPracticeFormPage(page);
    await use(automationPracticeFormPage);
  },
});
