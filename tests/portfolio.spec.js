const { test, expect } = require('@playwright/test');

test('homepage renders project and skill content', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Jai \| Cybersecurity Portfolio/);
  await expect(page.locator('[data-featured-projects] .project-card')).toHaveCount(3);
  await expect(page.locator('[data-skills] .skill-group')).toHaveCount(4);
  await expect(page.getByRole('link', { name: /Explore projects/ })).toHaveAttribute('href', 'projects.html');
});

test('theme toggle changes theme and can be toggled back', async ({ page }) => {
  await page.goto('/');
  const toggle = page.locator('[data-theme-toggle]');
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('mobile menu opens and closes accessibly', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.locator('[data-menu-toggle]');
  const menu = page.locator('[data-mobile-menu]');
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(menu).toBeVisible();
  await page.getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page).toHaveURL(/projects\.html$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('scratchpad saves and restores notes locally', async ({ page }) => {
  await page.goto('/');
  const note = page.locator('#myNoteBox');
  await note.fill('Portfolio smoke test note');
  await expect(page.locator('#noteStatus')).toContainText('Saved');
  await page.reload();
  await expect(page.locator('#myNoteBox')).toHaveValue('Portfolio smoke test note');
});

test('project cards do not expose placeholder hash links', async ({ page }) => {
  await page.goto('/projects.html');
  await expect(page.locator('[data-projects] .project-card')).toHaveCount(3);
  await expect(page.locator('[data-projects] a[href="#"]')).toHaveCount(0);
});
