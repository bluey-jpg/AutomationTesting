// Export the class so other files can use it
export class ExpandLoginPage {

  // Constructor — stores the page and defines all locators
  constructor(page) {
    this.page = page

    // Locators for the login page
    this.usernameInput = page.getByRole('textbox', { name: 'Username' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Login' })

    // Locator for the success message (dynamic content!)
    this.successMessage = page.getByText('You logged into a secure area!')
  }

  // Action — navigate to the login page
  async goto() {
    await this.page.goto('https://practice.expandtesting.com/login')
  }

  // Action — fill in credentials and submit
  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}