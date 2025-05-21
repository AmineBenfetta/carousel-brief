let cards = document.querySelectorAll(".image-card");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
updateCarousel();

function updateCarousel() {
    cards.forEach((card) => {
        card.style.display = "none";

    });
    cards[currentIndex].style.display = "block";
    
let carouselIndicator = document.getElementById("carousel-indicator");
carouselIndicator.textContent = `${currentIndex + 1} / ${cards.length}`;
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    
});