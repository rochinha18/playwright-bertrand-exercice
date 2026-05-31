import { expect, type Page } from '@playwright/test';

export class AuthorPage {
  constructor(private readonly page: Page) {}

  async expectFeaturedBook(bookTitle: string) {
    // check if book appear in "Destaque" area
    const featuredContainer = this.featuredContainer;
    await expect(featuredContainer).toBeVisible();
    await expect(featuredContainer).toContainText('Em destaque');
    await expect(featuredContainer).toContainText(bookTitle);
  }

  async openFirstFeaturedBook() {
    // if exists check the info
    const featuredBook = this.featuredContainer.locator('.featured-book img').first();
    await expect(featuredBook).toBeVisible();
    await featuredBook.click();
  }

  private get featuredContainer() {
    return this.page.locator('.autor-featured-container');
  }
}
