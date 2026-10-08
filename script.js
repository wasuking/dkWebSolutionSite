"use strict";

// Navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navlinks");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

// Footer
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Optional Google Analytics: add your GA4 measurement ID below after setup.
const GA_MEASUREMENT_ID = "";
if (/^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)) {
  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(analyticsScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
  document.querySelectorAll('a[href*="calendly.com"]').forEach(link => link.addEventListener("click", () => window.gtag("event", "meeting_link_click")));
}
