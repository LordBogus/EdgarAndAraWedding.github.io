function changeToSpanish() {
    console.log("changeToSpanish");
    galleryGaleria.textContent = "Galeria";
    venueInstalaciones.textContent = "Instalaciones";
    aboutSobre.textContent = "Sobre el evento";
    comingProximamente.textContent = "Proximamente...";
}

function changeToEnglish() {
    console.log("changeToEnglish");
    galleryGaleria.textContent = "Gallery";
    venueInstalaciones.textContent = "Venue";
    aboutSobre.textContent = "About the event";
    comingProximamente.textContent = "Coming soon...";
}

const galleryContainer = document.querySelector(".gallery-container");
const imageFileNames = [
    "Pool+Lake.jpg",
    "Pool 1.jpg",
    "Muelle - Choza.jpg",
    "Main pool.jpg",
    "hotel-exterior.png",
    "Church.jpg",
    "Cancha de Tennis.jpg",
];

for (let i = 0; i < 4; i++) {
    console.log(imageFileNames[i]);
    const image = document.createElement("img");
    image.src = `../images/Tres cielos Image/` + imageFileNames[i];
    galleryContainer.appendChild(image);
}
