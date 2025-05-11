// console.log("test");
// const copyButton = document.querySelector(".copy-button");
// console.log(copyButton);
const address = document.querySelector(".address");

function copyText() {
    navigator.clipboard.writeText(address.textContent).then(() => {
        alert("Text copied to clipboard");
    });
}

function changeToSpanish() {
    console.log("changeToSpanish");
    locationUbicacion.textContent = "Ubicación";
    menuLanguage();
}
function changeToEnglish() {
    console.log("changeToEnglish");
    locationUbicacion.textContent = "Location";
    menuLanguage();
}
