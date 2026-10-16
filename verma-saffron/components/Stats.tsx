import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label}><b>{s.num}</b>{s.label}</div>
      ))}
    </div>
  );
}
