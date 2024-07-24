function toggleMenu() {
    const menu = document.querySelector("#hamburger-nav .menu-links");
    const icon = document.querySelector("#hamburger-nav .hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
