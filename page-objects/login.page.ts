import { Page } from "@playwright/test";

/**
 * Login page object for authentication flows.
 */
export class LoginPage {
    private page: Page;

    /**
     * Initialize the login page.
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Perform login with provided credentials.
     * Navigates to home, fills credentials, and waits for dashboard.
     * @param username - Username for login
     * @param password - Password for login
     * @throws Error if login fails or elements are not found
     */
    async login(username: string, password: string): Promise<void> {
        try {
            await this.page.goto("/");
            await this.page.waitForLoadState("networkidle");

            await this.page.getByPlaceholder("Username").fill(username);
            await this.page.getByPlaceholder("Password").fill(password);
            await this.page.locator('button[type="submit"]').click();

            // Wait for login to complete
            await this.page.waitForLoadState("networkidle");
        } catch (error) {
            console.error("Login failed", error);
            throw new Error(`Login failed for user: ${username}`);
        }
    }
}
