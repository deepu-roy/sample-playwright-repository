import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";
export default class ModuleLandingPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    navigateToModule = async (moduleName: string): Promise<void> => {
        await this.page.locator(".oxd-main-menu a", { hasText: moduleName }).first().click();
    };

    navigateToPage = async (pageName: string): Promise<void> => {
        await this.page.locator(".oxd-topbar-body-nav ul a", { hasText: pageName }).first().click();
    };

    verifyOnModule = async (moduleName: string): Promise<void> => {
        await expect(this.page.locator("h6").first()).toHaveText(moduleName);
    };

    verifyOnPage = async (pageName: string): Promise<void> => {
        await expect(this.page.locator(".oxd-topbar-body-nav-tab.--visited a").first()).toHaveText(pageName);
    };
}
