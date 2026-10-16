// import Reveal from "./Reveal";
// import Photo from "./Photo";
// import Image from "next/image";
// import { aboutImages } from "@/lib/data";

// export default function About() {
//   return (
//     <section id="about">
//       <Reveal className="lab">01 — About</Reveal>
//       <Reveal><h2>Rooted in legacy. Driven by service.</h2></Reveal>
//       <div className="two">
//         <Reveal>
//           <p>
//             <b>Abhishek Verma</b> was born on February 23, 1968, in New Delhi to Shrikant Verma and Veena Verma. He
//             graduated from <b>Hindu College, Delhi University</b>, earned a Master&apos;s Diploma from{" "}
//             <b>Georgetown University</b>, and received a Doctorate of Philosophy from <b>Maryland State University</b>{" "}
//             in April 2024.
//           </p>
//           <p>
//             On <b>January 30, 2025</b>, Shiv Sena chief and Maharashtra Deputy CM Eknath Shinde appointed him{" "}
//             <b>Chief National Coordinator for the NDA Alliance and Elections</b>, continuing the footsteps of his
//             parents and forefathers.
//           </p>
//           <p>
//             A philanthropist and Chairman of The Private Office of Verma Family, he oversees the family&apos;s
//             investments and global philanthropic work.
//           </p>
//           <div className="note">Sample copy beyond the first two paragraphs should be replaced with verified details.</div>
//         </Reveal>


        
//         <Reveal className="about-imgs">
//           <Photo {...aboutImages[0]} style={{ minHeight: 260 }} />
//           <Photo {...aboutImages[1]} style={{ minHeight: 260, marginTop: 40 }} />
//           <Photo {...aboutImages[2]} style={{ gridColumn: "span 2", minHeight: 200 }} />
//         </Reveal>
        
//       </div>
//     </section>
//   );
// }








import Reveal from "./Reveal";
import Image from "next/image";
import { aboutImages } from "@/lib/data";

export default function About() {
  return (
    <section id="about">
      <Reveal className="lab">01 — About</Reveal>

      <Reveal>
        <h2>Rooted in legacy. Driven by service.</h2>
      </Reveal>

      <div className="two">
        <Reveal>
          <p>
            <b>Abhishek Verma</b> was born on February 23, 1968,
            in New Delhi to Shrikant Verma and Veena Verma. He
            graduated from <b>Hindu College, Delhi University</b>,
            earned a Master&apos;s Diploma from{" "}
            <b>Georgetown University</b>, and received a Doctorate
            of Philosophy from <b>Maryland State University</b>{" "}
            in April 2024.
          </p>

          <p>
            On <b>January 30, 2025</b>, Shiv Sena chief and
            Maharashtra Deputy CM Eknath Shinde appointed him{" "}
            <b>
              Chief National Coordinator for the NDA Alliance
              and Elections
            </b>.
          </p>

          <p>
            A philanthropist and Chairman of The Private Office
            of Verma Family, he oversees the family&apos;s
            investments and philanthropic work.
          </p>

          
        </Reveal>

        <Reveal className="about-imgs">
          {aboutImages.map((photo, index) => (
            <figure
              key={photo.caption}
              style={{
                position: "relative",
                width: "100%",
                height: index === 2 ? 220 : 280,
                margin: 0,
                marginTop: index === 1 ? 40 : 0,
                gridColumn: index === 2 ? "span 2" : "span 1",
                overflow: "hidden",
                background: "#f3e6d3",
              }}
            >
              
{photo.img && (
  <Image
    src={photo.img}
    alt={photo.caption}
    fill
    unoptimized
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{
      objectFit: "cover",
      objectPosition: "center",
    }}
  />
)}


              <figcaption
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "30px 14px 12px",
                  boxSizing: "border-box",
                  color: "#fff",
                  fontSize: 14,
                  background:
                    "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  zIndex: 2,
                }}
              >
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
