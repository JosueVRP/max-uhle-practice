const selectSubject = document.getElementById("select-signature");
const cardHeader = document.getElementById("cardheader");
const buttonNext = document.getElementById("next");

console.log(buttonNext);

function selectTheSubject() {
    cardHeader.innerHTML = `${(selectSubject.value).toUpperCase()}`;
}

selectSubject.addEventListener("change", selectTheSubject);
buttonNext.addEventListener("click",(event)=>{
    event.preventDefault();
})

// function verifyInputsOne(){
//     if()
// }


// Event assignment
