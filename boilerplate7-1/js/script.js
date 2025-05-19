let slideIndex = 1;
const slides = document.querySelectorAll('.slides');

function showSlide(n) {
    if (n > slides.length) {
        n = 1;
    } else if (n < 1) {
        n = slides.length;
    }
    slideIndex =n;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
    const currentSlide = slides[slideIndex - 1];
    const counter = currentSlide.querySelector('.num');
    const text = slideIndex + '/' + slides.length;
    counter.textContent = text;
}

function plusSlides(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});