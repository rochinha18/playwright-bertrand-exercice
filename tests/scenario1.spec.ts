import { test, expect } from '@playwright/test';

const nameBook = '1984';
const authorBook = 'George Orwell';
const isbnBook = '9789722071550';
const pagesBook = '344';
const dimensionsBook = '156 x 238 x 22 mm';

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

  // ISBN
  // first because ean is equal
  const isbn = await page.locator('#productPageSectionDetails-collapseDetalhes-content-isbn').first();
  await expect(isbn).toContainText(isbnBook);

  // number of pages
  const nrpages = await page.locator('#productPageSectionDetails-collapseDetalhes-content-nrPages');
  await expect(nrpages).toContainText(pagesBook);

  // dimensions of the book
  const dimensions = await page.locator('#productPageSectionDetails-collapseDetalhes-content-dimensions')
  await expect(dimensions).toContainText(dimensionsBook);
});