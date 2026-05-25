import { Page } from "@playwright/test";
import BasePage from "../base.page";

/**
 * Employee List page object for managing employee records.
 */
export class EmployeeListPage extends BasePage {
    /**
     * Initialize the employee list page.
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to the Add Employee page.
     * @throws Error if the Add button is not found
     */
    async navigateToAddEmployee(): Promise<void> {
        try {
            await this.page.getByRole("button", { name: "Add" }).click();
            await this.page.waitForLoadState("networkidle");
        } catch (error) {
            console.error("Failed to navigate to add employee", error);
            throw new Error("Add button not found on employee list page");
        }
    }
}
