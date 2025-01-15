document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".nav-links");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelectorAll(".nav-links a");

  // Toggle menu visibility
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("show-menu");
    }
  });

  // Close menu on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show-menu");
    });
  });
});




// SMOOTH SCROLL
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-links a, .hero-btn");
  navLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      const targetSection = document.querySelector(targetId);
      const headerOffset = 60; // fixed header offset
      const elementPosition = targetSection.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
});
