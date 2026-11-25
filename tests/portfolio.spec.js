const { test, expect } = require('@playwright/test');

test('homepage renders profile, six skill groups, and three projects', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sai Jayanth \| Cybersecurity Portfolio/);
  await expect(page.locator('[data-featured-projects] .project-card')).toHaveCount(3);
  await expect(page.locator('[data-skills] .skill-group')).toHaveCount(6);
  await expect(page.getByRole('link', { name: /View experience/ })).toHaveAttribute('href', 'experience.html');
});

test('experience and education pages render their timeline entries', async ({ page }) => {
  await page.goto('/experience.html');
  await expect(page.locator('[data-experience] .timeline-item')).toHaveCount(2);
  await page.goto('/education.html');
  await expect(page.locator('[data-education] .timeline-item')).toHaveCount(3);
});

test('theme toggle changes theme and can be toggled back', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
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
  await page.getByRole('link', { name: 'Experience', exact: true }).click();
  await expect(page).toHaveURL(/experience\.html$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('all primary pages load without broken local navigation targets', async ({ page }) => {
  for (const path of ['/', '/about.html', '/experience.html', '/projects.html', '/education.html', '/certifications.html', '/labs.html', '/blog.html', '/contact.html']) {
    await page.goto(path);
    await expect(page.locator('main')).toBeVisible();
    const links = await page.locator('a[href]').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')).filter(href => href && href.endsWith('.html')));
    for (const href of links) {
      const response = await page.request.get(new URL(href, page.url()).toString());
      expect(response.ok(), href).toBeTruthy();
    }
  }
});

test('optional sections show clear empty states rather than blank panels', async ({ page }) => {
  await page.goto('/certifications.html');
  await expect(page.locator('[data-certifications] .empty-state')).toBeVisible();
  await page.goto('/labs.html');
  await expect(page.locator('[data-labs] .empty-state')).toBeVisible();
  await page.goto('/blog.html');
  await expect(page.locator('[data-blog] .empty-state')).toBeVisible();
});
