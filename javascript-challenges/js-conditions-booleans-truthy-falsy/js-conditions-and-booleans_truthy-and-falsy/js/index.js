// You don't have to touch this code.
// You can solve this exercise in the browser

function showAnswers() {
  const spans = document.querySelectorAll("span");
  spans.forEach((span) => {
    span.classList.toggle("hidden");
  });
}
const button = document.querySelector("[data-js='show-answers']");
button.addEventListener("click", showAnswers);

/*
  
Truthy: Werte, die als wahr interpretiert werden, z. B. nicht-leere Strings, Zahlen außer 0, Objekte.
Falsy: Werte, die als falsch interpretiert werden, z. B. false, 0, "", null, undefined, NaN.
*/
