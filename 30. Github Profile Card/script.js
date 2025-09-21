"use strict";
const main = document.getElementById("main");
const search = document.getElementById("search");

const APIURL = "https://api.github.com/users/";

async function getUser(userName) {
    try {
        const { data } = await axios(APIURL + userName);
        createUserCard(data);
    } catch (err) {
        if (err.response.status === 404) {
            createErrorCard("There is no profile with this username");
        }
    }
}

function createErrorCard(msg) {
    const cardHTML = `
     <div class="card">
     <h1>${msg}</h1>
     </div>
     `;

    main.innerHTML = cardHTML;
}

function createUserCard(user) {
    const cardHTML = `
     <div class="card">
                <div>
                    <img
                        src="${user.avatar_url}"
                        alt="${user.name}"
                        class="avatar"
                    />
                </div>
                <div class="user-info">
                    <h2>${user.name}</h2>
                    <p>
                        ${user.bio}
                    </p>
                    <ul>
                        <li>${user.followers} <strong>Followers</strong></li>
                        <li>${user.following} <strong>Following</strong></li>
                        <li>${user.public_repos} <strong>repos</strong></li>
                    </ul>
                    <div id="repos">
                        <a href="#" class="repo">Repo 1</a>
                        <a href="#" class="repo">Repo 2</a>
                        <a href="#" class="repo">Repo 3</a>
                    </div>
                </div>
            </div>
     `;

    main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});
