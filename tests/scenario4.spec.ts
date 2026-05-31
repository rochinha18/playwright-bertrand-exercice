import { test, expect } from '@playwright/test';
import { acceptCookies } from '../helpers';

const nameBook = 'livro123';

test('Scenario 4 - Search for non existing book', async ({ page }) => {
  await page.goto('https://www.bertrand.pt/');
  await acceptCookies(page);

  // search input
  const searchInput = await page.locator('#form-searchform-palavra').fill(nameBook);
  
  // button search
  const searchButton = await page.getByRole('button', { name: 'pesquisar' }).click();

  // check if there no results
  await expect(page.getByRole('heading', { name: '0 resultados.' })).toBeVisible();
});