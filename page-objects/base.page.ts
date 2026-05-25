import { expect, Page } from "@playwright/test";

export default class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyOnPage(expectedText: string): Promise<void> {
        await this.page.waitForLoadState("networkidle");
        // Try to find the text in any heading first, then fall back to any visible text
        const heading = this.page.locator("h6.orangehrm-main-title, h5.oxd-table-filter-title").filter({ hasText: expectedText }).first();
        await expect(heading).toBeVisible({ timeout: 10000 });
    }
}
