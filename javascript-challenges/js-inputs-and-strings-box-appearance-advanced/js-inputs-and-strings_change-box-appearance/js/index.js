/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [x] Add an event listener for each input element.
– [x] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

const boxMain = document.querySelector('[data-js="box"]');
const colorSlider = document.querySelector('[data-js="input-color"]');
const radiusSlider = document.querySelector('[data-js="input-radius"]');
const rotationSlider = document.querySelector('[data-js="input-rotation"]');

colorSlider.addEventListener("click", () => {
  boxMain.style.backgroundColor = `hsl(${colorSlider.value}, 40%, 80%)`;
});

/*
boxMain.style.backgroundColor = ...:
    > backgroundColor-Eigenschaft des boxMain-Elements ändern
    > ermöglicht es, die Hintergrundfarbe des Elements über CSS in JavaScript zu ändern.

hsl(${colorSlider.value}, 70%, 60%):
    > hsl(...) ist eine Funktion, die die Farbe im HSL (Hue, Saturation, Lightness) Format beschreibt.
    > ${colorSlider.value}: Hier wird der aktuelle Wert des colorSlider-Elements verwendet, um den Farbton (Hue) anzugeben.
    > 40%: fester Wert für die Sättigung 
    > 80%: fester Wert für die Helligkeit 
*/

radiusSlider.addEventListener("click", () => {
  boxMain.style.borderRadius = `${radiusSlider.value}%`;
});

rotationSlider.addEventListener("click", () => {
  boxMain.style.transform = `rotate(${rotationSlider.value}deg)`;
});
