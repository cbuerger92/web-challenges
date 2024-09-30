const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.

  if (age > 12 && age < 20) {
    output.innerHTML = "You are a teenager!";
  } else {
    output.innerHTML = "You are a not teenager!";
  }
});

/*
innerHTML: Jedes HTML-Element hat eine Eigenschaft namens innerHTML.
Diese Eigenschaft gibt den HTML-Inhalt (also den Text oder HTML-Code) des Elements wieder.
Wenn du den Wert von innerHTML änderst, änderst du den Inhalt des Elements.

innerHTML ändert nur den Inhalt eines Elements.
outerHTML ersetzt das gesamte Element inklusive des Inhalts.

*/
