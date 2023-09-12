const btn = document.querySelector('.js-mobile-btn');
const menu = document.querySelector('.js-mobile-menu');

btn.addEventListener('click', openMenu);
btn.addEventListener('touch', openMenu);
function openMenu() {
    menu.classList.toggle('header__menu_open');
    btn.classList.toggle('header__mobile-btn_active')
}
