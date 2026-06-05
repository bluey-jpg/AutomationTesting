import { test, expect } from '@playwright/test'

test('user can accept a JS alert', async ({ page }) => {

  // Navigate to the alerts page
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  // Set up the dialog handler BEFORE clicking the button
  page.once('dialog', dialog => {
    console.log(`Alert says: ${dialog.message()}`)
    dialog.accept() // clicks OK
  })

  // Click the button that triggers the alert
  await page.getByRole('button', { name: 'Click for JS Alert' }).click()

  // Assert the result message appeared on the page
  await expect(page.getByText('You successfully clicked an alert')).toBeVisible()
})