const menuButton = document.querySelector("#menu-button");
const siteNav = document.querySelector("#site-nav");
const navigationLinks = document.querySelectorAll("#site-nav a");
const currentYear = document.querySelector("#current-year");
const revealItems = document.querySelectorAll(".reveal");

/* Open and close the mobile navigation */

menuButton.addEventListener("click", function () {
  siteNav.classList.toggle("open");

  const menuIsOpen = siteNav.classList.contains("open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

/* Close the menu after a navigation link is selected */

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

/* Display the current year in the footer */

currentYear.textContent = new Date().getFullYear();

/* Reveal sections as the visitor scrolls */

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

revealItems.forEach(function (item) {
  revealObserver.observe(item);
});