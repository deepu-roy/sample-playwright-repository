const { expect } = require("@playwright/test");
import BasePage from "./base.page";
class ModuleLandingPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;    
  }

  navigateToModule = async (moduleName) => {
    await this.page
      .locator(".oxd-main-menu a", { hasText: moduleName })
      .first()
      .click();
  };

  navigateToPage = async (pageName) => {
    await this.page
      .locator(".oxd-topbar-body-nav ul a", { hasText: pageName })
      .first()
      .click();
  };

  verifyOnModule = async (moduleName) => {
    await expect(this.page.locator("h6").first()).toHaveText(moduleName);
  };

  verifyOnPage = async (pageName) => {  
    await expect(this.page.locator(".oxd-topbar-body-nav-tab.--visited a").first()).toHaveText(pageName);
  };
}
export default ModuleLandingPage;
