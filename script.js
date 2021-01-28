const toggle = document.querySelector('.toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const hamburgerLinks = document.querySelectorAll('.hamburger-link');
const body = document.querySelector('body');
const landingPage = document.querySelector('.landing-page');


// open/close hamburger and toggle animation 
toggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu-active');
    toggle.classList.toggle('change');
    body.classList.toggle('body-scroll');
    landingPage.classList.toggle('landing-page-active');
});



// // navigation animation
// window.addEventListener('scroll', () => {
//     if(window.pageYOffset > 0) {
//         navigation.classList.add('navigation-animation');
//     } else {
//         navigation.classList.remove('navigation-animation');
//     }
// });

// hamburger link scroll to section
hamburgerLinks.forEach(hamburgerLink => {
        hamburgerLink.addEventListener('click', () => {
        hamburgerMenu.classList.remove('hamburger-menu-active');
        toggle.classList.remove('change');
        body.classList.remove('body-scroll');
        landingPage.classList.remove('landing-page-active');
    });
});