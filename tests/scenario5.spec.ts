import { test, expect } from '@playwright/test';
import { acceptCookies } from '../helpers';

const nameBook = '1984';

test('Scenario 5 - Add book to the shopping cart and update the counter', async ({ page }) => {
  await page.goto('https://www.bertrand.pt/');
  await acceptCookies(page);

  // search input
  const searchInput = await page.locator('#form-searchform-palavra').fill(nameBook);
  
  // button search
  await page.getByRole('button', { name: 'pesquisar' }).click();
  
  // click on first option
  await page.getByRole('link', { name: nameBook }).first().click();

  // add to cart
  const addToCartButton = await page.locator('#productPageRightSectionTop-actions-addCart-btn');
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.scrollIntoViewIfNeeded();
  await addToCartButton.click({ force: true });

  // check the cart counter
  const cartCount = await page.locator('#badge-shoppingCart');
  await expect(cartCount).toHaveText('1', { timeout: 10000 });
});