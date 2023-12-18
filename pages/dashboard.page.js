import ModuleLandingPage from "./moduleLanding.page";
const { expect } = require("@playwright/test");

class DashboardPage extends ModuleLandingPage {
  constructor(page) {
    super(page);
    this.page = page;
  }
  verifyOnDashboardPage = async () => {
    await expect(this.page.locator("h6").first()).toHaveText("Dashboard");
  };
}
export default DashboardPage;
