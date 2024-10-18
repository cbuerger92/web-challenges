import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings Volumes</h1>
      <p>
        <Link href="/volumes">Zu den Volumes</Link>
      </p>
    </div>
  );
}
