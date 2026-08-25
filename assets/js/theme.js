document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('[data-theme-toggle]');
    const themeSpan = themeToggleBtn ? themeToggleBtn.querySelector('span') : null;
    
    // Check local storage for saved theme, or fallback to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    applyTheme(currentTheme);
    
    // Listen for button clicks
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });
    }
    
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeSpan) themeSpan.textContent = 'Light'; // Change text to Light when in Dark mode
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeSpan) themeSpan.textContent = 'Dark';  // Change text to Dark when in Light mode
        }
        // Save user preference
        localStorage.setItem('theme', theme);
    }
});
