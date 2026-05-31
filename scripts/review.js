let reviewCount =
Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem(
    "reviewCount",
    reviewCount
);

document.querySelector("#counter").textContent =
reviewCount;

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;