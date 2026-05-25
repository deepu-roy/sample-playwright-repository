import { test } from "../fixtures/page-objects.fixture";
import { faker } from "@faker-js/faker";
import { Employee } from "../types/employee.interface";

const employee: Employee = {
    employeeId: faker.string.numeric(6),
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    password: "Password123"
};

test.beforeEach(async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { timeout: 60000 });
});

test("Add employee test", async ({ loginPage, dashboardPage, pimLandingPage, employeeListPage, addEmployeePage }) => {
    await test.step("Login", async () => {
        await loginPage.login("Admin", "admin123");
    });
    await test.step("Navigate to PIM module", async () => {
        await dashboardPage.navigateToModule("PIM");
        await pimLandingPage.verifyOnPimLandingPage();
        await pimLandingPage.verifyOnPage("Employee List");
        await employeeListPage.verifyOnPage("Employee List");
    });
    await test.step("Add employee", async () => {
        await employeeListPage.navigateToAddEmployee();
        await addEmployeePage.verifyOnPage("Add Employee");
        await addEmployeePage.addEmployee(employee);
        await employeeListPage.verifyOnPage("Employee List");
    });
});
