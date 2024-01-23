const selectOne = document.getElementById("select-one");

console.log("dfsidfui")

let classData;

async function insertClassRoom() {
    const response = await fetch(`./fakeInfo/class.json`);
    classData = await response.json();
    console.log(classData);
    createClassOptions();
}

insertClassRoom();

function createClassOptions() {
    for (let classNumber in classData) {
        const textOption = classNumber.toUpperCase(classNumber);
        const classOption = document.createElement("option");
        classOption.value = classNumber;
        classOption.innerHTML = textOption;
        selectOne.append(classOption);
    }
}