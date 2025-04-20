const currentyear = document.querySelector("#currentyear");

const today = new Date();


const nowtime = new Date();


currentyear.innerHTML = `${today.getFullYear()}`;



let danceDataBase = [
    {
        danceName: "Scissors Dance",
        region: "Mountains",
        theme: "Ritual",
        description: "The Scissor Dance or Gala Dance is a dance originating from the Chanka region of Peru, whose musical setting is provided by the violin and harp. It later spread to the regions of Huancavelica, Ayacucho, and Apurímac. In Apurímac, the dance is called Saqras, in Ayacucho it is called danzaq, while in Huancavelica the scissors dancer is called Gala. The peasants called them \"Supaypa Wasin Tusuq\": the dancer in the devil's house [citation needed]. José María Arguedas is credited with generalizing the term \"scissor dancer\" because of the scissors the dancers hold in their right hands and which they clack together while dancing. According to colonial priests, their magical side is due to a supposed pact with the devil, due to the surprising tricks or tests they perform in the dance. These tests are called Atipanakuy. The central instrument of the dance is the scissors, made from two separate metal plates approximately 25 cm long. Together, they form the shape of a pair of blunt-tipped scissors. Currently, the regions where this dance is most popular are Ayacucho, Huancavelica, Arequipa, Apurímac, and Lima.",
        image: "images/danza_tijeras.webp",
    },
    {
        danceName: "Marinera",
        region: "Coast",
        theme: "Couples",
        description: "The marinera is a loose, mixed-couple dance, the best known from the Peruvian coast. It is characterized by the use of handkerchiefs. It is a dance that showcases the blending of Spanish, Amerindian, and African cultures, among others. Its origin is attributed to a colonial dance called zamacueca, which was very popular in the 19th century. For her attire, the woman wears a nightgown called anaco, which protrudes like a blouse over the wide skirt that clings to her waist. The woman exudes the charm of courtship and dance. Also very striking are the famous \"dormilonas,\" artistic filigree earrings crafted by the town's goldsmiths. The woman dances barefoot. The man wears a jacket, pants, a shirt, shoes, and a hat; both wear handkerchiefs, dancing joyfully to the rhythm of the music. This dance is typical of the city of Trujillo, located in the department of La Libertad in northern Peru. It is a dance with a lot of flirtation and partner work, where the woman appears difficult, not wanting to accept her partner, but at the end she ends up accepting.",
        image: "images/marinera.webp",
    },
    {
        danceName: "Anaconda Dance",
        region: "Jungle",
        theme: "Ritual",
        description: "The Anaconda Dance is a traditional dance from the jungle and throughout Peru. The Anaconda Dance originates in all the communities crossed by the mighty Amazon River. The jungle anaconda is the dance's main attraction and is carried by one of the dancers. It pays homage to the anaconda that lives in the Amazon rainforest. According to the belief, this will improve the coffee, banana, and cassava harvests and can also prevent floods or natural disasters that could harm the community. This dance is actually a religious ceremony performed in the Uyucali area.",
        image: "images/anaconda.webp",
    },
    {
        danceName: "The Diablada from Puno",
        region: "Mountains",
        theme: "Spiritual",
        description: "The Diablada is a dance originating from the department of Puno in Peru and represents the struggle between good and evil. It is a mestizo-Aymara dance that exhibits elements of indigenous and Christian religiosity. According to recent studies, its origin is based on the traditions of worship of Pachamama that arose in Juli during the colonial period. Archangel Saint Michael defeating the devil and the evil serpent 1757. In Peru, the Diablada is part of the Festival of the Virgin of La Candelaria, a UNESCO Intangible Cultural Heritage of Humanity. In September 2021, the Diablada Puno was declared Cultural Heritage of the Nation of Peru by the Ministry of Culture through Law Decree No. 28296, which states that this declaration considers the importance of the dance to the cultural, festive, and religious identity of the mestizo and urban population of the Puno region, and is recognized throughout Peru.",
        image: "images/diablada.webp",
    },
    {
        danceName: "Contradanza",
        region: "Coast",
        theme: "Mocking",
        description: "The Contradanza is originally a European dance with a variable number of figures among a group of dancers arranged in two or four lines. It derives from a dance of rural English origin that was adopted by the Elizabethan court around 1600 and by other European courts throughout the 17th century. This fashion arrived in Spain around 1710 as a public dance for carnivals and masked balls in general. The dance also reached the American colonies and became popular among various social strata, including Indigenous and African Americans. The contradanza was the basis for various dances in numerous parts of the continent. In 1551, a group of Augustinian priests arrived in Huamachuco and laid out the layout of the city and established the sites for the construction of the church and convent, thus founding the city of Huamachuco. This order established the Virgin of Alta Gracia, whose image they had brought to the region, as the local patron saint.",
        image: "images/contradanza.webp",
    },
    {
        danceName: "Festejo",
        region: "Coast",
        theme: "Celebration",
        description: "The festejo is the representative dance of the Black Creole people and originates from the Peruvian coast. It emerged in the 17th century, and the musical instruments for this dance must have originally been leather drums, which were later replaced by the Peruvian cajón, and the maraca by the donkey jawbone, adding acoustic guitar and singing. Characteristic are the repeated passes after periods of four or eight bars and the choral refrain of the fuga. It is possible that it was originally a male solo dance, improvising steps and acrobatic contortions with complete freedom of spirit and without any choreographic rules.",
        image: "images/festejo.webp",
    },

];

////////////////////////////////



const scissorsDance = document.querySelector("#scissors");
const marinera = document.querySelector("#marin");
const anacondaDance = document.querySelector("#anacond");
const diablada = document.querySelector("#diab");
const contradanza = document.querySelector("#contra");
const festejo = document.querySelector("#fest");




marinera.addEventListener("click", () => {
    createCard(danceDataBase.filter(selectedDance => selectedDance.danceName == "Marinera"));
});

scissorsDance.addEventListener("click", () => {
    createCard(danceDataBase.filter(selectedDance => selectedDance.danceName == "Scissors Dance"));
});

anacondaDance.addEventListener("click", () => {
    createCard(danceDataBase.filter(selectedDance => selectedDance.danceName == "Anaconda Dance"));
});

diablada.addEventListener("click", () => {
    createCard(danceDataBase.filter(selectedDance => selectedDance.danceName == "The Diablada from Puno"));
});

contradanza.addEventListener("click", () => {
    createCard(danceDataBase.filter(selectedDance => selectedDance.danceName == "Contradanza"));
});

festejo.addEventListener("click", () => {
    createCard(danceDataBase.filter(selectedDance => selectedDance.danceName == "Festejo"));
});




function createCard(choosedDance) {
    document.querySelector(".container").innerHTML = "";
    choosedDance.forEach(selectedDance => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let region = document.createElement("p");
        let theme = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = selectedDance.danceName;
        region.innerHTML = `<span>Region: </span> ${selectedDance.region}`;
        theme.innerHTML = `<span>Theme: </span> ${selectedDance.theme}`;
        description.innerHTML = `<span>Description: </span> ${selectedDance.description}`;
        img.setAttribute("src", selectedDance.image);
        img.setAttribute("alt", selectedDance.danceName)
        img.setAttribute("width", "368")
        img.setAttribute("height", "auto")
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(region);
        card.appendChild(theme);
        card.appendChild(description);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);

    }

    )
};


/////////////////////////////////////////////////////////   FORM    ///////////////////////////////////////

function setDanceReview() {

    let uName = document.getElementById("userName");
    let uEmail = document.getElementById("userEmail");
    let uDanceName = document.getElementById("userDanceName");
    let uRegion = document.getElementById("userRegion");
    let uTheme = document.querySelector('input[name="theme"]:checked').value; ///change to getElementByName
    let uDescription = document.getElementById("userDescription");

    let nuName = "";
    let nuEmail = "";
    let nuDanceName = "";
    let nuRegion = "";
    let nuTheme = "";
    let nuDescription = "";

    nuName.push(uName);
    nuEmail.push(uEmail);
    nuDanceName.push(uDanceName);
    nuRegion.push(uRegion);
    nuTheme.push(uTheme);
    nuDescription.push(uDescription);

    localStorage.setItem('snuName', JSON.stringify(nuName));
    localStorage.setItem('snuEmail', JSON.stringify(nuEmail));
    localStorage.setItem('snuDanceName', JSON.stringify(nuDanceName));
    localStorage.setItem('snuRegion', JSON.stringify(nuRegion));
    localStorage.setItem('snuTheme', JSON.stringify(nuTheme));
    localStorage.setItem('snuDescription', JSON.stringify(nuDescription));
};

let buttonClicked = document.getElementById("reviewButton");

buttonClicked.addEventListener("click", () => {
    setDanceReview();
});