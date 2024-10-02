import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
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
