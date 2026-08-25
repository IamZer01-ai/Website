document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (menuToggleBtn && mobileMenu) {
        // Toggle menu open/close on button click
        menuToggleBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('is-open');
            
            if (isOpen) {
                mobileMenu.classList.remove('is-open');
                menuToggleBtn.setAttribute('aria-expanded', 'false');
            } else {
                mobileMenu.classList.add('is-open');
                menuToggleBtn.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Close the mobile menu if the user clicks anywhere outside of it
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = menuToggleBtn.contains(event.target);
            const isMenuOpen = mobileMenu.classList.contains('is-open');

            if (!isClickInsideMenu && !isClickOnButton && isMenuOpen) {
                mobileMenu.classList.remove('is-open');
                menuToggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
