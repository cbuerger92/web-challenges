import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button color="blue" background="yellow">
        Button 1
      </Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </main>
  );
}

function Button({ children, color, background }) {
  return (
    <button
      className="button"
      type="button"
      style={{ color: color, background: background }}
    >
      {children}
    </button>
  );
}
