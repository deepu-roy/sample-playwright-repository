import { expect, Page } from "@playwright/test";

export default class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyOnPage(expectedText: string): Promise<void> {
        await expect(this.page.locator("h6").first()).toHaveText(expectedText);
    }
}
