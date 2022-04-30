// Muda cor de fundo ao scroll 

function changeBg(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bg-color');
    } else {
        navbar.classList.add('bg-color');
    }
    
}

window.addEventListener('scroll', changeBg);

// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}