function toggleMenu() {
    var nav = document.getElementById("navLinks");
    if (header.style.display === "block") {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slides");
    const totalSlides = slides.length;
    console.log(totalSlides);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";  // Show only the active slide
            slide.style.zIndex = i === index ? "1" : "-1";  // Bring it to the front
            slide.style.transition = "opacity 1s ease-in-out";  // Smooth transition
        });
    }
    

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }


    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
});