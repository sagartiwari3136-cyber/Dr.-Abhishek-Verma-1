import Link from "next/link";
import ScrollProgress from "./ScrollProgress";
import { navLinks } from "@/lib/data";

export default function Header({ variant = "home" }: { variant?: "home" | "journey" }) {
  return (
    <header className="site-header">
      <Link href="/" className="brand">DR. ABHISHEK VERMA</Link>
      {variant === "home" ? (
        <nav>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link className="cta" href="/#contact">Connect</Link>
        </nav>
      ) : (
        <>
          <Link className="btn" href="/">← Home</Link>
          <ScrollProgress />
        </>
      )}
    </header>
  );
}
