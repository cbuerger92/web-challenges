console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", function (event) {
  // function (event) > Formularinformationen, das das Ereignis ausgelöst hat
  event.preventDefault(); // kein neuladen der Seite, Infos können verarbeitet werden

  const formData = new FormData(form); // FormData-Objekt erstellen

  // Formulatdaten in ein normales Objekt umwandeln
  // key > zB firstName, lastName . Entspricht dem name-Attribut
  // value > Wert, der im Formularfeld eingegeben wurde
  const formDataObj = {};
  formData.forEach((value, key) => {
    // Verwende den key (den Namen des Formularfeldes) als Eigenschaft im Objekt
    formDataObj[key] = value; // Setze den Wert des Formularfeldes als Wert dieser Eigenschaft
  });

  // Objekt besser weil kompakte Datenübersicht

  // in Konsole abrufen
  console.log(formDataObj);

  // Formular zurücksetzen
  form.reset();

  // Fokus auf das "First Name"-Feld setzen
  document.getElementById("first-name").focus();
});
