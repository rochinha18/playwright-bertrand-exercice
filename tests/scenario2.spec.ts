import { test, expect } from '@playwright/test';
import { acceptCookies } from '../helpers';

const nameBook = '1984';
const authorBook = 'George Orwell';
const titleBook = 'A Quinta dos Animais';

test('Scenario 2 - Verify that "A Quinta dos Animais" has the same author as 1984', async ({ page }) => {
  await page.goto('https://www.bertrand.pt/');
  await acceptCookies(page);

  // search input
  await page.locator('#form-searchform-palavra').fill(nameBook);
  
  // button search
  await page.getByRole('button', { name: 'pesquisar' }).click();
  
  // click on first option
  await page.getByRole('link', { name: nameBook }).first().click();

  // check other books from same author
  const contentAuthor = await page.locator('#productPageSectionAboutAuthor-bestsellers-title');
  await expect(contentAuthor).toBeVisible();
  await contentAuthor.click();

  // check if book appear in "Destaque" area
  const featuredContainer = await page.locator('.autor-featured-container');
  await expect(featuredContainer).toBeVisible();
  await expect(featuredContainer).toContainText('Em destaque');
  await expect(featuredContainer).toContainText(titleBook);

  // if exists check the info
  const featuredBook = await featuredContainer.locator('.featured-book img').first();
  await expect(featuredBook).toBeVisible();
  await featuredBook.click();

  // check the author
  const author = await page.locator('#productPageSectionDetails-collapseDetalhes-content-author');
  await expect(author).toBeVisible();
  await expect(author).toContainText(authorBook);
});