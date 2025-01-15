



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

const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

// Toggle Sidebar
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  document.body.classList.toggle('menu-open'); // Prevent scrolling
});

// Close Sidebar on Outside Click
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove('active');
    document.body.classList.remove('menu-open'); // Restore scrolling
  }
});

// Close Sidebar on Link Click
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    document.body.classList.remove('menu-open'); // Restore scrolling
  });
});

