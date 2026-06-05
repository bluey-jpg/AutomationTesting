// Export the class so other files can use it
export class LoginPage {

  // Constructor runs when we create a new LoginPage
  // Stores the page and defines all locators in one place
  constructor(page) {
    this.page = page

    // Locators
    this.usernameInput = page.getByRole('textbox', { name: 'Username' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })
  }

  // Action — navigate to the login page
  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/')
  }

  // Action — fill in credentials and submit
  // 'username' and 'password' get passed in when we call this method
  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }
}