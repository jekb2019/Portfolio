'use strict';

//Make navbar transparent only when it is at the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    var y = window.scrollY;
    console.log(y);
    console.log(`navbarheight${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark')
    }
})