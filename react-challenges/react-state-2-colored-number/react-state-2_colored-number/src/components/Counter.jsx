/* import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={0} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
} 
*/

import React, { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  // React-Komponente definieren
  const [count, setCount] = useState(0); // State > Zähler-Variable (count) auf einen Anfangswert, nämlich 0.

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCount(count + 1)} // um 1 erhöhen
        >
          +
        </button>

        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)} // um 1 verringern
        >
          -
        </button>
      </div>
    </div>
  );
}

/*
<ColoredNumber value={count} />: 

Das value={count} übergibt den aktuellen Wert des Zählers (count) als
Prop (Eigenschaft) an die ColoredNumber-Komponente. So kann ColoredNumber den
Zähler anzeigen und die Farbe ändern, wenn sich der Zähler-Wert ändert.
*/
