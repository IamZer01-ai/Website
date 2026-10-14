(() => {
  const init = () => {
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    const label = button.querySelector('[data-theme-label]');
    let saved = '';
    try { saved = localStorage.getItem('portfolio-theme') || ''; } catch (_) {}
    const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const apply = theme => {
      document.documentElement.setAttribute('data-theme', theme);
      button.setAttribute('aria-pressed', String(theme === 'light'));
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      if (label) label.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
      try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
    };
    apply(saved === 'light' || saved === 'dark' ? saved : preferred);
    button.addEventListener('click', () => apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();