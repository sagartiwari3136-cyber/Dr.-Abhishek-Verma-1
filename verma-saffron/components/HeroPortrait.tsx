"use client";

import { useRef } from "react";
import Image from "next/image";
import { hero } from "@/lib/data";

export default function HeroPortrait() {
  const arch = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = arch.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };
  const onLeave = () => {
    if (arch.current) arch.current.style.transform = "none";
  };

  return (
    <div className="port" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="arch" ref={arch}>
        {hero.portrait ? (
          
<Image
  src={hero.portrait}
  alt="Dr. Abhishek Verma"
  fill
  priority
  sizes="(max-width: 768px) 90vw, 380px"
  quality={100}
  unoptimized
  style={{
    objectFit: "cover",
    objectPosition: "center top",
  }}
/>

        ) : (
          <>Official portrait<br />[Add high-resolution photo]</>
        )}
      </div>
      <div className="badge"><b>2025</b>Appointed Chief National Coordinator, NDA</div>
    </div>
  );
}
