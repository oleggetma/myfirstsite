const burgerMenu = document.querySelector('.header__burger');
const menuWrapper = document.querySelector('.header__menu');

burgerMenu.addEventListener('click', (e) => {
    menuWrapper.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});
