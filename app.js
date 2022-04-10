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

//  adding highlight class to the menu elements on scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const home = document.querySelector('#home')
    const aboutMenu = document.querySelector('#about-page')
    const projectsMenu = document.querySelector('#projects-page')
    const skillMenu = document.querySelector('#Skills-page')
    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY

    //  setting show point of the highlight class

    if(window.innerWidth > 960 && scrollPos < 600) {
        aboutMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 1200) {
        aboutMenu.classList.add('highlight')
        projectsMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2045) {
        projectsMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        skillMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        skillMenu.classList.add('highlight')
        projectsMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 4000) {
        contactMenu.classList.add("highlight")
        skillMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }

}

// Animation method
const anime = () => {
    const aboutImg = document.querySelector('.img_container')
    const aboutText = document.querySelector('.main-content')
    const projCard = document.querySelector('.projects_wrap')
    let scrollPos = window.scrollY

    if (scrollPos < 1200) {
        aboutText.classList.add('aboutText')
        aboutImg.classList.add('aboutImg')
        return
    }else if (scrollPos < 2045) {
        projCard.classList.add('projAnime')
        aboutText.classList.remove('aboutText')
        aboutImg.classList.remove('aboutImg')
        return
    }
}



window.addEventListener('scroll', anime)
window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)