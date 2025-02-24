function toggleMenu() {
    let navbar = document.getElementById("navbar");
    let menuToggle = document.getElementById("menu-toggle");

    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
}

function closeMenu() {
    let navbar = document.getElementById("navbar")
    let overlay = document.getElementById("overlay")

    navbar.classList.remove("active")
    overlay.classList.remove("active")



}