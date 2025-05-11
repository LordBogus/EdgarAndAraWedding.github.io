if (localStorage.getItem("language") == "ES") {
    language.textContent = "ES";
    changeToSpanish();
}

language.addEventListener("click", function () {
    if (language.textContent == "EN") {
        language.textContent = "ES";
        localStorage.setItem("language", "ES");
        changeToSpanish();
    } else {
        language.textContent = "EN";
        localStorage.setItem("language", "EN");
        changeToEnglish();
    }
});
