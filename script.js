// Burger menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// Change navbar background on scroll
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const logo = this.document.querySelector(".nav-logo img")
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        if (window.scrollY > 750) {
            logo.classList.add("visible");
        } else {
            logo.classList.remove("visible");
        }    
    } 
    else {
        header.classList.remove("scrolled");
        logo.classList.remove("visible");
    }
});