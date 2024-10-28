import { server } from "./server.js";

// Port festlegen und den Server starten
const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`); // Konsole informiert, dass der Server läuft
});

/*

Wir importieren den Server aus der server.js Datei

Der Server wird auf Port 8000 gestartet, und in der Konsole erscheint
die Meldung, dass der Server läuft, sobald listen() erfolgreich ist.

*/
