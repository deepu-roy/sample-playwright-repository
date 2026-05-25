import { expect, Page, Locator } from "@playwright/test";
import ModuleLandingPage from "./module-landing.page";

/**
 * PIM Landing page object for the Personnel Information Management module.
 */
export class PimLandingPage extends ModuleLandingPage {
    private pageTitle: Locator;

    /**
     * Initialize the PIM landing page.
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        super(page);
        this.pageTitle = this.page.locator(".oxd-topbar-header-breadcrumb");
    }

    /**
     * Verify that the PIM landing page is loaded.
     * @throws Error if the page title doesn't contain "PIM"
     */
    async verifyOnPimLandingPage(): Promise<void> {
        try {
            await this.page.waitForLoadState("networkidle");
            await this.page.waitForSelector(".oxd-topbar-header-breadcrumb");
            await expect(this.pageTitle).toContainText("PIM", { timeout: 10000 });
        } catch (error) {
            console.error("Not on PIM landing page", error);
            throw new Error("PIM landing page not loaded");
        }
    }
}
