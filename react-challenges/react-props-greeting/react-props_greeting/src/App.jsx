import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Christina" />{" "}
      <GreetingCoach name="Esraa" isCoach={true} />
    </div>
  );
}

// Definition der Greeting-Komponente
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function GreetingCoach({ isCoach }) {
  return <h1>{isCoach ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}
