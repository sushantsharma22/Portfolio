


  // Smooth Scroll
  const navLinks = document.querySelectorAll(".nav-links a, .hero-btn");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
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
    });
  });
  

  // Toggle Sidebar
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("sidebar");
  const body = document.body;

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close Sidebar When Clicking Outside
  document.addEventListener("click", (e) => {
    if (!menuIcon.contains(e.target) && !sidebar.contains(e.target)) {
      sidebar.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });


