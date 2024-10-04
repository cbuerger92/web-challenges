console.clear();

/* const form = document.querySelector('[data-js="form"]'); // Formular auswählen

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  console.log(data);
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`
  );

  formElement.reset();
  formElement.elements.firstName.focus();
});
 */

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  // Ereignis auf Klick
  event.preventDefault(); // neu-laden verhindern

  // Formulardaten in ein Objekt umwandeln
  const formData = new FormData(form); // Erstellt ein FormData-Objekt aus dem Formular, das alle Eingabewerte enthält.
  const formObject = {}; // Iteriert (durch eine Sammlung von Daten gehen oder sie nacheinander zu durchlaufen) über die Formulardaten und speichert sie in einem Objekt.
  formData.forEach((value, key) => {
    formObject[key] = value; // Füllt das Objekt mit den Formulardaten
  });

  // Logge die Formulardaten in der Konsole
  console.log(formObject);

  // Formular zurücksetzen
  form.reset();

  // Fokus auf das Eingabefeld für den Vornamen setzen
  document.getElementById("first-name").focus();
});
