import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Animal isDog={false} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? (
        <span>
          <h1>🤗</h1>
        </span>
      ) : (
        <span>
          <h1>😖</h1>
        </span>
      )}
    </div>
  );
}

function Animal({ isDog }) {
  return (
    <div>
      {isDog ? (
        <span>
          <h1>🐶</h1>
        </span>
      ) : (
        <span>
          <h1>🌭</h1>
        </span>
      )}
    </div>
  );
}
