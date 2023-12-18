class LoginPage {
  constructor(page) {
    this.page = page;
  }

  login = async (username, password) => {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.locator('button[type="submit"]').click();    
  };
  
}
export default LoginPage;
