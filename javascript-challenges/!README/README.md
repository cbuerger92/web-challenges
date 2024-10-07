# JavaScript

### querySelector

IDs

> const elementById = document.querySelector("#myElement");

Klassen

> const elementByClass = document.querySelector(".myClass");

HTML-Attribut / Attributselektor

> const elements = document.querySelector('[data-js="CSS-Selector"]');

"querySelectorAll" für alle Elemente

## addEventListener

uppercaseButton.addEventListener("click", () => {
input.value = input.value.toUpperCase();
});

## Logische Operatoren

Logische Operatoren kombinieren bis zu zwei Boolesche Werte zu einem neuen Booleschen Wert.

!A >> not: kehrt einen wahren Wert in einen falschen um und umgekehrt.

> const A = true;
> console.log(!A); // Ausgabe: false (weil A true ist, und !A das Gegenteil ist)

A || B >> or: ist wahr, wenn entweder A oder B wahr ist.

> const A = true;
> console.log(!A); // Ausgabe: false (weil A true ist, und !A das Gegenteil ist)

A && B >> and: ist wahr, wenn sowohl A als auch B wahr ist.

> const A = false;
> const B = false;
> console.log(A || B); // Ausgabe: false (weil beide false sind)

## Ternary Operator

condition ? expressionIfTrue : expressionIfFalse;

> const age = 18;
> const canDrive = age >= 18 ? "Darf Auto fahren" : "Darf nicht Auto fahren";
> console.log(canDrive); // Ausgabe: "Darf Auto fahren"

## Functions

Eine Function in JavaScript ist ein Block von Code, der eine bestimmte Aufgabe ausführt. Man kann diesen Codeblock mehrfach verwenden, indem man die Funktion aufruft, anstatt denselben Code immer wieder zu schreiben.

(Wiederverwendbarkeit / Strukturierung)

Return:

> Wird verwendet, wenn man den Wert, den die Funktion berechnet, zurückgeben möchte, damit er später verwendet werden kann.

Funktion ohne Parameter

function greet() {
console.log("Hallo, willkommen!");
}

Funktion mit Parametern

function greetUser(name) {
console.log(`Hallo, ${name}`);
}

Funktion mit return
(um einen Wert zurückzugeben, anstatt ihn nur anzuzeigen)

function addiere(a, b) {
return a + b;
}

## Arrow Functions

Kürzere Syntax: Arrow Functions erfordern weniger Schreibaufwand. Das macht den Code oft lesbarer und einfacher.

Kein eigenes this: Arrow Functions übernehmen den this-Wert aus dem umgebenden Kontext. Das ist besonders nützlich in Methoden, bei denen du sicherstellen möchtest, dass this auf das erwartete Objekt verweist.

Ideal für Callback-Funktionen: Sie werden häufig in Funktionen wie map, filter oder forEach verwendet, um prägnante und leicht verständliche Codezeilen zu erstellen.

Traditionelle Funktion:

> function add(a, b) {
> return a + b;
> }

Arrow Function:

> const add = (a, b) => a + b;

## This

Wie funktioniert this?

"this" ist ein Schlüsselwort, das auf das aktuelle Kontextobjekt verweist, in dem der Code ausgeführt wird.

Reguläre Funktionen: In regulären Funktionen (nicht in Arrow Functions) verweist this auf das Objekt, das die Funktion aufgerufen hat.

Arrow Functions: Arrow Functions haben keinen eigenen this-Wert und übernehmen this aus dem umgebenden Kontext.

## DOM (Document Object Model)

DOM: Eine baumartige Struktur, die die Elemente einer HTML-Seite darstellt. Jedes Element, Attribut und Text wird als ein Knoten im Baum behandelt.

DOM-Manipulation bedeutet, dass man die Elemente einer Webseite (wie Text, Bilder, Buttons) verändern oder erstellen kann, während die Seite angezeigt wird.

## innerHTML

"innerHTML" ist eine Eigenschaft eines DOM-Elements, die den HTML-Inhalt innerhalb dieses Elements repräsentiert.

Du kannst innerHTML verwenden, um den HTML-Inhalt eines Elements zu lesen oder zu ändern.
Wenn du innerHTML auf ein neues HTML-Snippet setzt, wird der bestehende Inhalt des Elements ersetzt. Zum Beispiel:

output.innerHTML = "<p>Dies ist ein neuer Inhalt.</p>";

Dies würde den aktuellen Inhalt des output-Elements durch den neuen Paragraphen ersetzen.

## String Literals

String Literals in JavaScript sind Zeichenfolgen, die aus Text bestehen und direkt in den Code eingebettet werden. Sie werden verwendet, um Text darzustellen.

## String concatenation

String Concatenation bedeutet das Verketten oder Zusammenfügen von zwei oder mehr Strings in JavaScript

## Template Literals

Template Literals sind eine spezielle Art von Strings in JavaScript, die mit Backticks geschrieben werden zB: const message = `Hallo, mein Name ist ${name} und ich bin ${age} Jahre alt.`;

## Dot Notation

Dot Notation ist eine einfache und häufig verwendete Methode, um auf Eigenschaften oder Methoden eines Objekts in JavaScript zuzugreifen.

## Submit Event Handler

Ein Submit Event Handler ist eine Funktion, die auf das submit-Ereignis eines Formulars reagiert (zB durch das Klicken auf einen "Absenden"-Button, wird das submit-Ereignis ausgelöst)

## (event.)preventDefault():

Diese Methode wird verwendet, um das Standardverhalten des Browsers zu verhindern. In diesem Fall bedeutet das, dass das Formular nicht tatsächlich gesendet wird und die Seite nicht neu geladen wird.

Ein Submit Event Handler ist eine nützliche Methode, um die Interaktivität und Benutzerfreundlichkeit von Formularen in Webanwendungen zu verbessern.

## event.target:

event.target ist eine Eigenschaft des event-Objekts in JavaScript, die auf das Element verweist, das das Ereignis ausgelöst hat. Mit anderen Worten, event.target gibt dir Zugriff auf das spezifische DOM-Element, auf das der Benutzer geklickt oder mit dem er interagiert hat, als das Ereignis (z. B. ein Klick, eine Eingabe oder ein Tastendruck) stattgefunden hat.

event.target: Das event-Objekt enthält Informationen über das Ereignis, das eingetreten ist. In diesem Fall ist es das Submit-Event des Formulars. event.target verweist auf das DOM-Element, das das Ereignis ausgelöst hat, also auf das Formular selbst.

event.target.elements >> ist eine Sammlung (HTMLCollection) aller Formularelemente (wie <input>, <select>, <textarea>) innerhalb des event.target (in der Regel eines <form>-Elements).

## Childs / Hierarchie im DOM

Parent Node: Das übergeordnete Element, zu dem das Child gehört.

Child Nodes: Die Nodes, die direkt unter einem bestimmten Node stehen.

Sibling Nodes: Nodes, die dieselben Eltern haben.

HTML

<div id="parent">
  <p>Kind 1</p>
  <p>Kind 2</p>
</div>

JavaScript

const parentElement = document.getElementById('parent');

console.log(parentElement.childNodes); // Gibt alle Kindelemente zurück

console.log(parentElement.children); // Gibt nur die <p> Kindelemente zurück

console.log(parentElement.firstChild); // Gibt das erste Kind zurück (Text Node vor dem ersten <p>)

console.log(parentElement.firstElementChild); // Gibt das erste <p> zurück

## Nodes

Nodes sind fundamentale Objekte im DOM, die HTML-Dokumente strukturieren und ermöglichen es JavaScript, mit dem Inhalt und der Struktur von Webseiten zu interagieren.

Element Nodes: Diese repräsentieren HTML-Elemente wie <div>, <p>, <a> usw.

Text Nodes: Diese repräsentieren den Textinhalt innerhalb von Elementen. Zum Beispiel ist der Text "Hallo Welt" in <p>Hallo Welt</p> ein Text Node.

Comment Nodes: Diese repräsentieren Kommentare im HTML-Dokument, wie <!-- Das ist ein Kommentar -->.

Document Nodes: Diese repräsentieren das gesamte Dokument selbst (das document-Objekt).

## .appendChild

appendChild() fügt ein einzelnes Kind-Element zu einem übergeordneten Element hinzu.

Es kann nur ein Element gleichzeitig hinzufügen (zB z. B. ein Bild, einen Button oder einen Textabsatz)

Es akzeptiert nur Node-Objekte (d. h. echte HTML-Elemente, keine Textstrings).

const parent = document.createElement('div');
const child = document.createElement('p');

parent.appendChild(child); // Fügt das <p> Element in das <div> ein

## .append

append() ist flexibler und kann mehrere Elemente auf einmal zu einem übergeordneten Element hinzufügen.

Es akzeptiert nicht nur Node-Objekte (also HTML-Elemente), sondern auch Textstrings.

const parent = document.createElement('div');
const child1 = document.createElement('p');
const child2 = document.createElement('span');

parent.append(child1, child2, 'Some text'); // Fügt mehrere Elemente und Text hinzu

## .classList

Wird verwendet, um die Klassen eines HTML-Elements zu bearbeiten. Klassen beeinflussen das Styling und manchmal auch das Verhalten eines Elements in deiner Seite durch CSS und JavaScript.

Verwende .classList.add() oder .classList.remove(), um einem Element neue CSS-Klassen hinzuzufügen oder zu entfernen.

## loops

JavaScript-Loops sind eine Möglichkeit, Codeblöcke wiederholt auszuführen, ohne denselben Code immer wieder manuell schreiben zu müssen.

## for-loop

Der for-Loop wird verwendet, wenn du eine bekannte Anzahl von Wiederholungen hast. Er hat drei Teile:

Initialisierung: Eine Variable wird gesetzt, meist ein Zähler (let i = 0).

Bedingung: Der Loop läuft, solange diese Bedingung wahr ist (i < 10).

Inkrementierung: Nach jeder Iteration wird der Zähler erhöht (i++).

## while-loop

Der while-Loop wird verwendet, wenn du nicht genau weißt, wie oft der Code ausgeführt werden muss, aber eine Bedingung wahr bleiben soll.

## Iterable

Ein iterable ist ein Objekt, das durch seine Werte durchlaufen werden kann. In JavaScript sind alle Objekte, die die Symbol.iterator-Methode implementieren, als iterable klassifiziert.

## Iterieren

Iterieren bedeutet, durch die Elemente eines iterable Objekts nacheinander zu gehen und mit jedem Element etwas zu tun. Wenn du eine Schleife verwendest, um durch die Werte eines Arrays zu gehen oder die Zeichen eines Strings zu verarbeiten, führst du eine Iteration durch.

Ein Iterator ist ein Objekt, das die Methode next() hat, die bei jedem Aufruf das nächste Element eines iterierbaren Objekts zurückgibt.

## Symbol.iterator

Symbol.iterator ist eine eingebaute Symbol-Konstante in JavaScript, die verwendet wird, um eine Methode zu definieren, die ein Iterator-Objekt zurückgibt.

## Array

Ein Array ist eine Datenstruktur in JavaScript (und vielen anderen Programmiersprachen), die eine geordnete Sammlung von Werten speichert. Arrays ermöglichen es dir, mehrere Werte in einer einzigen Variablen zu speichern und einfach auf sie zuzugreifen.

Syntax:
Ein Array wird in JavaScript mit eckigen Klammern ([]) erstellt:
const fruits = ['Apple', 'Banana', 'Cherry'];

Methoden:

push(): Fügt ein oder mehrere Elemente am Ende des Arrays hinzu.

pop(): Entfernt das letzte Element des Arrays und gibt es zurück.

shift(): Entfernt das erste Element des Arrays und gibt es zurück.

unshift(): Fügt ein oder mehrere Elemente am Anfang des Arrays hinzu.

forEach(): Führt eine Funktion für jedes Element im Array aus.

map(): Erstellt ein neues Array mit den Ergebnissen der Anwendung einer Funktion auf jedes Element.

filter(): Erstellt ein neues Array mit allen Elementen, die einen bestimmten Test bestehen.

## callback function

Eine Callback-Funktion ist eine Funktion, die als Argument an eine andere Funktion übergeben wird und zu einem späteren Zeitpunkt ausgeführt wird. Callback-Funktionen sind ein zentrales Konzept in JavaScript, insbesondere im Zusammenhang mit asynchronem Programmieren und Ereignisbehandlung.

## Argumente

Ein Argument in JavaScript ist ein Wert, den du an eine Funktion übergibst, wenn du sie aufrufst. Die Funktion kann diesen Wert dann innerhalb ihres Codes verwenden. Argumente sind also die tatsächlichen Werte, die du der Funktion beim Aufruf gibst.
