console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const tosChecked = tosCheckbox.checked; // Speichert den Status der Checkbox (ob sie markiert ist oder nicht)

  if (!tosChecked) {
    showTosError(); // Wenn die Checkbox nicht markiert ist, zeige die Fehlermeldung an
    return; // Beende die Funktion hier
  }

  hideTosError(); // Wenn die Checkbox markiert ist, verstecke die Fehlermeldung

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

/*
  if (!tosChecked) {

Das !-Symbol ist der logische NOT-Operator. Es kehrt den booleschen Wert um:
Wenn tosChecked true ist (Checkbox ist markiert), wird !tosChecked false.
Wenn tosChecked false ist (Checkbox ist nicht markiert), wird !tosChecked true.

*/
