import { expect, type Page } from '@playwright/test';

export class ProductPage {
  constructor(private readonly page: Page) {}

  async expectAuthor(authorName: string) {
    // check the author
    await expect(this.author).toBeVisible();
    await expect(this.author).toContainText(authorName);
  }

  async expectIsbn(isbn: string) {
    // ISBN
    // first because ean is equal
    await expect(this.page.locator('#productPageSectionDetails-collapseDetalhes-content-isbn').first()).toContainText(isbn);
  }

  async expectNumberOfPages(nrpages: string) {
    // number of pages
    await expect(this.page.locator('#productPageSectionDetails-collapseDetalhes-content-nrPages')).toContainText(nrpages);
  }

  async expectDimensions(dimensions: string) {
    // dimensions of the book
    await expect(this.page.locator('#productPageSectionDetails-collapseDetalhes-content-dimensions')).toContainText(dimensions);
  }

  async expectLanguage(language: string) {
    // language
    await expect(this.page.locator('#productPageRightSectionTop-language')).toContainText(language);
  }

  async expectLanguageFlag(flagClass: string) {
    // flag
    await expect(this.page.locator('#productPageRightSectionTop-languageFlag')).toHaveClass(new RegExp(flagClass));
  }

  async openAuthorBestsellers() {
    // check other books from same author
    const bestsellersTitle = this.page.locator('#productPageSectionAboutAuthor-bestsellers-title');
    await expect(bestsellersTitle).toBeVisible();
    await bestsellersTitle.click();
  }

  async addToCart() {
    // add to cart
    const addToCartButton = this.page.locator('#productPageRightSectionTop-actions-addCart-btn');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.scrollIntoViewIfNeeded();
    await addToCartButton.click({ force: true });
  }

  async expectCartCount(count: string) {
    // check the cart counter
    await expect(this.page.locator('#badge-shoppingCart')).toHaveText(count, { timeout: 10000 });
  }

  private get author() {
    // author
    return this.page.locator('#productPageSectionDetails-collapseDetalhes-content-author');
  }
}
