const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

/* colors.forEach(); */

// Iteriere über das colors-Array mit forEach
colors.forEach((color) => {
  const box = document.createElement("div"); // Erstelle ein neues <div>-Element
  box.classList.add("color-box"); // Füge die Klasse 'color-box' hinzu
  box.style.backgroundColor = color; // Setze die Hintergrundfarbe auf den aktuellen Farbcode
  document.body.appendChild(box); // Füge das <div>-Element zum Body hinzu
});
