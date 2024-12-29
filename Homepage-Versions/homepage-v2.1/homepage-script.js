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

// Function to check if an element is in the viewport
function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Get all elements that need to fade in
const fadeInOne = document.querySelectorAll('.fade-in-one');
const fadeInTwo = document.querySelectorAll('.fade-in-two');
const fadeInThree = document.querySelectorAll('.fade-in-three');


// Function to handle the scroll event
function handleScroll() {
    fadeInOne.forEach(el => {
      if (isElementInView(el)) {
          // If the element is in the viewport, add the "visible" class to trigger the animation
          el.classList.add('visible');
      } else {
          // If the element is not in the viewport, remove the "visible" class to reset the animation
          el.classList.remove('visible');
      }
  });

  fadeInTwo.forEach(el => {
      if (isElementInView(el)) {
          // If the element is in the viewport, add the "visible" class to trigger the animation
          el.classList.add('visible');
      } else {
          // If the element is not in the viewport, remove the "visible" class to reset the animation
          el.classList.remove('visible');
      }
  });

  fadeInThree.forEach(el => {
    if (isElementInView(el)) {
        // If the element is in the viewport, add the "visible" class to trigger the animation
        el.classList.add('visible');
    } else {
        // If the element is not in the viewport, remove the "visible" class to reset the animation
        el.classList.remove('visible');
    }
});
}

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view when the page loads
handleScroll();