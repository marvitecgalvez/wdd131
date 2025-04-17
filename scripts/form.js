const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();


const nowtime = new Date();


currentyear.innerHTML = `${today.getFullYear()}`;



lastModified.innerHTML = document.lastModified;

let showned = document.getElementById("showned")
let product = {'id':'455689A','price':23.99,'cost':15,'shelfDate':'10/01/2024'}
let itemcost = product.cost();
function show(itemcost) {
  showned.value = itemcost;
}

show(itemcost)

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

  let box = document.getElementById("product");

  let option = document.createElement("option");

  function createList(products) {
        let newRow = document.createElement("option");
        newRow.value = products.id;
        newRow.textContent = products.name;
        box.appendChild(newRow);
    };

if (box !==null) {
    products.forEach(create => createList(create))
};





let submitCounter = document.getElementById("submit-counter");

if (submitCounter !== null) {
    reviewCounter = parseInt(window.localStorage.getItem("submit-counter"));
    if (reviewCounter) {
        reviewCounter += 1;
        submitCounter.textContent = reviewCounter;
        window.localStorage.setItem("submit-counter", reviewCounter);
    }
    else {
        reviewCounter = 1;
        submitCounter.textContent = reviewCounter;
        window.localStorage.setItem("submit-counter", reviewCounter);
    }
}
