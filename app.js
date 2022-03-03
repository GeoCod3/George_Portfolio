const menuIcon = document.querySelector('#mobile-menu');
const menu = document.querySelector('.navbar_menu');
const navbarLogo = document.querySelector('#navbar_logo');


//  display menu

const mobileMenu = () => {
    menuIcon.classList.toggle('is-active');
    menu.classList.toggle('active');
}

menuIcon.addEventListener('click', mobileMenu);

// close hamburger menu when links are clicked

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBars){
        menuIcon.classList.toggle('is-active')
        menu.classList.remove('active')
    }
}

menu.addEventListener('click', hideMobileMenu);
navbarLogo.addEventListener('click', hideMobileMenu);