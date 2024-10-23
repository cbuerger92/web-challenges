import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={33432132} valueB={54545454} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB} <br />
      {valueA} - {valueB} = {valueA - valueB} <br />
      {valueA} * {valueB} = {valueA * valueB}
    </h1>
  );
}

// In React ist eine Komponente eine Funktion oder
// eine Klasse, die UI-Elemente (wie HTML) zurückgibt

// Sum ist in dem Fall eine Funktion, die eine React-Komponente darstellt
