import { createServer } from "node:http";

const answer = 32 + 4; // Berechnung außerhalb des Servers

export const server = createServer((request, response) => {
  response.statusCode = 200;
  console.log(answer); // Ausgabe in der Konsole
  response.end(`Hello World! The answer is ${answer}`); // Antwort an den Client
});

// export const server = …

/*

Der Server verwendet eine Callback-Funktion mit
request und response als Parameter, um auf Anfragen zu reagieren.

Die Antwort des Servers lautet „Hello, [dein Name]!“,
und response.end() sendet diese Antwort zurück.

Die Zeile response.statusCode = 200; setzt den HTTP-Statuscode der Antwort,
die dein Server an den Client zurücksendet. Dieser Statuscode gibt an,
ob die Anfrage erfolgreich war oder ob es ein Problem gab.

Statuscode 200:
Der Statuscode 200 bedeutet "OK" und zeigt an, dass die Anfrage des
Clients (z.B. ein Aufruf der URL) erfolgreich war und der Server die
gewünschte Antwort liefern konnte.

*/
