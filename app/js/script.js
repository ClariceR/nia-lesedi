const menuBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains('menu-toggle')) {
        menuBtn.classList.remove('menu-toggle');
        mobileMenu.classList.add('hide');
    } else {
        menuBtn.classList.add('menu-toggle');
        mobileMenu.classList.remove('hide')
    }
})