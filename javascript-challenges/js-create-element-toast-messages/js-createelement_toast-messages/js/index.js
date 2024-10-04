console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToastMessage = document.createElement("li"); // neues li Element

  newToastMessage.className = "toast-container__message"; // Klasse hinzufügen

  newToastMessage.textContent = "I'm a new toast message."; // Textinhalt

  toastContainer.appendChild(newToastMessage); // Element zum Container hinzufügen
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  while (toastContainer.firstChild) {
    // überprüft, ob noch Kinder im Container vorhanden sind.
    toastContainer.removeChild(toastContainer.firstChild); // entfernt das erste Kind-Element des Containers, bis der Container leer ist.
  }
});
