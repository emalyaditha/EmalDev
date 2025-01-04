document.addEventListener("DOMContentLoaded", function () {
  let isExperienceVisible = false;

  document
    .getElementById("toggle-button")
    .addEventListener("click", function () {
      const experience = document.getElementById("experience");
      const education = document.getElementById("education");

      if (isExperienceVisible) {
        experience.style.display = "none";
        education.style.display = "block";
        this.textContent = "Show Experience"; // Update button text
      } else {
        experience.style.display = "block";
        education.style.display = "none";
        this.textContent = "Show Education"; // Update button text
      }

      isExperienceVisible = !isExperienceVisible;
    });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("experience");
  timeline.classList.remove("hidden");
});
