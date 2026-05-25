import { expect, Page } from "@playwright/test";

/**
 * Base page object class providing common functionality for all page objects.
 * Extends this class to inherit page interaction utilities.
 */
export default class BasePage {
    protected page: Page;

    /**
     * Initialize the base page with a Playwright page instance.
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Verify that expected text is visible on the current page.
     * Waits for network idle before checking.
     * @param expectedText - The text to verify is visible
     * @throws Error if the text is not found or not visible
     */
    async verifyOnPage(expectedText: string): Promise<void> {
        try {
            await this.page.waitForLoadState("networkidle");
            const heading = this.page
                .locator("h6.orangehrm-main-title, h5.oxd-table-filter-title, header li.--visited a")
                .filter({ hasText: expectedText })
                .first();
            await expect(heading).toBeVisible({ timeout: 10000 });
        } catch (error) {
            console.error(`Failed to verify text on page: ${expectedText}`, error);
            throw new Error(`Expected text "${expectedText}" not found on page`);
        }
    }
}
