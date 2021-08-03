"use strict"

let btn_menu = document.querySelector(".btn__menu");
let nav_mobile = document.querySelector(".nav__links--mobile");

btn_menu.addEventListener("click",()=>{

    if ( !btn_menu.classList.contains("visible") ){
        btn_menu.classList.toggle("visible");
        nav_mobile.classList.toggle("visible");
    }else{
        btn_menu.classList.toggle("visible");
        nav_mobile.classList.toggle("visible");
    }

});