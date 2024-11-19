// *** CAROUSEL ***
// TODO
// Sélection de l'élément carousel
const carousel = document.querySelector(".carouselcontainer");
console.log(carousel); // Affichera l'élément dans la console

// Modification de la position du scroll
carousel.scrollLeft = 520;

// Test des boutons avec scrollBy
carousel.scrollBy({ left: +260, behavior: "smooth" });
carousel.scrollBy({ left: -260, behavior: "smooth" });

// Sélection des boutons de navigation
const prevButton = document.querySelector(".carouselbutton--prev");
console.log(prevButton); // Affichera l'élément du bouton "précédent"

const nextButton = document.querySelector(".carousel__button--next");
console.log(nextButton); // Affichera l'élément du bouton "suivant"

// Réagir à un clic sur les boutons
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -260, behavior: "smooth" });
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +260, behavior: "smooth" });
    });
}
