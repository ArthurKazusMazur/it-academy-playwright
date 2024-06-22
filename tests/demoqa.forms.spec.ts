import { userData } from "../support/data/user.data";
import { test } from "../support/fixtures/page.fixtures";

test("Check navigation to Practice Form page", async ({
  mainPage,
  formsPage,
  automationPracticeFormPage,
}) => {

  await mainPage.goto();
  await mainPage.cardFormsClick();
  await formsPage.practiceFormsButtonClick();

  await automationPracticeFormPage.assertPageUrl(
    "https://demoqa.com/automation-practice-form"
  );
});

test("Check submission form", async ({ automationPracticeFormPage }) => {

  const hobbies = [
    automationPracticeFormPage.sportsCheckbox,
    automationPracticeFormPage.musicCheckbox,
    automationPracticeFormPage.readingCheckbox,
  ];

  await automationPracticeFormPage.goto();
  await automationPracticeFormPage.fillFirstName(
    userData.validStudent.firstName
  );
  await automationPracticeFormPage.fillLastName(userData.validStudent.lastName);
  await automationPracticeFormPage.fillEmail(userData.validStudent.email);
  await automationPracticeFormPage.fillPhoneNumber(
    userData.validStudent.phoneNumber
  );

  await automationPracticeFormPage.checkMaleRadioButton();

  // Choose hobbies
  for (const hobby of hobbies) {
    await hobby.check({ force: true });
  }

  await automationPracticeFormPage.clickSubmitButton();
  await automationPracticeFormPage.assertIsVisible(
    automationPracticeFormPage.studentDataForm
  );

  await automationPracticeFormPage.assertElementContainsText(
    automationPracticeFormPage.studentNameValueField,
    userData.validStudent.firstName + " " + userData.validStudent.lastName
  );

  await automationPracticeFormPage.assertElementContainsText(
    automationPracticeFormPage.sdudentMobileValueField,
    userData.validStudent.phoneNumber
  );
});
