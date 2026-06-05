import { test, expect } from '@playwright/test';

test('homepage has a title', async ({ page }) => {
  await page.goto('https://example.com');

  // Check the page title
  await expect(page).toHaveTitle(/Example Domain/);

  // Click a link
  await page.getByRole('link', { name: 'More information' }).click();
});