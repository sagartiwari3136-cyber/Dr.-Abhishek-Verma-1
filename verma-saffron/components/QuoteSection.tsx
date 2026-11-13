import Reveal from "./Reveal";
import { quote } from "@/lib/data";

export default function QuoteSection() {
  const hasQuote =
    quote.english.trim().length > 0 &&
    quote.hindi.trim().length > 0;

  return (
    <section className="qt" id="quote">
      <Reveal>
        <span className="big" aria-hidden="true">“</span>

        {hasQuote ? (
          <>
            <blockquote className="quote-hindi" lang="hi">
              {quote.hindi}
            </blockquote>


            <blockquote className="quote-english" style={{
              marginTop: "28px"
            }} >
              {quote.english}
            </blockquote>


          </>
        ) : (
          <blockquote>
            [Add Dr. Verma's own words here]
          </blockquote>
        )}

        <cite>
          — {quote.cite}
          <span>{quote.role}</span>
        </cite>

        {!hasQuote && (
          <div className="note">
            Placeholder: insert a real, verified quote from his speeches or press conference.
          </div>
        )}
      </Reveal>
    </section >
  );
}