import Image from "next/image";
import Counter from "../components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Counter />
      <Link href="/contact">Contact</Link>
    </div>
  );
}
