// Hamburger menyusi uchun
function hamburger() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.add("active");
}

function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.remove("active");
}

// Typewriter effekti uchun
const text = ["DEVELOPER", "3D MAKER", "PROGRAMMER", "CONTENT MAKER"];
const speed = 100;
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < text[textIndex].length) {
    textElement.textContent += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElement.textContent.length > 0) {
    textElement.textContent = textElement.textContent.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

// Dropdown tugmasi uchun yangi kod
document.addEventListener("DOMContentLoaded", () => {
  // Typewriter'ni ishga tushirish
  if (textElement) {
    typeWriter();
  }

  // Dropdown funksiyasi
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", () => {
      dropdownContent.classList.toggle("active");
    });

    // Tugmadan tashqarida bosilganda yopilishi
    document.addEventListener("click", (e) => {
      if (
        !dropdownBtn.contains(e.target) &&
        !dropdownContent.contains(e.target)
      ) {
        dropdownContent.classList.remove("active");
      }
    });
  }
});
