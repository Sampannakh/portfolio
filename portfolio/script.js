/*
   Photography Portfolio Website JavaScript
   Author: Your Name
   Date: 2023
*/

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const header = document.querySelector("header");
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav ul li a");
  const backToTopBtn = document.querySelector(".back-to-top");
  const skillProgress = document.querySelectorAll(".skill-progress");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const contactForm = document.querySelector("#contactForm");

  // ===== Sticky Header =====
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.backgroundColor = "rgba(15, 23, 42, 0.8)";
      header.style.boxShadow = "none";
    }
  });

  // ===== Mobile Menu Toggle =====
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  // ===== Smooth Scrolling for Navigation Links =====
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - header.offsetHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== Back to Top Button =====
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ===== Skill Progress Animation =====
  function animateSkills() {
    skillProgress.forEach((progress) => {
      const level = progress.getAttribute("data-level");
      progress.style.width = level;
    });
  }

  // Run skill animation when the skills section is in view
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    const skillsSection = document.querySelector(".skills");
    if (skillsSection && isInViewport(skillsSection)) {
      animateSkills();
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  // Also check on initial load
  handleScroll();

  // ===== Projects Filter =====
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filterValue === "all") {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 100);
        } else {
          if (card.getAttribute("data-category") === filterValue) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 100);
          } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            setTimeout(() => {
              card.style.display = "none";
            }, 300);
          }
        }
      });
    });
  });

  // ===== Contact Form Handling =====
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const subject = document.querySelector("#subject").value;
      const message = document.querySelector("#message").value;

      // Simple validation
      if (
        name.trim() === "" ||
        email.trim() === "" ||
        subject.trim() === "" ||
        message.trim() === ""
      ) {
        alert("Please fill out all fields in the form.");
        return;
      }

      // Simulate form submission (replace with actual form handling)
      alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
      contactForm.reset();
    });
  }

  // ===== Active Navigation Link on Scroll =====
  function updateNavActiveState() {
    const scrollPosition = window.scrollY;

    // Get all sections
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - header.offsetHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to corresponding link
        const correspondingLink = document.querySelector(
          `nav ul li a[href="#${sectionId}"]`
        );
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateNavActiveState);
  // Also check on initial load
  updateNavActiveState();

  // ===== Animations on Scroll =====
  function revealOnScroll() {
    const elements = document.querySelectorAll(
      ".about-content, .skills-card, .project-card, .contact-content, .about-image-container, .contact-intro, .footer-logo, .footer-social"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Apply initial styles for animations
  const animatedElements = document.querySelectorAll(
    ".about-content, .skills-card, .project-card, .contact-content, .about-image-container, .contact-intro, .footer-logo, .footer-social"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  window.addEventListener("scroll", revealOnScroll);
  // Check on initial load
  revealOnScroll();

  // Image hover effect for project cards
  const projectImages = document.querySelectorAll(".project-image");

  projectImages.forEach((imageContainer) => {
    imageContainer.addEventListener("mouseenter", () => {
      const img = imageContainer.querySelector("img");
      if (img) {
        img.style.transform = "scale(1.1)";
      }
    });

    imageContainer.addEventListener("mouseleave", () => {
      const img = imageContainer.querySelector("img");
      if (img) {
        img.style.transform = "scale(1)";
      }
    });
  });
});
