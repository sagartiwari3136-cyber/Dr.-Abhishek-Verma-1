import { marquee } from "@/lib/data";

export default function Marquee() {
  const line = marquee.join(" • ") + " • ";
  return (
    <div className="mq" aria-hidden>
      <div>{line.repeat(6)}</div>
    </div>
  );
}
