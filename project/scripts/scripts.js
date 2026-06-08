const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

const year = document.querySelector("#currentYear");

if (year) {
    year.textContent = new Date().getFullYear();
}

const modified = document.querySelector("#lastModified");

if (modified) {
    modified.textContent = document.lastModified;
}

/* Attraction  */

const attractions = [
    {
        name: "Ariaria International Market",
        description:
            "One of the largest markets in West Africa, famous for trade and local manufacturing."
    },
    {
        name: "Ngwa Road Market",
        description:
            "Popular market known for food items, household goods and local commerce."
    },
    {
        name: "Enyimba Stadium",
        description:
            "Home of Enyimba FC, one of Nigeria's most successful football clubs."
    }
];

/* Display Attractions */

function displayAttractions() {

    const container =
        document.querySelector("#attractionContainer");

    if (!container) return;

    attractions.forEach(attraction => {

        const card = document.createElement("div");

        card.classList.add("attraction-card");

        card.innerHTML = `
            <h3>${attraction.name}</h3>
            <p>${attraction.description}</p>
        `;

        container.appendChild(card);

    });
}

displayAttractions();

/* localStorage Visit Counter */

function trackVisits() {

    let visits =
        Number(localStorage.getItem("abaVisits")) || 0;

    visits++;

    localStorage.setItem("abaVisits", visits);

    console.log(`Visit Count: ${visits}`);

    if (visits === 1) {
        console.log("First Visit");
    } else {
        console.log(`Welcome back! Visit #${visits}`);
    }
}

trackVisits();


/* CONTACT FORM */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    let submissions =
        Number(localStorage.getItem("feedbackCount")) || 0;

    const countDisplay =
        document.querySelector("#submissionCount");

    countDisplay.textContent =
        `Feedback submissions recorded: ${submissions}`;

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name =
            document.querySelector("#fullname").value;

        const email =
            document.querySelector("#email").value;

        const topic =
            document.querySelector("#topic").value;

        const message =
            document.querySelector("#message").value;

        const feedback = {
            name,
            email,
            topic,
            message
        };

        const feedbackArray =
            JSON.parse(localStorage.getItem("feedbacks"))
            || [];

        feedbackArray.push(feedback);

        localStorage.setItem(
            "feedbacks",
            JSON.stringify(feedbackArray)
        );

        submissions++;

        localStorage.setItem(
            "feedbackCount",
            submissions
        );

        countDisplay.textContent =
            `Feedback submissions recorded: ${submissions}`;

        alert(
            `Thank you ${name}! Your feedback has been received.`
        );

        contactForm.reset();

    });

}