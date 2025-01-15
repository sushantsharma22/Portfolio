



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

// Menu Icon and Sidebar
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const body = document.body;

// Toggle Sidebar
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close Sidebar When Clicking Outside
document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.remove('active');
    body.classList.remove('menu-open');
  }
});




