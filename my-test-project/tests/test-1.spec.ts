import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://your-site.com/');
  await page.getByRole('img', { name: 'Free Domain Parking' }).click();
  await page.getByRole('link', { name: 'Sitebuilder' }).click();
  await page.getByRole('heading', { name: 'Our easy navigation - there' }).click();
  await page.getByText('Our easy navigation - there is no better way! Our easy navigation - everything').click();
  await page.getByRole('heading', { name: 'Add new page easily!' }).click();
  await page.getByAltText('Your-Site Website Hosting').click();
});