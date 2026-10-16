"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Milestone } from "@/lib/data";

/**
 * Hover (or keyboard-focus) any milestone to swap the large photo frame.
 * On touch devices the milestone nearest the middle of the screen becomes active while scrolling.
 */
export default function JourneyExplorer({ items }: { items: Milestone[] }) {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }),
      { rootMargin: "-42% 0px -48% 0px" }
    );
    rows.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <main className="wrap">
      <div className="list">
        {items.map((m, i) => (
          <article
            key={i}
            data-i={i}
            ref={(el) => {
              rows.current[i] = el;
            }}
            tabIndex={0}
            className={`jrow${m.placeholder ? " px" : ""}${i === active ? " on" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <div className="yr">{m.y}<small>{m.d}</small></div>
            <span className="loc">📍 {m.l}</span>
            <h3>{m.t}</h3>
            <p>{m.p}</p>
            <ul>{m.c.map((c) => <li key={c}>{c}</li>)}</ul>
          </article>
        ))}
      </div>

      <aside className="stage" aria-live="polite">
        {items.map((m, i) => (
          <figure
            key={i}
            className={`slide${i === active ? " on" : ""}`}
            aria-hidden={i !== active}
            style={{ "--a": m.g[0], "--b": m.g[1] } as React.CSSProperties}
          >
            <div className={`art${!m.img && m.vintage ? " sep" : ""}`}>
              {m.img ? (
                <Image src={m.img} alt={m.t} fill sizes="(min-width: 860px) 45vw, 100vw" style={{ objectFit: "cover" }} />
              ) : (
                <span className="em">{m.e}</span>
              )}
            </div>
            <b className="wm">{m.y}</b>
            <figcaption>
              {!m.img && <em>[Add photo]</em>}
              {m.l} · {m.t}
            </figcaption>
          </figure>
        ))}
      </aside>
    </main>
  );
}
