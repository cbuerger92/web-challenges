console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const language of programmingLanguages) {
  // for...of-Loop, der über jedes Element im programmingLanguages-Array iteriert.
  const listItem = document.createElement("li"); // Erstellen des <li>-Elements
  listItem.textContent = language; // Setzen des Texts des <li> auf den Wert der Sprache
  ol.appendChild(listItem); // Hinzufügen des <li> zur <ol>
}

// --^-- write/change code here --^--
