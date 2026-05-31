import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

const nameBook = 'Do Not Disturb';
const authorBook = 'Freida McFadden';
const languageBook = 'Inglês';
const flagBook = 'Inglês';

test('Scenario 3 - Validate "Do Not Disturb" book language and flag', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.goto();
  await homePage.searchAndOpenFirstResult(nameBook);

  await productPage.expectAuthor(authorBook);
  await productPage.expectLanguage(languageBook);
  await productPage.expectLanguageFlag(flagBook);
});
