import Reveal from "./Reveal";
import Photo from "./Photo";
import { gallery } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="alt" id="gallery">

      <Reveal className="lab">
        04 — Gallery
      </Reveal>

      <Reveal>
        <h2>Moments that matter.</h2>
      </Reveal>

      <Reveal className="gal">
        {gallery.map((g) => (
          <Photo
            key={g.caption}
            src={g.img}
            caption={g.caption}
            className={g.className}
          />
        ))}
      </Reveal>

    </section>
  );
}