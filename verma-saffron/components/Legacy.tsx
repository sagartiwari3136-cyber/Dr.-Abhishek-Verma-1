import Reveal from "./Reveal";
import { legacy, philanthropy } from "@/lib/data";

export default function Legacy() {
  return (
    <section className="alt" id="legacy">
      <Reveal className="lab">06 — Legacy &amp; SKV Trust</Reveal>
      <Reveal><h2>Three generations. One mission.</h2></Reveal>

      <Reveal className="tree">
        <div className="nd"><small>FOREFATHERS</small><h3>{legacy.forefathers.title}</h3><p>{legacy.forefathers.note}</p></div>
        <i className="vl" />
        <div className="nd"><small>PARENTS</small><h3>{legacy.parents.title}</h3><p>{legacy.parents.note}</p></div>
        <i className="vl" />
        <div className="nd now"><small>TODAY</small><h3>{legacy.today.title}</h3><p>{legacy.today.note}</p></div>
        <div className="br">
          {legacy.next.map((n, i) => (
            <div key={i} className="nd gh"><small>NEXT GENERATION</small><h3>{n}</h3></div>
          ))}
        </div>
      </Reveal>

      <div className="hon" style={{ marginTop: 40 }}>
        {philanthropy.map((p) => (
          <Reveal key={p.title} className="c">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
