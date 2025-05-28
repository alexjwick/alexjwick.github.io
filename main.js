// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check for saved theme preference
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
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
  }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
mobileMenuToggle.addEventListener("click", () => {
  // Implementation for mobile menu
  alert("Mobile menu implementation needed");
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }

  lastScroll = currentScroll;
});
