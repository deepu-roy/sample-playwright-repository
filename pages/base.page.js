const { expect } = require("@playwright/test");
class BasePage {
    constructor(page) {
        this.page = page;
    }
}
export default BasePage;
