const menuBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains('menu-toggle')) {
        menuBtn.classList.remove('menu-toggle');
        mobileMenu.classList.remove('anim-fade-in');
        // mobileMenu.classList.add('hide');
        mobileMenu.classList.add('anim-fade-out')
    } else {
        menuBtn.classList.add('menu-toggle');
        mobileMenu.classList.remove('hide');
        mobileMenu.classList.remove('anim-fade-out');
        mobileMenu.classList.add('anim-fade-in');
    }
})

// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle("menu-toggle");
//     mobileMenu.classList.toggle("fadeIn");
// })