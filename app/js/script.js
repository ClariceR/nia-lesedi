const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains('menu-toggle')) {
        menuBtn.classList.remove('menu-toggle');
    } else {
        menuBtn.classList.add('menu-toggle');
    }
})