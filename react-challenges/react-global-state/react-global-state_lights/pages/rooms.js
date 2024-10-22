import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, toggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights lights={lights} toggleLight={toggleLight} />
    </>
  );
}

// Hier übergeben wir die Lichter und die Umschaltfunktion (toggleLight)

// lights und toggleLight: Diese Props werden von App übergeben und an die Lights-Komponente weitergereicht
