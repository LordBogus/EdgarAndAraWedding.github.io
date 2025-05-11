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

function menuLanguage() {
    console.log(localStorage.getItem("language"));
    const navLinks = document.querySelectorAll(".nav-links");
    const englishMenu = ["Home", "Gallery", "Location", "Accommodation", "Dress Code", "Gifts & Contributions"];
    const spanishMenu = ["Inicio", "Galeria", "Ubicación", "Instalaciones", "Código de Vestimenta", "Regalos & Contribuciones"];
    const desktopMenuList = navLinks[0];
    const mobileMenuList = navLinks[1];
    for (i = 0; i < desktopMenuList.children.length; i++) {
        if (localStorage.getItem("language") == "ES") {
            desktopMenuList.children[i].innerText = spanishMenu[i];
        }
    }
    for (i = 0; i < mobileMenuList.children.length; i++) {
        if (localStorage.getItem("language") == "EN") {
            desktopMenuList.children[i].innerText = englishMenu[i];
        }
    }
    console.log(navLinks);
}

// menuLanguage();
