const menuBar = document.querySelector('.menu-bar');
const mobileNav = document.querySelector('.mobile-nav');

menuBar.addEventListener ('click', () => {
    mobileNav.classList.toggle('open')
})