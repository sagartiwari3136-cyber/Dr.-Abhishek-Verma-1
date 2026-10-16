import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sfoot" id="contact">
      <div className="g">
        <div>
          <h4>DR. ABHISHEK VERMA</h4>
          <p>The Private Office of Verma Family</p>
          <p>[Add office address &amp; email]</p>
        </div>
        <div>
          <h4>EXPLORE</h4>
          <Link href="/#about">About</Link>
          <Link href="/#speeches">Speeches</Link>
          <Link href="/journey">The Journey</Link>
          <Link href="/#gallery">Gallery</Link>
        </div>
        <div>
          <h4>FOLLOW</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
      <p className="legal">© 2026 The Verma Family. Sample content is marked as placeholder.</p>
    </footer>
  );
}
