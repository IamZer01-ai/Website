/**
 * THEME TOGGLE SCRIPT
 * Handles switching between Light and Dark modes and saves preference.
 */
(() => {
  const key = 'jai-portfolio-theme';
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  
  // Check local storage or system preference
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

  // Apply on load
  apply(preferred);
  
  // Listen for clicks on the toggle button
  button?.addEventListener('click', () => {
    apply(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });
})();