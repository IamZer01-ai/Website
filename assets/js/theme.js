(() => {
  const key = 'jai-portfolio-theme';
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const stored = localStorage.getItem(key);
  const preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function apply(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(key, theme);
    if (button) {
      const next = theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', `Switch to ${next} theme`);
      button.innerHTML = theme === 'dark' ? '☼ <span>Light</span>' : '◐ <span>Dark</span>';
    }
  }

  apply(preferred);
  button?.addEventListener('click', () => apply(root.dataset.theme === 'dark' ? 'light' : 'dark'));
})();
