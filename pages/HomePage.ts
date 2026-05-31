import { expect, type Page } from '@playwright/test';
import { acceptCookies } from '../helpers';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('https://www.bertrand.pt/');
    await acceptCookies(this.page);
  }

  async searchFor(term: string) {
    // search input
    await this.page.locator('#form-searchform-palavra').fill(term);
    // button search
    await this.page.getByRole('button', { name: 'pesquisar' }).click();
  }

  async openFirstResult(bookName: string) {
    await this.page.getByRole('link', { name: bookName }).first().click();
  }

  async searchAndOpenFirstResult(bookName: string) {
    // click on first option
    await this.searchFor(bookName);
    await this.openFirstResult(bookName);
  }

  async expectNoResults() {
    // check if there no results
    await expect(this.page.getByRole('heading', { name: '0 resultados.' })).toBeVisible();
  }
}
