// @ts-check
const { test, expect } = require("@playwright/test");
import { da, faker } from "@faker-js/faker";
import LoginPage from "../pages/login.page";
import DashboardPage from "../pages/dashboard.page";
import EmployeeListPage from "../pages/pim/employeeList.page";
import AddEmployeePage from "../pages/pim/addEmployee.page";
import PimLandingPage from "../pages/pim/pimLanding.page";

const employee = {
  firstName: faker.person.firstName(),
  middleName: faker.person.middleName(),
  lastName: faker.person.lastName(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
};

test.beforeEach(async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
});

test("Add employee test", async ({ page }) => {
  await test.step("Login", async () => {
    await new LoginPage(page).login("Admin", "admin123");
    await new DashboardPage(page).verifyOnDashboardPage();
  });
  await test.step("Navigate to PIM module", async () => {
    await new DashboardPage(page).navigateToModule("PIM");
    await new PimLandingPage(page).verifyOnPimLandingPage();
    await new PimLandingPage(page).verifyOnPage("Employee List");
    await new EmployeeListPage(page).verifyOnPage("Employee List");
  });
  await test.step("Add employee", async () => {
    await new EmployeeListPage(page).navigateToAddEmployee();
    await new AddEmployeePage(page).verifyOnPage("Add Employee");
    await new AddEmployeePage(page).addEmployee(employee);
    await new EmployeeListPage(page).verifyOnPage("Employee List");
  });
});
