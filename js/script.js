

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
