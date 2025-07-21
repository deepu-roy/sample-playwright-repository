import { Page } from "@playwright/test";
import BasePage from "../base.page";
import { Employee } from "../../types/employee.interface";

export class AddEmployeePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async addEmployee(employee: Employee): Promise<void> {
        await this.page
            .locator("div.oxd-grid-item")
            .filter({ has: this.page.locator("label", { hasText: "Employee Id" }) })
            .locator("input")
            .fill(employee.employeeId);
        await this.page.getByPlaceholder("First Name").fill(employee.firstName);
        await this.page.getByPlaceholder("Middle Name").fill(employee.middleName);
        await this.page.getByPlaceholder("Last Name").fill(employee.lastName);
        await this.page.waitForTimeout(2000);
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
        await this.page.waitForTimeout(4000);
    }
}
