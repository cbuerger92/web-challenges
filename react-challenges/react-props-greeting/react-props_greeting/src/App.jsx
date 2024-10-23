import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Christina" />
      <Greeting name="Esraa" isCoach={true} />
    </div>
  );
}

// Definition der Greeting-Komponente
function Greeting({ name, isCoach }) {
  return <h1> {isCoach ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}
