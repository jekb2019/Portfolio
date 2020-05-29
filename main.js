'use strict';

//Make navbar transparent only when it is at the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark')
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
});

// Handle click on "contact me" button
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
})

// Make home slowly fade to transparent as window scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    let coveragePercent = 1-window.scrollY/homeHeight;
    if(coveragePercent >= 0){
        home.style.opacity = coveragePercent;
    }
})

// Arrow up for scroll to top
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener('scroll',()=>{
    if(window.scrollY < homeHeight/2){
        arrowUp.classList.remove('visible');
    }else{
        arrowUp.classList.add('visible');
    }
})
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
})

// Scroll down to a specific element of provided selecor
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}