"use strict";

const menubar = document.getElementById("menu-bars");
const nav = document.querySelector(".nav");
const mediaQuery = window.matchMedia("(min-width: 748px)");

// Toggle the navigation menu
function toggleNav() {
  nav.classList.toggle("hidden");
}

menubar.addEventListener("click", toggleNav);

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19_184, 
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/320x200/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg",
  },
  {
    templeName: "Edmonton Alberta",
    location: "Edmonton, Alberta, Canada",
    dedicated: "1999, December, 11",
    area: 10_700, 
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/edmonton-alberta/320x200/edmonton-temple-lds-917313-wallpaper.jpg",
  },
  {
    templeName: "Fresno  California",
    location: "Fresno, California, USA",
    dedicated: "2000, April, 9",
    area: 10_700, // 
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fresno-california/320x200/fresno-temple-lds-884388-wallpaper.jpg",
  },
];

createTempleCard(temples);

const nonutahLink = document.querySelector("#nonutah");
const home = document.querySelector("#homeLink");
const oldTemple = document.querySelector("#oldLink");
const newTemple = document.querySelector("#newLink");
const largeTemple = document.querySelector("#large");
const smallTemple = document.querySelector("#small");

home.addEventListener("click", () => {
  createTempleCard(temples);
});

const getYear = (dedicatedDate) => {
  return parseInt(dedicatedDate.split(",")[0], 10);
};
newTemple.addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => getYear(temple.dedicated) > 1985)
  );
});
oldTemple.addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => getYear(temple.dedicated) < 1985)
  );
});

largeTemple.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area > 90000));
});

smallTemple.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area < 90000));
});

function createTempleCard(filteredTemples) {
  document.querySelector(".container").innerHTML = "";
  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("temple-card");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class ="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class ="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class ="label">Size:</span> ${temple.area} sq ft;`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".container").appendChild(card);
  });
}
