import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('delivrd');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.goto('https://www.youtube.com/watch?v=ogM40UTzRvQ');

  // Assert the video title is correct
  await expect(page.getByRole('heading', { name: 'I Asked for $30,000 Off a BMW and the Dealer SAID WHAT?!' })).toBeVisible();
});