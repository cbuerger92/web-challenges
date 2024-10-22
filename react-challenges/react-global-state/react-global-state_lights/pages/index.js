import Link from "../components/Link";

export default function HomePage({ lightsOnCount }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnCount} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}

// lightsOnCount: Diese Prop zeigt die Anzahl der eingeschalteten Lichter an,
// die von der App-Komponente übergeben wird.
