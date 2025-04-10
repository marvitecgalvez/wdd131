const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();


const nowtime = new Date();


currentyear.innerHTML = `${today.getFullYear()}`;



lastModified.innerHTML = document.lastModified;


//////////////Temples photo Galleries

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Lima Peru Los Olivos Temple",
        location: "San Martín de Porres, Lima, Perú",
        dedicated: "2024, January, 14",
        area: "47413",
        imageUrl: "https://www.churchofjesuschrist.org/imgs/3f3327a93b9f11eeb2f0eeeeac1e45f6554046d6/full/640%2C/0/default",
    },
    {
        templeName: "Guatemala City Guatemala Temple",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: "11610",
        imageUrl: "https://www.churchofjesuschrist.org/imgs/4ff985daa77b7f309360c884660244a965f9e8a4/full/640%2C/0/default",
    },
    {
        templeName: "Edmonton Alberta Temple",
        location: "Edmonton, Alberta, Canada",
        dedicated: "1999, December, 11",
        area: "10700",
        imageUrl: "https://www.churchofjesuschrist.org/imgs/eed1439015e47d43916bc7c9701d9c32e71c67cc/full/640%2C/0/default",
    },
    {
        templeName: "Santiago Chile Temple",
        location: "Santiago, Region Metropolitana, Santiago, Chile",
        dedicated: "1983, September, 15",
        area: "20831",
        imageUrl: "https://www.churchofjesuschrist.org/imgs/b6becb4ca0c60a52ad5dc57a90ec69fe5fe7ec63/full/640%2C/0/default",
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, RM, Italy",
        dedicated: "2019, March, 10",
        area: "41010",
        imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default",
    },
  ];



const oldTem = document.querySelector("#oldTemples");
const newTemp = document.querySelector("#newTemples");
const largeTemp = document.querySelector("#largeTemples");
const smallTemp = document.querySelector("#smallTemples");
const allTemp = document.querySelector("#allTemples");

oldTem.addEventListener("click", () => {
    createCard(temples.filter(temple => temple.dedicated.substring(0,4) <1900));
});

newTemp.addEventListener("click", () => {
    createCard(temples.filter(temple => temple.dedicated.substring(0,4) > 2000))
})

largeTemp.addEventListener("click", () => {
    createCard(temples.filter(temple => temple.area > 90000))
})

smallTemp.addEventListener("click", () => {
    createCard(temples.filter(temple => temple.area < 10000))
})

allTemp.addEventListener("click", () => {
    createCard(temples)
})



function createCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName)
        img.setAttribute("width", "200")
        img.setAttribute("loadinng", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);

    }

    )
}


createCard(temples);

