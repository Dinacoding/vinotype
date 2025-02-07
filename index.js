// Menu toogle and Nav-list 
const menuToogle = document.querySelector(".menu-toggle");
const navList = document.querySelector('.nav-list');

// On click event listener Toogle menu
menuToogle.addEventListener('click', () => {
    navList.classList.toggle('appear');

});


module.exports = { toggleMenu };