"use strict";

const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming";

let idx = 1;
let speed = 300 / speedEl.value;

speedEl.addEventListener(
    "input",
    (event) => (speed = 300 / event.target.value)
);

const writeText = function () {
    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
};

writeText();
