// We 'export' this class so other files can import and use it
export class YouTubePage {
  
  // 'constructor' runs automatically when we create a new YouTubePage
  // 'page' is the browser page Playwright controls — we pass it in
  constructor(page) {
    this.page = page

    // Define all locators here once
    this.searchBar = page.getByRole('combobox', { name: 'Search' })
  }

  // Action — navigate to YouTube
  async goto() {
    await this.page.goto('https://www.youtube.com')
  }

  // Action — search for anything
  // 'term' is whatever we want to search for
  async search(term) {
    await this.searchBar.fill(term)
    await this.searchBar.press('Enter')
  }
}