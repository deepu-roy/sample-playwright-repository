import { Page } from "@playwright/test";
import BasePage from "../base.page";

export class EmployeeListPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToAddEmployee(): Promise<void> {
        await this.page.getByRole("button", { name: "Add" }).click();
    }
}
