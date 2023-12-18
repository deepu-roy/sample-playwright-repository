import PimLandingPage from "./pimLanding.page";

class AddEmployeePage extends PimLandingPage{  
  constructor(page) {
    super(page);
    this.page = page;
  }

  addEmployee = async (employee) => {    
    await this.page.getByPlaceholder("First Name").fill(employee.firstName);
    await this.page.getByPlaceholder("Middle Name").fill(employee.middleName);
    await this.page.getByPlaceholder("Last Name").fill(employee.lastName);
    await this.page.waitForTimeout(2000);
    await this.page
      .locator("div.user-form-header input")
      .first()
      .click({ force: true });
    await this.page
      .locator("div.oxd-input-group", {
        has: this.page.locator("label", { hasText: "Username" }),
      })
      .locator("input")
      .first()
      .fill(employee.username);
    await this.page
      .locator("div.oxd-input-group", {
        has: this.page.locator("label", { hasText: "Password" }),
      })
      .locator("input")
      .first()
      .fill(employee.password);
    await this.page
      .locator("div.oxd-input-group", {
        has: this.page.locator("label", { hasText: "Confirm Password" }),
      })
      .locator("input")
      .first()
      .fill(employee.password);

    await this.page.getByRole("button", { name: "Save" }).first().click();
    await this.page.waitForTimeout(4000);
  };
}
export default AddEmployeePage;
