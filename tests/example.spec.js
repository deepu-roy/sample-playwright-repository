// @ts-check
const { test, expect } = require("@playwright/test");
import { faker } from "@faker-js/faker";

test("Add employee test", async ({ page }) => {
  // add some exemples of using css selectors in playwright test
  await test.step("Navigate to login", async () => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  await test.step("Login", async () => {
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("h6").first()).toHaveText("Dashboard");
  });

  await test.step("Navigate to PIM", async () => {
    await page.locator("a", { hasText: "PIM" }).first().click();
    await expect(page.locator("h6").first()).toHaveText("PIM");
  });

  const employee = {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };

  await test.step("Add employee", async () => {
    await page.locator("button", { hasText: "Add" }).first().click();
    await page.getByPlaceholder("First Name").fill(employee.firstName);
    await page.getByPlaceholder("Middle Name").fill(employee.middleName);
    await page.getByPlaceholder("Last Name").fill(employee.lastName);
    await page.locator("div.user-form-header input").first().check({force: true});
    await page.locator("div.oxd-input-group", { has: page.locator("label", { hasText: "Username" }),})
      .fill(employee.username);
    await page.locator("div.oxd-input-group", { has: page.locator("label", { hasText: "Password" }), })
      .fill(employee.password);
    await page.locator("div.oxd-input-group", { has: page.locator("label", { hasText: "Confirm Password" }), })
      .fill(employee.password);
  });
});
