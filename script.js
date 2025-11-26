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
                Estamos encantados de invitarte a celebrar uno de los días más especiales de nuestras vidas. Del 16 al 18 de enero nos casamos y nos encantaría que estuvieras allí para compartir la alegría, las risas y quizás incluso algunas lágrimas de felicidad.
            </p>

            <p>
                Este día se trata de amor, conexión y buenas vibras. Imagina momentos acogedores, conversaciones sinceras y mucho baile (o balanceo, si te gusta más). Ya seas un amigo de toda la vida, un familiar querido o alguien con quien hayamos conectado recientemente, tu presencia significa mucho para nosotros.
            </p>

            <p>
                Así que, ponte tu outfit favorito, saca tu mejor sonrisa y prepárate para festejar con nosotros mientras nos damos el "Acepto" y comenzamos esta nueva etapa juntos. ¡Estamos deseando verte allí!
            </p>

            <p class="center">Con todo nuestro amor,</p>
            <p class="center">Edgar & Aracelis</p>

           <p>P.S.:El personal del Hotel los contactará para efectos de reservación y pago de su estadía</p>
            <p>
                Para quienes no tengan transporte al lugar de la boda, tendremos un autobús que saldrá del Hotel Sheraton Reforma a las 4 p. m. el viernes 16 de Enero.
            </p>
            <p>Si le interesa reservar un asiento en este autobús, por favor confirme su asiento enviándome un mensaje de WhatsApp al +52 18804189, especificando cuántos asientos desea y el nombre de las personas, junto con su comprobante de pago (detalles de pago en la pestaña "Regalos y Contribuciones") o avíseme si prefiere pagar en efectivo en el lugar. Cada asiento cuesta $25 USD / $500 MXN. Esto cubrirá su viaje de ida y vuelta a la CDMX.</p>
             <div class="mapita">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6918826523006!2d-99.16827294896557!3d19.425714404798086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3591c1ac8f%3A0xbc2d97a9f990a00f!2sSheraton%20Maria%20Isabel%20Mexico%20City%20Reforma!5e0!3m2!1sen!2smx!4v1763843090416!5m2!1sen!2smx"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <p>
                No olvides visitar el resto del sitio web para obtener todos los detalles: horario, ubicación, alojamiento y más. ¡Avísanos si necesitas algo!
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

             <p>P.S.: Hotel staff will be contacting you for payment and reservation of your room/vila through WhatsApp</p>
            <p>
                For people that don't have transportation to the wedding venue, we are going to have a bus departing from Hotel Sheraton
                Reforma at 4PM on Friday 16th
            </p>
            <p>
                In case you are interested on having a seat on this bus, please confirm your seat by sending me a whatsapp message to +52
                18804189 specifying how many seats would you like, and name of those people with your proof of payment (Payment details on
                the Gifts & Contributions tab) or let me know if you would like to pay with cash at the venue . Each sit costs $25 USD /
                $500 MXN. This will cover your departure and return to CDMX
            </p>
             <div class="mapita">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6918826523006!2d-99.16827294896557!3d19.425714404798086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3591c1ac8f%3A0xbc2d97a9f990a00f!2sSheraton%20Maria%20Isabel%20Mexico%20City%20Reforma!5e0!3m2!1sen!2smx!4v1763843090416!5m2!1sen!2smx"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <p>
                Don’t forget to check out the rest of the site for all the details—schedule, location, accommodations, and more. Let us know
                if you need anything!
            </p>
    `;
}
