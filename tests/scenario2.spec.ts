import { test } from '@playwright/test';
import { AuthorPage } from '../pages/AuthorPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

const nameBook = '1984';
const authorBook = 'George Orwell';
const titleBook = 'A Quinta dos Animais';

test('Scenario 2 - Verify that "A Quinta dos Animais" has the same author as 1984', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const authorPage = new AuthorPage(page);

  await homePage.goto();
  await homePage.searchAndOpenFirstResult(nameBook);

  await productPage.openAuthorBestsellers();

  await authorPage.expectFeaturedBook(titleBook);
  await authorPage.openFirstFeaturedBook();

  await productPage.expectAuthor(authorBook);
});
