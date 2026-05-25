import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

/**
 * Module Landing page object providing shared module navigation functionality.
 */
export default class ModuleLandingPage extends BasePage {
    /**
     * Initialize the module landing page.
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    /**
     * Navigate to a specific module.
     * @param moduleName - Name of the module to navigate to
     * @throws Error if module menu item is not found
     */
    navigateToModule = async (moduleName: string): Promise<void> => {
        try {
            await this.page.locator(".oxd-main-menu a", { hasText: moduleName }).first().click();
            await this.page.waitForLoadState("networkidle");
        } catch (error) {
            console.error(`Failed to navigate to module: ${moduleName}`, error);
            throw new Error(`Module "${moduleName}" not found`);
        }
    };

    /**
     * Navigate to a specific page within a module.
     * @param pageName - Name of the page to navigate to
     * @throws Error if page menu item is not found
     */
    navigateToPage = async (pageName: string): Promise<void> => {
        try {
            await this.page.locator(".oxd-topbar-body-nav ul a", { hasText: pageName }).first().click();
            await this.page.waitForLoadState("networkidle");
        } catch (error) {
            console.error(`Failed to navigate to page: ${pageName}`, error);
            throw new Error(`Page "${pageName}" not found`);
        }
    };

    /**
     * Verify current module name.
     * @param moduleName - Expected module name
     * @throws Error if module name doesn't match
     */
    verifyOnModule = async (moduleName: string): Promise<void> => {
        try {
            await expect(this.page.locator("h6").first()).toHaveText(moduleName);
        } catch (error) {
            console.error(`Module verification failed: ${moduleName}`, error);
            throw new Error(`Expected module "${moduleName}" not found`);
        }
    };

    /**
     * Verify current page name.
     * @param pageName - Expected page name
     * @throws Error if page name doesn't match
     */
    verifyOnPage = async (pageName: string): Promise<void> => {
        try {
            await expect(this.page.locator(".oxd-topbar-body-nav-tab.--visited a").first()).toHaveText(pageName);
        } catch (error) {
            console.error(`Page verification failed: ${pageName}`, error);
            throw new Error(`Expected page "${pageName}" not found`);
        }
    };
}
