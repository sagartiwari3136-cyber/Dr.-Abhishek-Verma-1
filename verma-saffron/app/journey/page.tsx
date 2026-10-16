import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import JourneyExplorer from "@/components/JourneyExplorer";
import { journey } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Journey — Dr. Abhishek Verma",
  description: "From New Delhi to the national stage: the milestones in Dr. Abhishek Verma's life and public service.",
};

export default function JourneyPage() {
  return (
    <>
      <Header variant="journey" />
      <div className="jhero">
        <div className="tg">1968 → 2026</div>
        <h1>The<br /><span>Journey</span></h1>
        <p>Hover over any year to step into that moment — the place, the people and the story behind each milestone.</p>
      </div>
      <JourneyExplorer items={journey} />
      <footer className="jfoot">
        <Link className="btn" href="/">← Back to Home</Link>
        <p>Photos are placeholders until real archive images are added. Items marked PLACEHOLDER need verified details.</p>
      </footer>
    </>
  );
}
