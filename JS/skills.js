document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item");

  // Dropdown funksiyasi
  skillItems.forEach((item) => {
    const btn = item.querySelector(".dropdown-btn");
    const content = item.querySelector(".dropdown-content");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = content.classList.contains("active");

      // Barcha dropdownlarni yopamiz
      skillItems.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector(".dropdown-btn");
        const otherContent = otherItem.querySelector(".dropdown-content");
        otherBtn.classList.remove("active");
        otherContent.classList.remove("active");
      });

      // Bosilgan dropdownni ochamiz/yopamiz
      if (!isActive) {
        btn.classList.add("active");
        content.classList.add("active");
      } else {
        btn.classList.remove("active");
        content.classList.remove("active");
      }
    });

    // Tashqariga bosilganda yopish
    document.addEventListener("click", (e) => {
      if (!item.contains(e.target)) {
        btn.classList.remove("active");
        content.classList.remove("active");
      }
    });
  });

  // Scroll animatsiyasi uchun IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-anim"); // Animatsiya uchun boshqa klass
        }
      });
    },
    { threshold: 0.8 }
  );

  skillItems.forEach((item) => {
    observer.observe(item);
  });
});
