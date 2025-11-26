"use strict";

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

function removeActive() {
    ratings.forEach((rating) => rating.classList.remove("active"));
}

sendBtn.addEventListener("click", (event) => {
    panel.innerHTML = `
     <i class="fas fa-heart"></i>
     <strong>Thank you</strong>
     <br>
     <strong>Feedback: ${selectedRating}</strong>
     <p>We'll use your feedback to improve our customer support</p>
     `;
});

ratingsContainer.addEventListener("click", (event) => {
    if (event.target.parentNode.classList.contains("rating")) {
        removeActive();

        event.target.parentNode.classList.add("active");
        selectedRating = event.target.nextElementSibling.innerHTML;
        console.log(selectedRating);
    }
});
