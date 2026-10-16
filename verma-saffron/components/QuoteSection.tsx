import Reveal from "./Reveal";
import { quote } from "@/lib/data";

export default function QuoteSection() {
  const hasQuote = quote.text.trim().length > 0;
  return (
    <section className="qt" id="quote">
      <Reveal>
        <span className="big" aria-hidden>“</span>
        <blockquote>
          {hasQuote ? quote.text : "[Add Dr. Verma's own words here — one powerful line on service]"}
        </blockquote>
        <cite>
          — {quote.cite}
          <span>{quote.role}</span>
        </cite>
        {!hasQuote && (
          <div className="note">Placeholder: insert a real, verified quote from his speeches or press conference.</div>
        )}
      </Reveal>
    </section>
  );
}
