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
    menuLanguage();
});

function menuLanguage() {
    console.log(localStorage.getItem("language"));
    const navLinks = document.querySelectorAll(".nav-links");
    const desktopMenuList = navLinks[0];
    const mobileMenuList = navLinks[1];

    const englishMenuItems = ["Home", "Gallery", "Location", "Accommodation", "Dress Code", "Schedule", "Gifts & Contributions"];
    const spanishMenuItems = [
        "Inicio",
        "Galeria",
        "Ubicación",
        "Instalaciones",
        "Código de Vestimenta",
        "Itinerario",
        "Regalos & Contribuciones",
    ];

    // for (i = 0; i < desktopMenuList.children.length; i++) {
    //     if (localStorage.getItem("language") == "ES") {
    //         console.log(desktopMenuList);
    //         desktopMenuList.children[i].textContent = spanishMenuItems[i];
    //     }
    // }
    for (let i = 0; i < desktopMenuList.children.length; i++) {
        if (localStorage.getItem("language") == "EN") {
            desktopMenuList.children[i].firstElementChild.textContent = englishMenuItems[i];
            mobileMenuList.children[i].firstElementChild.textContent = englishMenuItems[i];
        } else {
            desktopMenuList.children[i].firstElementChild.textContent = spanishMenuItems[i];
            mobileMenuList.children[i].firstElementChild.textContent = spanishMenuItems[i];
        }
    }
    console.log(navLinks);
}

menuLanguage();
