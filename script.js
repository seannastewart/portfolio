const navElement = document.querySelector('nav');
const slideOutNav = document.querySelector('.slideOut');
const menuIcon = document.querySelector('i');

navElement.addEventListener("click", function (event) {

    slideOutNav.classList.toggle('show');

});
