const toggle = document.querySelector('.toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const hamburgerLinks = document.querySelectorAll('.hamburger-link');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay-hamburger');


// open/close hamburger and toggle animation 
toggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu-active');
    toggle.classList.toggle('change');
    overlay.classList.toggle('overlay-hamburger-active');
    body.classList.toggle('body-scroll');
});

// outside close
overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburger-menu-active');
    overlay.classList.remove('overlay-hamburger-active');
    body.classList.remove('body-scroll');
    toggle.classList.remove('change');
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
        overlay.classList.remove('overlay-hamburger-active');
    });
});