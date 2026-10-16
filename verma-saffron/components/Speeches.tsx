import Reveal from "./Reveal";
import Photo from "./Photo";
import { featuredSpeech, speeches } from "@/lib/data";

export default function Speeches() {
  const f = featuredSpeech;
  return (
    <section className="sp" id="speeches">
      <Reveal className="lab">02 — Speeches</Reveal>
      <Reveal><h2>In his own words.</h2></Reveal>
      <div className="spg">
        <Reveal className="feat">
          <Photo src={f.img} caption={`${f.title} · ${f.meta}`}>
            {f.href ? (
              <a className="play" href={f.href} target="_blank" rel="noopener noreferrer" aria-label={`Play: ${f.title}`}>▶</a>
            ) : (
              <span className="play" aria-hidden>▶</span>
            )}
          </Photo>
        </Reveal>
        <Reveal className="sl">
          {speeches.map((s) => {
            const body = (
              <>
                <i>▶</i>
                <div><h4>{s.title}</h4><small>{s.meta}</small></div>
              </>
            );
            return s.href ? (
              <a key={s.title} className="sc" href={s.href} target="_blank" rel="noopener noreferrer">{body}</a>
            ) : (
              <div key={s.title} className="sc">{body}</div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
