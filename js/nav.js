// nav.js
document.addEventListener("DOMContentLoaded", () => {
    const navImage = document.querySelector(".nav-image");
    const underline = document.querySelector(".underline");

    navImage.addEventListener("mouseenter", () => {
        underline.classList.add("active");
    });

    navImage.addEventListener("mouseleave", () => {
        underline.classList.remove("active");
    });
});