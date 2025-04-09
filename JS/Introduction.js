document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".slide-in-left-text, .slide-in-right-img, .slide-in-bottom"
  );

  function checkScroll() {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;

      if (elementTop < triggerPoint) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Sahifa yuklanganda tekshirish
});
