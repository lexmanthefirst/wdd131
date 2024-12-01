"use strict";

const menubar = document.getElementById("menu-bars");
const nav = document.querySelector(".nav");
const mediaQuery = window.matchMedia("(min-width: 748px)");

// Toggle the navigation menu
function toggleNav(){
    // menubar.classList.toggle("change");
    // if (mediaQuery.matches("(min-width: 748px)"){

    // }
    nav.classList.toggle("hidden");

}


menubar.addEventListener("click", toggleNav);
