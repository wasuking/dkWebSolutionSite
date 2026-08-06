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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consultation-form");
  const submitButton = document.getElementById("submit-button");
  const formStatus = document.getElementById("form-status");

  if (!form || !submitButton || !formStatus) {
    console.error("Consultation form elements could not be found.");
    return;
  }

  emailjs.init({
    publicKey: "nmBcNSRvPqW8f4WiG",
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "";

    try {
      await emailjs.sendForm(
        "service_9brx03s",
        "template_8w7hzp9",
        form
      );

      formStatus.textContent =
        "Your consultation request was sent successfully.";

      form.reset();
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      formStatus.textContent =
        "Something went wrong. Please call or email us directly.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Request a Consultation";
    }
  });
});