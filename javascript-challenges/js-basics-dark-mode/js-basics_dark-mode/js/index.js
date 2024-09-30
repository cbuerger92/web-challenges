console.clear();

// Button-Elemente mit den richtigen data-js Attributen selektieren

// Dark Mode aktivieren

const buttonDark = document.querySelector('[data-js="dark-mode-button"]');
const body = document.querySelector('[data-js="body"]');

buttonDark.addEventListener("click", () => {
  body.classList.add("button--dark");
  body.classList.remove("button--light");
});

// Light Mode aktivieren

const buttonLight = document.querySelector('[data-js="light-mode-button"]');

buttonLight.addEventListener("click", () => {
  body.classList.add("button--light");
  body.classList.remove("button--dark");
});

// Modus umschalten (toggle)

const buttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonToggle.addEventListener("click", () => {
  body.classList.toggle("button--dark");
  body.classList.toggle("button--light");
});
