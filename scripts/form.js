const productName = document.getElementById("prodName");


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

products.forEach(product => {
  let productEl = document.createElement("option");
  productEl.setAttribute("value", `${product.name}`);
  productEl.innerHTML = product.name;
  productName.appendChild(productEl);
});

let numberReviews = Number(window.localStorage.getItem("numberReviews-ls"));
numberReviews.textContent =`Number of reviews: ${numberReviews}`;
numberReviews++;
localStorage.setItem("numberReviews-ls", numberReviews);