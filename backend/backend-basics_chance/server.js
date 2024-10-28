import { createServer } from "node:http";
import Chance from "chance";

// export const server = …

const chance = new Chance(); // Chance-Instanz erstellen

// Server erstellen
export const server = createServer((request, response) => {
  // Zufällige Werte generieren
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  // Antwortstring erstellen
  const responseString = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  // Antwort senden
  response.statusCode = 200;
  response.end(responseString);
});
