import React from "react";
import "./styles.css";

/* export default function App() {
  return <div>Replace me with your Component!</div>;
} */

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World Article</h1>
      <p>Lorem ipsum dolor sit amet</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
