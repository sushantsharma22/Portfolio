document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your Public Key
  emailjs.init("jz-irIxUTUQelllG5"); // Replace with your EmailJS public key

  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
      from_name: document.getElementById("name").value(),
      reply_to: document.getElementById("emailForm").value(),
      message: document.getElementById("message").value(),
    };

    // Validate form data
    if (!formData.from_name || !formData.reply_to || !formData.message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send("service_br818d5", "template_n5buerc", formData)
      .then(
        function (response) {
          console.log("Success!", response.status, response.text);
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset();
        },
        function (error) {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again later.");
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

