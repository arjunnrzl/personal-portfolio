const menuLinks = document.querySelectorAll(".nav-menu a");

const sections = document.querySelectorAll(
    "#home, #about, #experience, #projects, #skills, #contact"
);


// DESKTOP NAVIGATION
menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menuLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ACTIVE MENU WHEN SCROLLING
window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });


    menuLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// MOBILE NAVIGATION
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");


menuButton.addEventListener("click", function () {

    const isOpen = mobileMenu.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuButton.innerHTML = '<i data-lucide="x"></i>';
    } else {
        menuButton.innerHTML = '<i data-lucide="menu"></i>';
    }

    lucide.createIcons();

});


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});


// LOAD LUCIDE ICONS
lucide.createIcons();