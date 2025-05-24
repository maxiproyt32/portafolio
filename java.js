document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleModeBtn");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("🌙 Toggle Dark Mode");
    });
  }
});