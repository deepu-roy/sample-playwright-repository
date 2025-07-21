import { expect, Page, Locator } from "@playwright/test";
import ModuleLandingPage from "./module-landing.page";

export class PimLandingPage extends ModuleLandingPage {
    private pageTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.pageTitle = this.page.locator(".oxd-topbar-header-breadcrumb");
    }

    async verifyOnPimLandingPage(): Promise<void> {
        await this.page.waitForSelector(".oxd-topbar-header-breadcrumb");
        await expect(this.pageTitle).toContainText("PIM");
    }
}
