"use strict";

const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "Message: Hello World",
    "Message: Form Submitted",
    "Message: Submission Validation Done",
    "Message: Yeah yeah, I know",
];

const getRandomMessage = function () {
    const message = messages[Math.floor(Math.random() * messages.length)];
    return message;
};

const createNotification = function (message = null, type = null) {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.classList.add("toast");

    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 1000);
};

button.addEventListener("click", () => {
    createNotification();
});
