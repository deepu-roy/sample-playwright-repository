import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/login.page";
import { DashboardPage } from "../page-objects/dashboard.page";
import { PimLandingPage } from "../page-objects/pim-landing.page";
import { EmployeeListPage } from "../page-objects/pim/employee-list.page";
import { AddEmployeePage } from "../page-objects/pim/add-employee.page";

// Define the type for our custom test fixtures
type PageObjectFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    pimLandingPage: PimLandingPage;
    employeeListPage: EmployeeListPage;
    addEmployeePage: AddEmployeePage;
};

// Extend the test with page objects
export const test = base.extend<PageObjectFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    pimLandingPage: async ({ page }, use) => {
        const pimLandingPage = new PimLandingPage(page);
        await use(pimLandingPage);
    },
    employeeListPage: async ({ page }, use) => {
        await use(new EmployeeListPage(page));
    },
    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployeePage(page));
    }
});

export { expect };
