import ModuleLandingPage from "../moduleLanding.page";

class PimLandingPage extends ModuleLandingPage {
  constructor(page) {
    super(page);
    this.page = page;
  }
  verifyOnPimLandingPage = async () => {
    await this.verifyOnModule("PIM");
  };

  navigateToEmployeeList = async () => {
    await this.navigateToPage("Employee List");
  }

  navigateToAddEmployee = async () => {
    await this.navigateToPage("Add Employee");
  }

  navigateToReports = async () => {
    await this.navigateToPage("Reports");
  }
}
export default PimLandingPage;
