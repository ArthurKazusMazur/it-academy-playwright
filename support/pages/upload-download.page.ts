import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class UploadPage extends BasePage {
  readonly page: Page;
  readonly uploadFileButton: Locator;
  readonly uploadedFilePath: Locator;
  readonly downloadButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.uploadFileButton = page.locator("#uploadFile");
    this.uploadedFilePath = page.locator("#uploadedFilePath");
    this.downloadButton = page.locator("#downloadButton");
  }

  async goto() {
    await this.page.goto("/upload-download");
  }

  async uploadFile(path: string) {
    await this.uploadFileButton.setInputFiles(path);
    // add event listener for dialog window opening
    this.page.once("dialog", (dialog) => {
      dialog.accept();
    });
  }

  async downLoadFile(path: string) {
    // add event listener
    const downloadPromise = this.page.waitForEvent("download");

    await this.downloadButton.click();
    const download = await downloadPromise;

    await download.saveAs(path + download.suggestedFilename());
  }

  async checkIfUploaded() {
    await expect(
      this.uploadedFilePath,
      "Oops! It looks like your file was not uploaded."
    ).not.toBeEmpty();
  }
}
