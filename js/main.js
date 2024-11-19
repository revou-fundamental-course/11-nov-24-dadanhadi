const carouselWrapper = document.querySelector('.carousel-wrapper');
const listPhotos = document.querySelectorAll('.carousel-photo');
const prevButton = document.querySelector('.arrow-prev');
const nextButton = document.querySelector('.arrow-next');

    let currentIndex = 0;

const showSlide = (index) => {
    const totalSlides = listPhotos.length;
    currentIndex = (index + totalSlides) % totalSlides;
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
};

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

let autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

carouselWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

carouselWrapper.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});

