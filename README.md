# Clearing — Local POC

A front-end POC for Clearing: a personalized AI-news site structured like a broadsheet
news portal (breaking ticker, hero, trending rail, live feed) built around the
core product idea: **content tagged and filtered by profession**, not generic news.

## What's in here
```
clearing/
├── index.html      → page structure + sample content
├── css/styles.css  → design tokens (colors, type, spacing) + layout
├── js/script.js    → ticker, live feed, and the domain-filter interaction
└── README.md
```

Open `index.html` directly in a browser — no build step needed to preview it.

## The core mechanic (this is the actual product)
Every article element has a `data-domain` attribute (`fintech`, `hr`, `marketing`,
`research`, or `all`) and a `data-relevance` score (1–5). The pills under the header
("Everyone / Fintech / HR & People / Research / Marketing") filter the whole page live —
click one and see non-relevant stories dim instead of disappear, which keeps the
"there's a wider world, but here's what matters to you" feeling instead of hiding
things outright.

This is the part worth spending real design/eng time on as you build further —
everything else on the page is a fairly standard news-portal layout.

## Design tokens (in `css/styles.css` `:root`)
- **Display type:** Fraunces (headlines only — used with restraint)
- **Body type:** Inter
- **Utility/mono type:** JetBrains Mono (ticker, timestamps, tags)
- **Colors:** off-white paper background, near-black ink, signal-blue accent,
  amber "pulse" for live/breaking, and four domain tag colors:
  teal=fintech, violet=HR, rust=marketing, navy=research

Change these in one place (`:root`) to re-theme the whole site.

## Suggested next steps for development
1. **Wire up real content.** Replace the hardcoded articles in `index.html` with
   data from a CMS or a simple JSON/Markdown content source — the DOM structure
   is already tag-driven, so a templating layer (Astro, Next.js, 11ty) drops in
   cleanly.
2. **Real images.** Placeholder gradients (`.media-placeholder`) stand in for
   photos/illustrations — swap for real assets or an AI-generated header image
   per story.
3. **Persist the domain preference.** Right now the pill filter is per-page-load;
   store the chosen domain (localStorage, or a real user account) so it's
   remembered on return visits — that's the actual "personalized for you" promise.
4. **Newsletter capture.** The "Subscribe" button is currently a no-op — this is
   the highest-leverage thing to connect first, since email is your retention
   channel, not the website itself.
5. **Add more domains** by extending the `data-domain` vocabulary and adding a
   matching `.kicker.<domain>` color in the CSS.
