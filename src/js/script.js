// *** CAROUSEL ***
// TODO
// Sélection de l'élément carousel
const carousel = document.querySelector(".carouselcontainer");
const prevButton = document.querySelector(".carouselbutton--prev");
const nextButton = document.querySelector(".carouselbutton--next");
const premierItem = document.querySelector(".carouselitem");
const scrollAmount = premierItem.clientWidth;

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: -260, behavior: "smooth"
        })
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: 260, behavior: "smooth"
        })
    });
}
