import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class DroppablePage extends BasePage {
  readonly page: Page;
  readonly draggableElement: Locator;
  readonly droppableElement: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    // locators
    this.draggableElement = page.locator("#draggable");
    this.droppableElement = page.locator(".simple-drop-container .drop-box");
  }

  // methods
  async goto() {
    await this.page.goto("/droppable");
  }

  async dragNDropElement(element: Locator) {
    await this.draggableElement.dragTo(element);
  }

  async checkIfDropped() {
    await expect(this.droppableElement).toHaveText("Dropped!");
  }
}
