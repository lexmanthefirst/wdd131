const elements = document.querySelectorAll(".element");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalHeader = modal.querySelector(".modal-header");
const modalContent = modal.querySelector(".modal-content");
const modalClose = modal.querySelector(".modal-close");
const searchBar = document.querySelector("search-input");
const searchBtn = document.querySelector(".search-icon");


modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

const periodicTable = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    group: 1,
    period: 1,
    category: "nonmetal",
    info: "Lightest element, used in fuel cells.",
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    group: 18,
    period: 1,
    category: "noble gas",
    info: "Inert gas used in balloons and cryogenics.",
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    group: 1,
    period: 2,
    category: "alkali metal",
    info: "Used in batteries and psychiatric medication.",
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    group: 2,
    period: 2,
    category: "alkaline earth metal",
    info: "Lightweight metal used in aerospace applications.",
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    group: 13,
    period: 2,
    category: "metalloid",
    info: "Used in glass and detergents.",
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    group: 14,
    period: 2,
    category: "nonmetal",
    info: "Basis of organic life and materials like graphite and diamond.",
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    group: 15,
    period: 2,
    category: "nonmetal",
    info: "Major component of Earth's atmosphere.",
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    group: 16,
    period: 2,
    category: "nonmetal",
    info: "Essential for respiration and combustion.",
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    group: 17,
    period: 2,
    category: "halogen",
    info: "Highly reactive element used in toothpaste.",
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    group: 18,
    period: 2,
    category: "noble gas",
    info: "Used in neon signs and lighting.",
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    group: 1,
    period: 3,
    category: "alkali metal",
    info: "Essential for biological functions, used in table salt.",
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    group: 2,
    period: 3,
    category: "alkaline earth metal",
    info: "Lightweight metal used in construction and fireworks.",
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminium",
    group: 13,
    period: 3,
    category: "post-transition metal",
    info: "Widely used lightweight metal.",
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    group: 14,
    period: 3,
    category: "metalloid",
    info: "Used in semiconductors and glass.",
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    group: 15,
    period: 3,
    category: "nonmetal",
    info: "Essential for life, found in DNA and fertilizers.",
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    group: 16,
    period: 3,
    category: "nonmetal",
    info: "Used in vulcanizing rubber and as a fungicide.",
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    group: 17,
    period: 3,
    category: "halogen",
    info: "Used in disinfectants and PVC production.",
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    group: 18,
    period: 3,
    category: "noble gas",
    info: "Inert gas used in welding and lighting.",
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    group: 1,
    period: 4,
    category: "alkali metal",
    info: "Essential for plant growth and biological functions.",
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    group: 2,
    period: 4,
    category: "alkaline earth metal",
    info: "Essential for bones and construction materials.",
  },
  {
    atomicNumber: 21,
    symbol: "Sc",
    name: "Scandium",
    group: 3,
    period: 4,
    category: "transition metal",
    info: "Used in aerospace and sports equipment.",
  },
  {
    atomicNumber: 22,
    symbol: "Ti",
    name: "Titanium",
    group: 4,
    period: 4,
    category: "transition metal",
    info: "Corrosion-resistant metal used in implants and aerospace.",
  },
  {
    atomicNumber: 23,
    symbol: "V",
    name: "Vanadium",
    group: 5,
    period: 4,
    category: "transition metal",
    info: "Used in steel alloys for strength and durability.",
  },
  {
    atomicNumber: 24,
    symbol: "Cr",
    name: "Chromium",
    group: 6,
    period: 4,
    category: "transition metal",
    info: "Used in stainless steel and chrome plating.",
  },
  {
    atomicNumber: 25,
    symbol: "Mn",
    name: "Manganese",
    group: 7,
    period: 4,
    category: "transition metal",
    info: "Essential for steel production and battery technology.",
  },
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    group: 8,
    period: 4,
    category: "transition metal",
    info: "Essential for blood (hemoglobin) and construction.",
  },
  {
    atomicNumber: 27,
    symbol: "Co",
    name: "Cobalt",
    group: 9,
    period: 4,
    category: "transition metal",
    info: "Used in batteries and pigments.",
  },
  {
    atomicNumber: 28,
    symbol: "Ni",
    name: "Nickel",
    group: 10,
    period: 4,
    category: "transition metal",
    info: "Used in coins, batteries, and stainless steel.",
  },
  {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Copper",
    group: 11,
    period: 4,
    category: "transition metal",
    info: "Excellent conductor, used in wiring and electronics.",
  },
  {
    atomicNumber: 30,
    symbol: "Zn",
    name: "Zinc",
    group: 12,
    period: 4,
    category: "transition metal",
    info: "Used in galvanization and alloys.",
  },
  {
    atomicNumber: 31,
    symbol: "Ga",
    name: "Gallium",
    group: 13,
    period: 4,
    category: "post-transition metal",
    info: "Used in semiconductors and LEDs.",
  },
  {
    atomicNumber: 32,
    symbol: "Ge",
    name: "Germanium",
    group: 14,
    period: 4,
    category: "metalloid",
    info: "Used in semiconductors and optics.",
  },
  {
    atomicNumber: 33,
    symbol: "As",
    name: "Arsenic",
    group: 15,
    period: 4,
    category: "metalloid",
    info: "Used in pesticides and semiconductors.",
  },
  {
    atomicNumber: 34,
    symbol: "Se",
    name: "Selenium",
    group: 16,
    period: 4,
    category: "nonmetal",
    info: "Used in photocopiers and glass production.",
  },
  {
    atomicNumber: 35,
    symbol: "Br",
    name: "Bromine",
    group: 17,
    period: 4,
    category: "halogen",
    info: "Used in flame retardants and photography.",
  },
  {
    atomicNumber: 36,
    symbol: "Kr",
    name: "Krypton",
    group: 18,
    period: 4,
    category: "noble gas",
    info: "Used in lighting and photography.",
  },
  // Add elements 37 to 118 similarly...
];

const tableContainer = document.getElementById("periodic-table");

periodicTable.forEach((element) => {
  const elementDiv = document.createElement("div");
  elementDiv.className = `element ${element.category}`;
  elementDiv.style.gridColumnStart = element.group;
  elementDiv.style.gridRowStart = element.period;

  elementDiv.innerHTML = `
        <strong>${element.symbol}</strong><br>
        <small>${element.name}</small><br>
        <small>${element.atomicNumber}</small>
    `;

  elementDiv.addEventListener("click", () => {
    const name = element.name;
    const symbol = element.symbol;
    const atomicNumber = element.atomicNumber;
    const info = element.info;

    modalHeader.textContent = `${name} (${symbol}) - Atomic Number: ${atomicNumber}`;
    modalContent.textContent = info;
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  tableContainer.appendChild(elementDiv);
});
