document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const educationSection = document.getElementById("education");
  const experienceSection = document.getElementById("experience");

  toggleButton.addEventListener("click", function () {
    if (experienceSection.classList.contains("hidden")) {
      educationSection.classList.add("hidden");
      experienceSection.classList.remove("hidden");
      toggleButton.textContent = "Show Education";
    } else {
      experienceSection.classList.add("hidden");
      educationSection.classList.remove("hidden");
      toggleButton.textContent = "Show Experience";
    }
  });
});
