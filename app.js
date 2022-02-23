const menuIcon = document.querySelector('#mobile-menu');
const menu = document.querySelector('.navbar_menu');


//  display menu

const mobileMenu = () => {
    menuIcon.classList.toggle('is-active');
    menu.classList.toggle('active');
}

menuIcon.addEventListener('click', mobileMenu);