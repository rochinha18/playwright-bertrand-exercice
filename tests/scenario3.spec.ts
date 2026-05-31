import { test, expect } from '@playwright/test';

const nameBook = 'Do Not Disturb';
const authorBook = 'Freida McFadden';
const languageBook = 'Inglês';
const flagBook = 'Inglês';

test('test', async ({ page }) => {
  await page.goto('https://www.bertrand.pt/');

  // search input
  const searchInput = await page.locator('#form-searchform-palavra').fill(nameBook);
  
  // button search
  await page.getByRole('button', { name: 'pesquisar' }).click();
  
  // click on first option
  await page.getByRole('link', { name: nameBook }).first().click();

  // author
  const author = await page.locator('#productPageSectionDetails-collapseDetalhes-content-author');
  await expect(author).toContainText(authorBook);

  // language
  const language = await page.locator('#productPageRightSectionTop-language');
  await expect(language).toContainText(languageBook);

  // flag
  const flag = await page.locator('#productPageRightSectionTop-languageFlag');
  await expect(flag).toHaveClass(new RegExp(flagBook));
});