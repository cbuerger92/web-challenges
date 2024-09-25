console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// Button-Elemente mit den richtigen data-js Attributen selektieren
const body = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// Dark Mode aktivieren
darkModeButton.addEventListener("click", () => {
  body.classList.add("dark");
  console.log("Dark mode activated");
});

// Light Mode aktivieren
lightModeButton.addEventListener("click", () => {
  body.classList.remove("dark");
  console.log("Light mode activated");
});

// Modus umschalten (toggle)
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log("Toggled mode");
});
