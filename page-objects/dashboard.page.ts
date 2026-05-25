import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

/**
 * Dashboard page object for main application navigation.
 */
export class DashboardPage extends BasePage {
    /**
     * Initialize the dashboard page.
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    /**
     * Verify that the dashboard page is loaded.
     * @throws Error if dashboard breadcrumb is not visible
     */
    async verifyOnDashboardPage(): Promise<void> {
        try {
            await this.page.waitForLoadState("networkidle");
            await expect(this.page.locator(".oxd-topbar-header-breadcrumb-module", { hasText: "Dashboard" })).toBeVisible({ timeout: 60000 });
        } catch (error) {
            console.error("Not on dashboard page", error);
            throw new Error("Dashboard page not loaded");
        }
    }

    /**
     * Navigate to a specific module from the main menu.
     * @param moduleName - Name of the module to navigate to
     * @throws Error if module menu item is not found
     */
    async navigateToModule(moduleName: string): Promise<void> {
        try {
            await this.page.waitForLoadState("networkidle");
            await this.page.locator(".oxd-main-menu a", { hasText: moduleName }).first().click();
            await this.page.waitForLoadState("networkidle");
        } catch (error) {
            console.error(`Failed to navigate to module: ${moduleName}`, error);
            throw new Error(`Module "${moduleName}" not found in menu`);
        }
    }
}
