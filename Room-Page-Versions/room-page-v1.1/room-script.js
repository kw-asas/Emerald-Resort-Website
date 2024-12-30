/* Open the sidenav */
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

/* Close the sidenav */
function closeNav() {
document.getElementById("sidenav").style.width = "0";
}

// JavaScript to change navbar background on scroll
window.addEventListener("scroll", function () {
const header = document.getElementById("nav-bar");
if (window.scrollY > 100) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}
});

// Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel) => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const totalSlides = slides.length;
        let currentSlide = 0;

        function updateCarousel() {
            const slideWidth = slides[0].clientWidth;
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        // Automatic sliding every 3 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the start
            updateCarousel();
        }, 3000);

        // Adjust carousel layout on window resize
        window.addEventListener('resize', updateCarousel);
    });
});

// Fade JS
// Function to check if an element is in the viewport
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Get all elements that need to fade in
const fadeInOne = document.querySelectorAll('.fade-in-one');
const fadeInTwo = document.querySelectorAll('.fade-in-two');

// Function to handle the scroll event
function handleScroll() {
    fadeInOne.forEach(el => {
        if (isElementInView(el)) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible'); // Reset animation when out of view
        }
    });

    fadeInTwo.forEach(el => {
        if (isElementInView(el)) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible'); // Reset animation when out of view
        }
    });

    fadeInThree.forEach(el => {
        if (isElementInView(el)) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible'); // Reset animation when out of view
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view when the page loads
handleScroll();
