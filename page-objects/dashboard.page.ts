import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async verifyOnDashboardPage(): Promise<void> {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator(".oxd-topbar-header-breadcrumb-module", { hasText: "Dashboard" })).toBeVisible({ timeout: 60000 });
    }

    async navigateToModule(moduleName: string): Promise<void> {
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(".oxd-main-menu a", { hasText: moduleName }).first().click();
    }
}
