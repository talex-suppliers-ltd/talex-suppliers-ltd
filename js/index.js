document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../image/home1.jpg",
        "../image/home2.jpg"
    ];
    let currentImageIndex = 0;

    function updateBackground() {
        document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }

    document.querySelector(".prev").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateBackground();
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateBackground();
    });

    // Set initial background
    updateBackground();
});
