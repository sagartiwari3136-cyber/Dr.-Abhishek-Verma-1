# Dr. Abhishek Verma — Saffron Site (Next.js)

Next.js 14 (App Router) + TypeScript. Plain CSS (no Tailwind), `next/font` for Anton + Mukta (with Devanagari).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

- `/` — home: hero, about, speeches, short timeline, gallery, honours, legacy tree, closing quote
- `/journey` — interactive journey: hover/scroll a milestone to swap the large photo

## Everything editable is in `lib/data.ts`

- **Photos:** put files in `public/images/` and set `img: "/images/your-file.jpg"` on any item
  (hero portrait, about/gallery images, speech thumbnail, each journey milestone).
  With no `img`, a saffron placeholder frame shows instead.
- **Videos:** set `href` on `featuredSpeech` / any `speeches` item to a YouTube/Vimeo link
  to make the play button live.
- **Quote:** fill `quote.text` with a real, verified line from his speeches. Left empty, the placeholder shows.
- Anything marked `[Sample]` / `[Add ...]` is placeholder copy, not a verified fact.

## Structure

```
app/            layout, home page, /journey page, globals.css (design tokens + styles)
components/     one file per section; JourneyExplorer + HeroPortrait + Reveal are client components
lib/data.ts     all content
```
