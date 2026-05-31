import { expect, type Page } from '@playwright/test';

export async function acceptCookies(page: Page) {
  const acceptCookiesButton = page.getByRole('button', { name: 'Aceitar Todos' });

  if (await acceptCookiesButton.isVisible().catch(() => false)) {
    await acceptCookiesButton.click();
    await expect(acceptCookiesButton).toBeHidden();
  }
}