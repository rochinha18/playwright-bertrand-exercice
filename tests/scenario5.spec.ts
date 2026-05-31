import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

const nameBook = '1984';

test('Scenario 5 - Add book to the shopping cart and update the counter', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.goto();
  await homePage.searchAndOpenFirstResult(nameBook);

  await productPage.addToCart();
  await productPage.expectCartCount('1');
});
