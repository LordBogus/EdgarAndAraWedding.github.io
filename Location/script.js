// console.log("test");
const copyButton = document.querySelector(".copy-button");
// console.log(copyButton);
const address = document.querySelector(".address");

function copyText() {
    navigator.clipboard.writeText(address.textContent);
}
