const personalInformationSection = document.getElementById("personal-information");
const personalInformationButton = document.getElementById("personal-information-button");
const secctions = document.getElementsByTagName("section");

console.log(secctions);

function searchAndShow(selectClasses) {
    if (selectClasses.classList.contains("d-none")) {
        selectClasses.classList.remove("d-none");

    } else {
        console.log("No se encontro");
    }
}

personalInformationButton.addEventListener("click", () => {
    searchAndShow(personalInformationSection);
});
