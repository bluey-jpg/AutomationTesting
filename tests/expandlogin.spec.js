// Import Playwright's test and expect tools
import { test, expect } from '@playwright/test'

// Import our ExpandLoginPage class from the pages folder
import { ExpandLoginPage } from '../pages/ExpandLoginPage.js'

test('user can log in and sees success message', async ({ page }) => {

  // Create a new instance of ExpandLoginPage
  const loginPage = new ExpandLoginPage(page)

  // Navigate to the login page
  await loginPage.goto()

  // Log in with the test credentials
  await loginPage.login('practice', 'SuperSecretPassword!')

  // Assert that the success message is visible (dynamic content!)
  await expect(loginPage.successMessage).toBeVisible()
})