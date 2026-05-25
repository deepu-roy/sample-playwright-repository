import { Page } from "@playwright/test";

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.waitForLoadState("networkidle");
        await this.page.getByPlaceholder("Username").fill(username);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.locator('button[type="submit"]').click();
    }
}
