import React from "react";
import "./styles.css";

/*

// Task 1

export default function App() {
  return (
    <div>
      <Button
        color="white"
        background="black"
        disabled={false}
        text="Klick mich!"
      />
    </div>
  );
}

// Task 2

function Button({ color, background, disabled, text }) {
  return (
    <button
      style={{ color: color, background: background }}
      disabled={disabled}
      onClick={() => console.log("Button wurde geklickt")}
    >
      {text}
    </button>
  );
}



// Task 3

function Button({ color, background, disabled, text }) {
  const handleClick = () => {
    console.log("Button wurde geklickt");
  };

  return (
    <button
      style={{ color: color, background: background }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
} 

*/

// Task 4

export default function App() {
  const handleClick = () => {
    console.log("Button wurde geklickt");
  };

  return (
    <div>
      <Button
        color="white"
        background="black"
        disabled={false}
        text="Klick mich"
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, background, disabled, text, onClick }) {
  return (
    <button
      style={{ color: color, background: background }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
