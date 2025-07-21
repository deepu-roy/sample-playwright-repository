import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async verifyOnDashboardPage(): Promise<void> {
        await expect(this.page.locator("h6").first()).toHaveText("Dashboard");
    }

    async navigateToModule(moduleName: string): Promise<void> {
        await this.page.locator(".oxd-main-menu a", { hasText: moduleName }).first().click();
    }
}
