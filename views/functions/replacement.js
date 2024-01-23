const selectSubject = document.getElementById("select-signature");
const cardHeader = document.getElementById("cardheader");

function selectTheSubject() {
    cardHeader.innerHTML = `${(selectSubject.value).toUpperCase()}`;
}

selectSubject.addEventListener("change", selectTheSubject);

// function verifyInputsOne(){
//     if()
// }


// Event assignment
