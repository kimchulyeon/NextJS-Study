import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello NextJS123</h1>
      <Link href={"/search"}>Move To Search</Link>
    </div>
  );
}
