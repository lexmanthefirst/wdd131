"use strict";

// Get the current date and time
const copyrightYear = document.getElementById("currentYear");
const fullDate = document.getElementById("last-modified");

//Get copyright year
const today = new Date();
copyrightYear.innerHTML = `${today.getFullYear()}`;

//Get last modified date
const date = new Date(document.lastModified);
fullDate.innerHTML = date;
