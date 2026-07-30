"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = document.querySelectorAll(".site-nav a");
const consultationForm = document.querySelector("#consultation-form");
const formStatus = document.querySelector(".form-status");
const currentYear = document.querySelector("#current-year");
const demoLink = document.querySelector(".demo-link");

currentYear.textContent = new Date().getFullYear();

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.classList.remove("is-active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");

  menuButton.classList.toggle("is-active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 860) {
    closeMenu();
  }
});

demoLink.addEventListener("click", (event) => {
  if (demoLink.getAttribute("href") === "#") {
    event.preventDefault();
  }
});

consultationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!consultationForm.checkValidity()) {
    formStatus.classList.add("is-error");
    formStatus.textContent =
      "Please complete the required fields before submitting.";
    consultationForm.reportValidity();
    return;
  }

  formStatus.classList.remove("is-error");
  formStatus.textContent =
    "Your form is ready. Connect it to your email service before launch to receive submissions.";
});

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
