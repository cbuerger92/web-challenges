console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

// 3. Definieren von Funktionen für mathematische Operationen

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  /*
  Was es macht: Mit FormData wird ein Objekt erstellt, das alle Eingabewerte
  des Formulars enthält. Object.fromEntries(formData) konvertiert dieses FormData-Objekt
  in ein reguläres JavaScript-Objekt, wodurch die Werte leichter zugänglich werden.
  */

  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);
  const operator = data.operator;

  if (operator === "addition") {
    result = add(numberA, numberB);
  }

  if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  }

  if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  }

  if (operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
