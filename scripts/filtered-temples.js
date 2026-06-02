// Footer Year
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Last Modified
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// Temple Data
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

    // Additional temples
    {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36800,
    imageUrl:  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl:  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

];

// Gallery Container
const gallery = document.querySelector(".gallery");

// Display Temples Function
function displayTemples(templesArray) {

    gallery.innerHTML = "";

    templesArray.forEach((temple) => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img 
                src="${temple.imageUrl}" 
                alt="${temple.templeName} Temple"
                loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

// Display all temples initially
displayTemples(temples);

// Navigation Filters
const pageTitle = document.querySelector("#page-title");

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter(
        temple => new Date(temple.dedicated).getFullYear() < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter(
        temple => new Date(temple.dedicated).getFullYear() > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    displayTemples(smallTemples);
});