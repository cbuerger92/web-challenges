import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">My Article Title</h2>
      <label htmlFor="inputId">My Label:</label>
      <input id="inputId" type="text" />
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Hauptseite"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link zur Wikipedia
      </a>
    </article>
  );
}
