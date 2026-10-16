import Reveal from "./Reveal";
import { honours } from "@/lib/data";

export default function Honours() {
  return (
    <section id="honours">
      <Reveal className="lab">05 — Honours</Reveal>
      <Reveal><h2>Recognised at home and abroad.</h2></Reveal>
      <div className="hon">
        {honours.map((h) => (
          <Reveal key={h.title} className="c">
            <small>{h.date}</small>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
