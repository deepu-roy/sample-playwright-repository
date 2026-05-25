import { Page } from "@playwright/test";
import BasePage from "../base.page";
import { Employee } from "../../types/employee.interface";

/**
 * Add Employee page object for creating new employees.
 */
export class AddEmployeePage extends BasePage {
    /**
     * Initialize the add employee page.
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        super(page);
    }

    /**
     * Add a new employee with the provided details.
     * @param employee - Employee data to fill in the form
     * @throws Error if form fields are not found or fill fails
     */
    async addEmployee(employee: Employee): Promise<void> {
        try {
            await this.page
                .locator("div.oxd-grid-item")
                .filter({ has: this.page.locator("label", { hasText: "Employee Id" }) })
                .locator("input")
                .fill(employee.employeeId);

            await this.page.getByPlaceholder("First Name").fill(employee.firstName);
            await this.page.getByPlaceholder("Middle Name").fill(employee.middleName);
            await this.page.getByPlaceholder("Last Name").fill(employee.lastName);

            await this.page.locator("div.user-form-header input").first().click({ force: true });

            await this.page
                .locator("div.oxd-input-group", {
                    has: this.page.locator("label", { hasText: "Username" })
                })
                .locator("input")
                .first()
                .fill(employee.username);

            await this.page
                .locator("div.oxd-input-group", {
                    has: this.page.locator("label", { hasText: "Password" })
                })
                .locator("input")
                .first()
                .fill(employee.password);

            await this.page
                .locator("div.oxd-input-group", {
                    has: this.page.locator("label", { hasText: "Confirm Password" })
                })
                .locator("input")
                .first()
                .fill(employee.password);

            await this.page.getByRole("button", { name: "Save" }).first().click();

            // Wait for the page to update after save
            await this.page.waitForLoadState("networkidle");
        } catch (error) {
            console.error("Failed to add employee", error);
            throw new Error(`Failed to add employee: ${employee.firstName} ${employee.lastName}`);
        }
    }
}
