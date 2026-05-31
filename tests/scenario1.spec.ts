import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

const nameBook = '1984';
const authorBook = 'George Orwell';
const isbnBook = '9789722071550';
const pagesBook = '344';
const dimensionsBook = '156 x 238 x 22 mm';

test('Scenario 1 - Search for 1984 and validate book details', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.goto();
  await homePage.searchAndOpenFirstResult(nameBook);

  await productPage.expectAuthor(authorBook);
  await productPage.expectIsbn(isbnBook);
  await productPage.expectNumberOfPages(pagesBook);
  await productPage.expectDimensions(dimensionsBook);
});
