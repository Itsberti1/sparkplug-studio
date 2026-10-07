# Pitch deck UI kit

Recreation of the 8 frames on the `Williams` Figma page (1920×1080).

- `index.html` — full deck in `deck-stage.js` (arrow keys / thumbnails).
- `Interactive Deck.html` — presenter version: staggered build-ins, pointer parallax on the W mark / photos, lap-style progress HUD, Journey steps revealed one per → press, voice prompts that answer as the race engineer (→ or click; answers are placeholder copy in `ix-slides-b.jsx` → `IX_PROMPTS`), live livestream mock (chat, floating reactions — click the stream for a burst — ticking viewers). Files: `ix-core.jsx`, `ix-slides-a.jsx`, `ix-slides-b.jsx`.
- `SlidesA.jsx` — CoverSlide (Frame 2), OverviewSlide (Frame 3), JourneySlide (Frame 16).
- `SlidesB.jsx` — PromptsSlide (Frame 18), LivestreamSlide (Frame 79, live viewer count ticks), VipSlide (Frame 80), DemoSlide (Frame 81), WhyUsSlide (Frame 82).
- `slides/*.html` — one card per slide type. Set `window.WR_ASSETS` to the assets path for other page depths.

Approximations (positions not recoverable from the file): StepCard / arrow positions on Journey, the right-hand photo on Overview, and emoji reaction positions on Livestream were placed from the Figma render. The livestream's bottom comment bar is not in the frame data and is omitted.
