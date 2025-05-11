const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
    changeSlide(1);
});
document.getElementById("prev").addEventListener("click", () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    // direction === 1

    // slides[0] - we remove the class active
    slides[currentIndex].classList.remove("active");
    slides[currentIndex].classList.add("non-active");

    // 0 + 1, currentIndex === 1
    currentIndex += direction;

    // currentIndex === 1, slides.length === 5
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].classList.remove("non-active");
    slides[currentIndex].classList.add("active");
    // slides[1]

    console.log("slides[currentIndex]", slides[currentIndex]);
}

function changeToSpanish() {
    console.log("changeToSpanish");
    homeTitle.innerHTML = `Edgar y Ara <br> La Boda`;
    date.textContent = "16, 17 & 18 de Enero 2026";
    homeText = document.querySelector("#greeting-text");
    homeText.innerHTML = `
    <p class="center">¡Bienvenido a nuestra Historia de Amor!</p>
            <p class="center">¡Buenas buenas, Queridos Humanos!</p>

            <p>
                We’re beyond excited to invite you to celebrate one of the most special days of our lives. On January 16th~18th, we’re tying
                the knot, and we’d be absolutely thrilled to have you there to share in the joy, laughter, and maybe even a few happy tears.
            </p>

            <p>
                This day is all about love, connection, and good vibes. Think cozy moments, heartfelt conversations, and a whole lot of
                dancing (or swaying, if that’s more your style). Whether you’re a longtime friend, a cherished family member, or someone
                we’ve recently connected with, your presence means the world to us.
            </p>

            <p>
                So, grab your favorite outfit, bring your best smiles, and get ready to party with us as we say “I do” and kick off this new
                chapter together. We can’t wait to see you there!
            </p>

            <p class="center">With all our love,</p>
            <p class="center">Edgar & Aracelis</p>

            <p>
                P.S. Don’t forget to check out the rest of the site for all the details—schedule, location, accommodations, and more. Let us
                know if you need anything!
            </p>
    `;
}

function changeToEnglish() {
    console.log("changeToEnglish");
    homeTitle.textContent = "Edgar and Ara's Wedding";
    date.textContent = "January 16th, 17th & 18th 26's";
    homeText = document.querySelector("#greeting-text");
    homeText.innerHTML = `
    <p class="center">Welcome to Our Love Story!</p>
            <p class="center">Hey there, lovely humans!</p>

            <p>
                We’re beyond excited to invite you to celebrate one of the most special days of our lives. On January 16th~18th, we’re tying
                the knot, and we’d be absolutely thrilled to have you there to share in the joy, laughter, and maybe even a few happy tears.
            </p>

            <p>
                This day is all about love, connection, and good vibes. Think cozy moments, heartfelt conversations, and a whole lot of
                dancing (or swaying, if that’s more your style). Whether you’re a longtime friend, a cherished family member, or someone
                we’ve recently connected with, your presence means the world to us.
            </p>

            <p>
                So, grab your favorite outfit, bring your best smiles, and get ready to party with us as we say “I do” and kick off this new
                chapter together. We can’t wait to see you there!
            </p>

            <p class="center">With all our love,</p>
            <p class="center">Edgar & Aracelis</p>

            <p>
                P.S. Don’t forget to check out the rest of the site for all the details—schedule, location, accommodations, and more. Let us
                know if you need anything!
            </p>
    `;
}
