import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🥒 Cucumber",
      color: "green",
    },
    {
      id: 1340,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 1341,
      name: "🍉 Melon",
      color: "pink",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}

/*
Die .map() Methode in React wird oft verwendet,
um eine Liste von Elementen dynamisch zu erzeugen. 
*/
