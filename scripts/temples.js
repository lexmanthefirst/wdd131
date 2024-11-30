"use strict";

const menubar = document.getElementById("menu-bars");
const nav = document.querySelector(".nav");

// Toggle the navigation menu
function toggleNav(){
    // menubar.classList.toggle("change");
    nav.classList.toggle("hidden");
}


menubar.addEventListener("click", toggleNav);
