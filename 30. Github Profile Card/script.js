"use strict";
const form = document.getElementById("form");
const search = document.getElementById("search");

const APIURL = "https://api.github.com/users/";

async function getUser(userName) {
    try {
        const { data } = await axios(APIURL + userName);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});
