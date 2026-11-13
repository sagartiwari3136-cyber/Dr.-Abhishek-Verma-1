import Link from "next/link";
import HeroPortrait from "./HeroPortrait";

const rays = Array.from({ length: 11 }, (_, i) => (i + 1) * 30);

export default function Hero() {
  return (
    <div className="hero" id="home">

      <div className="hero-logo">
        <img
          src="https://ik.imagekit.io/2bpcmyrlg/IMG_0475.PNG"
          alt="Dr. Abhishek Verma Logo"
        />
      </div>

      <div className="hero-icons">
        <img style={{width:"270px", height:"220px", position:"absolute", top:"20px", left:"10px"}}
          src="https://ik.imagekit.io/2bpcmyrlg/0e69f3212685575.Y3JvcCwxODAwLDE0MDcsMCwxODI-removebg-preview.png"
          alt="Dr. Abhishek Verma Logo"
        />
        <img style={{width:"140px", height:"135px",  position:"absolute", top:"105px", left:"220px" }}
          src="https://ik.imagekit.io/2bpcmyrlg/anand-dighe28-removebg-preview.png"
          alt="Dr. Abhishek Verma Logo"
        />
      </div>

      <img
        className="sun"
        src="https://ik.imagekit.io/2bpcmyrlg/stunning-gradient-mandala-background-graphic-design_563959-909%20copy.png"
        alt=""
        aria-hidden="true"
      />


      <div className="hero-copy">
        <div className="tag">सेवा • संकल्प • समर्पण</div>
        <h1 >
          Dr. Abhishek <span>Verma</span>
          <br />
          
        </h1>
        <p className="lavishly-yours-regular">Chief National Coordinator Shivsena NDA Alliance &amp; Elections</p>
        <p className="s">
          Third generation of a family devoted to public service. Educator, philanthropist, and a strategist
          building alliances across India.
        </p>
        <div className="row">
          <a className="btn dk" href="#speeches">Watch Speeches</a>
          <Link className="btn g" href="/journey">His Journey</Link>
        </div>
      </div>

      < HeroPortrait />
    </div>
  );
}
