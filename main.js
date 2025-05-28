// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check for saved theme preference or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mainNavLinks = document.getElementById("main-nav-links");

if (mobileMenuToggle && mainNavLinks) {
  mobileMenuToggle.addEventListener("click", () => {
    const isCurrentlyHidden = mainNavLinks.classList.contains("hidden");

    if (isCurrentlyHidden) {
      mainNavLinks.classList.remove("hidden");
      mainNavLinks.classList.add("flex");
    } else {
      mainNavLinks.classList.add("hidden");
      mainNavLinks.classList.remove("flex");
    }
  });
}

// Smooth scroll for navigation links & close mobile menu on nav item click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();

      if (mainNavLinks && !mainNavLinks.classList.contains("hidden")) {
        if (
          mobileMenuToggle &&
          mobileMenuToggle.offsetWidth > 0 &&
          mobileMenuToggle.offsetHeight > 0
        ) {
          mainNavLinks.classList.add("hidden");
        }
      }

      const headerElement = document.querySelector("header");
      let headerOffset = 0;
      if (headerElement) {
        headerOffset = headerElement.offsetHeight;
      }

      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add scroll effect to header (shadow)
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }
  });
}
