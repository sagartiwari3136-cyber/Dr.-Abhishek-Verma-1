import Link from "next/link";
import HeroPortrait from "./HeroPortrait";

const rays = Array.from({ length: 11 }, (_, i) => (i + 1) * 30);

export default function Hero() {
  return (
    <div className="hero" id="home">
      <svg className="sun" viewBox="-100 -100 200 200" fill="none" stroke="#7a2e00" strokeWidth=".6" aria-hidden>
        <circle r="30" fill="#fff3d6" fillOpacity=".5" />
        <circle r="45" />
        <circle r="70" strokeDasharray="2 3" />
        <path id="petal" d="M0-30C10-50 10-70 0-95 -10-70 -10-50 0-30Z" />
        {rays.map((a) => (
          <use key={a} href="#petal" transform={`rotate(${a})`} />
        ))}
      </svg>

      <div className="hero-copy">
        <div className="tag">सेवा • संकल्प • समर्पण</div>
        <h1>
          Dr. Abhishek
          <br />
          <span>Verma</span>
        </h1>
        <p className="r">Chief National Coordinator — NDA Alliance &amp; Elections</p>
        <p className="s">
          Third generation of a family devoted to public service. Educator, philanthropist, and a strategist
          building alliances across India.
        </p>
        <div className="row">
          <a className="btn dk" href="#speeches">Watch Speeches</a>
          <Link className="btn g" href="/journey">His Journey</Link>
        </div>
      </div>

      <HeroPortrait />
    </div>
  );
}
