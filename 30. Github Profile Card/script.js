"use strict";
const main = document.getElementById("main");
const search = document.getElementById("search");

const APIURL = "https://api.github.com/users/";

async function getUser(userName) {
    try {
        const { data } = await axios(APIURL + userName);
        createUserCard(data);
        getRepos(userName);
    } catch (err) {
        if (err.response.status === 404) {
            createErrorCard("There is no profile with this username");
        }
    }
}

async function getRepos(userName) {
    try {
        const { data } = await axios(APIURL + userName + "/repos?sort=created");
        addReposToCard(data);
    } catch (err) {
        createErrorCard("Problem fetching repos");
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
                        
                    </div>
                </div>
            </div>
     `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");

    repos.slice(0, 5).forEach((repo) => {
        const repoEl = document.createElement("a");

        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});
