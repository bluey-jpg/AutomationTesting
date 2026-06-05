// Import Playwright's test and expect tools
import { test, expect } from '@playwright/test'

// Import our YouTubePage class from the pages folder
import { YouTubePage } from '../pages/YouTubePage.js'

test('search for delivrd on youtube', async ({ page }) => {
  
  // Create a new instance of YouTubePage and pass in the browser page
  const youtube = new YouTubePage(page)

  // Use our goto() action to open YouTube
  await youtube.goto()

  // Use our search() action to search for delivrd
  await youtube.search('delivrd')

  // Assert that the URL changed to a YouTube search results page
  await expect(page).toHaveURL(/search_query=delivrd/)
})