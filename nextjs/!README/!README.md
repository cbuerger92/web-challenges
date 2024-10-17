<!-- prettier-ignore-start -->

## Was ist Next.js?

Next.js ist ein React-Framework, das dir Bausteine zum Erstellen schneller Webanwendungen bereitstellt. Diese Bausteine bieten vorgefertigte Lösungen für die wichtigsten Konzepte, die du beim Erstellen moderner Anwendungen antreffen wirst, wie Benutzeroberfläche, Routing, Datenabruf, Infrastruktur usw.

## Vite

Vite ist ein modernes Build-Tool, das Webentwicklern dabei hilft, schnelle und effiziente Entwicklungsumgebungen zu schaffen. Es wurde entwickelt, um die Schwächen traditioneller Bundler zu beheben, insbesondere in Bezug auf die langsame Entwicklungsgeschwindigkeit bei großen Projekten.

## Bundler

Ein Bundler ist ein Tool, das verwendet wird, um den Code und die Abhängigkeiten einer Webanwendung zu sammeln und in einer einzigen Datei (oder mehreren optimierten Dateien) zu bündeln. Dies erleichtert das Laden der Anwendung im Browser und verbessert die Performance.

## Serverseitiges Rendering (Server-Side Rendering)

Serverseitiges Rendering (SSR) bedeutet, dass der Server die HTML-Seite für den Benutzer vorbereitet, bevor sie an den Browser gesendet wird. Anstatt dass der Browser eine leere Seite lädt und dann den JavaScript-Code ausführt, um die Seite zu füllen (wie bei rein clientseitigen Anwendungen), macht der Server die Arbeit und erstellt die komplette HTML-Seite.

Ablauf

Anfrage an den Server: Der Benutzer gibt eine URL ein oder klickt auf einen Link. Der Browser sendet eine Anfrage an den Server.

Rendering auf dem Server: Der Server nimmt diese Anfrage, führt den React-Code oder andere Komponenten aus und erstellt die fertige HTML-Seite mit allen Inhalten.

Fertige HTML-Seite wird gesendet: Der Server sendet dann die vollständig gerenderte HTML-Seite an den Browser des Benutzers.

Browser zeigt die Seite an: Der Benutzer sieht sofort den Inhalt der Seite, weil das HTML schon vollständig da ist.

JavaScript wird nachgeladen: Während der Benutzer die Seite sieht, wird im Hintergrund das JavaScript geladen und interaktiv gemacht (z.B. für Klicks und dynamische Funktionen).

## Probleme

Node-Module neu installieren

Manchmal kann es helfen, alle Abhängigkeiten zu löschen und neu zu installieren. Führe folgende Befehle aus:

1) rm -rf node_modules (node_modules-Ordner löschen, der alle installierten Pakete enthält)
2) npm install (alle Abhängigkeiten, die in package.json definiert sind, erneut installieren)
3) npm run dev (Entwicklungsserver von Next.js neu starten)
4) npm run lint (spezifische ESLint-Probleme identifizieren)




<!-- prettier-ignore-end -->
