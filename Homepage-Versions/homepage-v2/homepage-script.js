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
