document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("4C3sF54IL1mmbXlkC"); // Replace with your actual Public Key

  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
      from_name: document.getElementById("name").value,
      reply_to: document.getElementById("emailForm").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_br818d5", "template_n5buerc", formData)
      .then(
        function (response) {
          alert("Message sent successfully! Thank you for reaching out.");
          document.getElementById("contactForm").reset(); // Reset form fields
        },
        function (error) {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
  });
});




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

