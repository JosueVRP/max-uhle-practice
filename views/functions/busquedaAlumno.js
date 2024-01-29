const personalInformationSection = document.getElementById("personal-information");
const personalInformationButton = document.getElementById("personal-information-button");

console.log(personalInformationSection.classList);


function showSection(sectionSelected) {
    if(sectionSelected.classList("d-none")){

    };
}

personalInformationButton.addEventListener("click",()=>{
    showSection(personalInformationSection);
})
