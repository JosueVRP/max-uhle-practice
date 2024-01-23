const groupDistributionButton = document.getElementById("group-distribution-btn");
const viewContainer = document.getElementById("view-container");
const darkButton = document.getElementById("dark-button");
const lightButton = document.getElementById("light-button");
const mainContainer = document.getElementById("main-container");
const sideBarButtons = document.querySelectorAll(".sidebar-button");
const arrowButton = document.getElementById("arrow-button");
const arrowButtonShow = document.getElementById("arrow-button-right");
const navBar = document.getElementById("sidebar");
const logoContainer = document.querySelector(".logo-container");
const maxUhleLogo = document.getElementById("logo");
const cardContainer = document.querySelector(".card-container");

// Cargar la vista dentro del div con id view-container

async function loadView() {
    const response = await fetch (`./views/groupDistribution.html`)
    const view = await response.text();
    viewContainer.innerHTML = view;
}

groupDistributionButton.addEventListener("click",loadView);

// Functions for change the web theme and hide and show elements

let hide;

function hideBar() {
    hide = true
    if (hide) {
        cardContainer.style.paddingLeft = "120px";
    }
    navBar.style.display = "none";
    maxUhleLogo.style.display = "none";
    logoContainer.classList.remove("w-100");
    logoContainer.style.width = "0";
    sideBarButtons.forEach(function (button) {
        button.style.display = "none";
    });
}

function showBar() {
    if (hide) {
        navBar.style.display = "block";
        maxUhleLogo.style.display = "block";
        logoContainer.classList.add("w-100");
        sideBarButtons.forEach(function (button) {
            button.style.display = "block";
        });
    }
}

function changeToDark() {
    mainContainer.classList.remove("bg-white");
    mainContainer.classList.add("bg-dark")
    sideBarButtons.forEach(function (button) {
        button.classList.remove("text-black");
        button.classList.add("text-white");
    })
}

function changeToLight() {
    mainContainer.classList.remove("bg-black");
    mainContainer.classList.add("bg-white");
    sideBarButtons.forEach(function (button) {
        button.classList.remove("text-white");
        button.classList.add("text-black");
    })
}

arrowButtonShow.addEventListener("click", showBar);
arrowButton.addEventListener("click", hideBar);
darkButton.addEventListener("click", changeToDark);
lightButton.addEventListener("click", changeToLight);

