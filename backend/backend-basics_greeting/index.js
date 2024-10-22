import { server } from "./server.js";

// Port festlegen und den Server starten
const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`); // Konsole informiert, dass der Server läuft
});

/*



*/
