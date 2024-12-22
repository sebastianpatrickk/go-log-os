import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="container flex h-16 items-center">
      <div className="flex w-full items-center justify-between px-3">
        <Link href="/">Go Log OS</Link>

        <Navigation />
      </div>
    </header>
  );
}
