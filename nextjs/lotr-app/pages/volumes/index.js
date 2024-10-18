import Link from "next/link";

export default function Volumes() {
  return (
    <div>
      <h1>Volumes</h1>
      <Link href="/volumes/the-fellowship-of-the-ring">
        The Fellowship of the Ring
      </Link>
      <br />
      <Link href="/volumes/the-two-towers">The Two Towers</Link>
      <br />
      <Link href="/volumes/the-return-of-the-king">The Return of the King</Link>
    </div>
  );
}
