// Import Playwright's test and expect tools
import { test, expect } from '@playwright/test'

// Import our LoginPage class from the pages folder
import { LoginPage } from '../pages/LoginPage.js'

test('user can log in successfully', async ({ page }) => {

  // Create a new instance of LoginPage
  const loginPage = new LoginPage(page)

  // Navigate to the login page
  await loginPage.goto()

  // Log in with the test credentials
  await loginPage.login('student', 'Password123')

  // Assert that the page contains "Logged In Successfully"
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible()
})