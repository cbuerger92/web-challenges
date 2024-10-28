## Node.js

    Node.js ist eine Laufzeitumgebung für JavaScript. Sie ermöglicht es uns, JavaScript außerhalb des Browsers auszuführen. Node.js hat einige Unterschiede zum Browser. Zum Beispiel gibt es in Node.js kein DOM. Dafür stellt Node.js einige APIs bereit, die im Browser nicht verfügbar sind, wie etwa eine API zum Zugriff auf das Dateisystem.

## Ein Node-Programm ausführen

    Um ein Node-Programm auszuführen, musst du den node-Befehl verwenden. Der node-Befehl benötigt den Pfad zu einer JavaScript-Datei als Argument. Der folgende node-Befehl führt die JavaScript-Datei index.js im Projekt-Root aus: node index.js.

## Frontend / Backend

Frontend (Client-Seite)

    Was du siehst und interagierst: Alles, was im Browser läuft und sichtbar ist – HTML, CSS, JavaScript. Formulare, Buttons, Texteingaben und alles, was der Benutzer in der Oberfläche sieht und anklicken kann, gehört zum Frontend.

    Daten sammeln und senden: Wenn du ein Formular in einer Next.js-Seite erstellst, in dem der Benutzer Informationen eingibt (z. B. Name, E-Mail), wird das alles im Frontend gehandhabt. Die Daten werden lokal auf der Seite gesammelt.

    Daten senden: Um diese gesammelten Daten zu speichern oder weiterzuverarbeiten, sendet dein Frontend diese per API oder HTTP-Anfrage (z. B. fetch) an ein Backend. Hier agiert das Frontend nur als „Absender“ der Daten.

Backend (Server-Seite)

    Was du nicht siehst: Das Backend ist der Teil der Anwendung, der auf einem Server läuft und nicht direkt im Browser sichtbar ist. Es verarbeitet Daten, führt Berechnungen durch, speichert Informationen in Datenbanken und liefert Inhalte auf Anfrage an das Frontend.

    Daten empfangen und speichern: Wenn dein Frontend (z. B. über ein Formular) Daten an den Server sendet, kümmert sich das Backend um das Speichern dieser Daten in einer Datenbank oder das Durchführen einer bestimmten Aktion, wie das Versenden einer E-Mail oder das Verarbeiten von Bestellungen.

    Antworten senden: Das Backend sendet dann die verarbeiteten Daten oder das Ergebnis zurück an das Frontend, welches diese Daten darstellen oder weiterverarbeiten kann.

Grenzbereich: API-Calls und Datenfluss

    Was du beim Erstellen von Formularen und dem Umgang mit Daten in Next.js machst, ist zunächst mal Frontend-Arbeit. Du sammelst Daten von einem Benutzer (zum Beispiel durch ein Formular) und entscheidest, was mit diesen Daten passieren soll.

    Wenn du Daten an eine API schickst (zum Beispiel, um sie in einer Datenbank zu speichern oder um Informationen abzurufen), interagierst du mit dem Backend. Die API ist die Brücke zwischen Frontend und Backend.
    Datenfluss zwischen Seiten: Wenn du in Next.js Informationen von einer Seite an eine andere weitergibst, passiert das oft innerhalb des Frontends (z. B. durch Router-Parameter oder Client-seitigen State-Management).

## createServer Methode

Was ist createServer?

    Die Methode createServer wird verwendet, um einen HTTP-Server in Node.js zu erstellen. Sie ist Teil des http Moduls, das grundlegende Funktionen für die Erstellung von HTTP-Servern und -Clients bietet.

Wie funktioniert createServer?

    Wenn du createServer aufrufst, gibst du eine Callback-Funktion an, die zwei Parameter akzeptiert: request und response.

    request: Dieses Objekt enthält Informationen über die eingehende HTTP-Anfrage, wie z. B. die URL, HTTP-Methode (GET, POST usw.) und Header.

    response: Mit diesem Objekt kannst du die Antwort an den Client (z. B. den Browser) zurücksenden. Du kannst den Statuscode und die Antwortdaten setzen.

## HTTP-Server

    Ein HTTP-Server ist eine Software oder Hardware, die HTTP-Anfragen von Clients (z. B. Webbrowsern) empfängt und darauf antwortet.

    HTTP (Hypertext Transfer Protocol) ist ein Protokoll, das für die Übertragung von Daten über das Internet verwendet wird. Es ermöglicht die Kommunikation zwischen Clients und Servern.

    Funktion:

    Ein HTTP-Server empfängt Anfragen von Clients, die typischerweise über URLs (Uniform Resource Locators) gesendet werden. Die Anfragen können verschiedene Methoden wie GET, POST, PUT, DELETE usw. verwenden.

    Der Server verarbeitet diese Anfragen und sendet die entsprechenden Antworten zurück. Dies kann HTML-Seiten, JSON-Daten, Bilder oder andere Inhalte umfassen.

    Antworten:

    Die Antworten des Servers bestehen aus einem Statuscode (z. B. 200 OK, 404 Not Found, 500 Internal Server Error) und dem Inhalt (z. B. HTML, JSON, Bilder).

    Der Statuscode informiert den Client über den Erfolg oder Fehler der Anfrage.
