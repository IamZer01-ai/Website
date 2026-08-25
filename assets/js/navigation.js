/**



MOBILE NAVIGATION SCRIPT

Handles opening and closing the mobile menu.

*/

(() => {

const toggle = document.querySelector('[data-menu-toggle]');

const menu = document.querySelector('[data-mobile-menu]');

const close = () => {

menu?.classList.remove('is-open');

toggle?.setAttribute('aria-expanded', 'false');

};

// Toggle menu on button click

toggle?.addEventListener('click', () => {

const open = menu.classList.toggle('is-open');

toggle.setAttribute('aria-expanded', String(open));

});

// Close menu when a link is clicked

menu?.querySelectorAll('a').forEach(link => {

link.addEventListener('click', close);

});

// Close menu when the Escape key is pressed (Accessibility)

document.addEventListener('keydown', event => {

if (event.key === 'Escape') close();

});

})(); 

