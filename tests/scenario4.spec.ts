import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

const nameBook = 'livro123';

test('Scenario 4 - Search for non existing book', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.searchFor(nameBook);

  await homePage.expectNoResults();
});
