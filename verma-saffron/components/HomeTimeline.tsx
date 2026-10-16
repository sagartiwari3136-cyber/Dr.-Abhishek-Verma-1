import Link from "next/link";
import Reveal from "./Reveal";
import { homeTimeline } from "@/lib/data";

export default function HomeTimeline() {
  return (
    <section id="journey">
      <Reveal className="lab">03 — Journey</Reveal>
      <Reveal>
        <h2>A record kept in dates.</h2>
      </Reveal>

      <Reveal className="tl">
        {homeTimeline.map((t) => (
          <div key={t.title}>
            <b>{t.year}</b>
            <h4>
              {t.title}
              {"placeholder" in t && t.placeholder === true ? (
  <span className="pl">PLACEHOLDER</span>
) : null}
            </h4>
            <p>{t.text}</p>
          </div>
        ))}
      </Reveal>

      <Link
        className="btn"
        style={{ marginTop: 34 }}
        href="/journey"
      >
        Explore the full visual journey →
      </Link>
    </section>
  );
}