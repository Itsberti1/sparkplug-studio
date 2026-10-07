# Williams Racing — AI Paddock Experience · Design System

A dark, high-energy presentation system for a **Williams Racing (F1) AI-powered guest experience**: smart glasses worn by VIP guests, sponsors and creators during paddock and pit-lane walks, with a "synthetic race engineer" you talk to ("Hey Williams, …"), live POV streaming, and automated highlight recaps.

The only product surface in the source is a **1920×1080 pitch deck** (8 frames). There is no app/web codebase; in-product UI appears only as mock overlays inside slides (livestream chrome, liquid-glass voice prompts).

## Sources
- **Figma:** `Williams.fig` (attached, mounted read-only). Pages: `Williams` (8 slide frames, node ids 1223:307 / 310 / 318 / 340 / 348 / 405 / 409 / 412), `page` (empty), `High-Quality-Resources-for-UI-Designers` (a third-party Pixsellz promo frame — treated as demo content and **not** imported, except the `bolt` / `eco` glyphs it hosts).
- **Uploads:** `uploads/Williams-F1-Team-Logo-New.png` (blue lockup), `uploads/Screenshot-2025-11-03-…png` (white lockup on electric blue), `uploads/skysports-williams-f1-2026_…jpg` (2026 livery render).
- **Brief:** "Modern, sleek, dark with electric and high energy subtle assets, racing — Williams Racing style. Modern gradients."

## Index
- `styles.css` — global entry (imports only) → `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/effects.css`, `tokens/figma/fig-tokens.css` (Figma Variables, light + dark modes), `tokens/figma/fig-typography.css` (empty — file defines no text styles).
- `components/` — React primitives (see list below), each with `.d.ts`, `.prompt.md`, and a directory card.
- `ui_kits/pitch-deck/` — the 8-slide deck recreated (`index.html` uses `deck-stage.js`); `Interactive Deck.html` is the presenter version with build-ins, step-throughs and live mocks; per-slide cards in `ui_kits/pitch-deck/slides/`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/logo/` — `williams-wordmark-white.png` (default — "Williams" only, F1 TEAM cropped off), `williams-logo-white.png` (full lockup, cropped from the Figma bitmap), `williams-logo-blue.png`, `williams-logo-on-blue.png` (uploads).
- `assets/brand/` — `w-mark-blue.png` (oversized W graphic), `speed-streaks.png` (red/white/blue motion trail).
- `assets/photos/` — all Figma photography + the 2026 car render.
- `assets/svg/` — `flow-arrow.svg`, `views-eye.svg`, `verified-star.svg`, `change-camera.svg` (copied from Figma).
- `SKILL.md` — Agent Skill manifest.

## Components
From the Figma inventory (1 component set + 5 standalone):
- **Icons** (`components/icons/Icons.jsx`) — Figma set "Icons", 74 variants: Name (22) × State (default/selected/unselected) × Dark (no/yes).
- **Icon** (`components/icons/Icon.jsx`) — raw renderer over `icon-data.js`; carries the standalone **24 / Picture**, **Mic**, **Video**, **bolt**, **eco** glyphs (`Picture24`, `Mic`, `Video`, `Bolt`, `Eco`).

### Intentional additions
Confirmed intentional — recurring slide patterns with no Figma component, extracted verbatim from frames so decks can be rebuilt consistently: WilliamsLogo, WMark, LiveBadge, ViewerCount, StreamerHandle, CommentRow, GlassPrompt, GlassVoiceButton, StepCard, PanelCard, Icons (named after the Figma set; wraps Icon).
- **WilliamsLogo**, **WMark** (`components/brand/`) — the real bitmap marks; saves repeating crop math.
- **LiveBadge**, **ViewerCount**, **StreamerHandle**, **CommentRow** (`components/broadcast/`) — livestream overlay from Frame 79.
- **GlassPrompt**, **GlassVoiceButton** (`components/glass/`) — liquid-glass voice bubble from Frame 18.
- **StepCard**, **PanelCard** (`components/cards/`) — journey photo step (Frame 16) and "Why us" panel (Frame 82).

## CONTENT FUNDAMENTALS
- **Voice:** confident B2B pitch, written by the agency to Williams. "We" = the agency ("We design and build…", "We manage every aspect on site"); "you/your" = the guest ("your own synthetic race engineer", "your every move"). Williams is referred to in third person.
- **Casing:** Title Case for slide titles ("The Ultimate VIP Sponsor Experience", "POV UGC & Livestream by Creators", "30 Minute Guest Demo"); sentence case for body and captions. Short display words stay plain ("Why us" — no punctuation).
- **Structure:** bold lead-in + en dash + explanation for bullets ("**Immersive AI experience –** A bespoke AI powered experience…"). Captions are single sentences, no full stop.
- **Vocabulary:** paddock, pit lane, race engineer, team radio, soft tyres, pit stop, backup driver, race weekend, hospitality, sponsor, VIP guests, highlight recap. British spelling (personalised, tyres). Hyphens are often dropped in compounds ("AI powered", "first person", "LinkedIn ready").
- **Voice prompts:** always open "Hey Williams, …" and are casual fan questions ("why are you using soft tyres?", "what's the deal with Claude?").
- **Emoji:** only inside mock social UI (chat reactions 🏁🏆🏅 🏎🏎🏎 💯 😁). Never in slide copy.
- **Numbers:** spelled as digits ("30 Minute"), counts abbreviated in UI ("140K").

## VISUAL FOUNDATIONS
- **Color:** near-black navy night `rgb(10,12,20)` for every slide background; raised cards `rgb(26,28,36)`. One brand blue `#0068DF` carries the W mark and wordmark; `#0042FF` electric blue for full-bleed brand cards. The only warm colour is the broadcast LIVE gradient (magenta `#C5008D` → red `#E20037`, 125°). Text is pure white; no grey body copy on slides.
- **Type:** Space Grotesk everywhere on slides — 700 for titles (48.27/48.27) and display (73.19), 400 for lead body (37.41 with a very open 65.06 line-height) and 22–23px captions/cards. SF Pro / SF Compact only inside mocked device UI. No tracking changes, no all-caps except the LIVE badge.
- **Backgrounds:** flat night colour, with an **oversized blue W** cropped off-canvas behind content (1215×683 at 34,198) — the signature motif. Text and cards sit directly on top of it. Full-bleed photography for covers and the voice-prompt slide.
- **Gradients:** used sparingly and purposefully — LIVE badge, the white→transparent rule under the logo, radial glass fills. No big decorative gradient washes; "energy" comes from the W, the speed-streak bitmap and photography.
- **Imagery:** warm, sunlit pit-lane candids (guests in dark glasses, Williams crew in navy kit) contrasted with cool saturated-blue product shots of the glasses. Photographic, no illustration, no grain.
- **Speed streaks:** a red/white/blue motion-trail bitmap, rotated ~175° and bled off the bottom-right edge.
- **Line work:** thin (0.25–0.75px) white or 45% white connector arrows and rules; curved hand-drawn arrows link journey steps.
- **Cards:** `PanelCard` = flat `rgb(26,28,36)`, radius 19.27, soft drop `0 3.85 3.85 rgba(0,0,0,.25)`, no border. Photos = radius 18 with a similar small drop. No coloured left-borders, no outlines.
- **Glass:** "liquid glass" bubbles — radial translucent fill, 48.6px backdrop blur, triple inset white shadow for a lit rim. Only over photography. Radius 30.21. Bubbles are tilted (±7–17°) for movement.
- **Layout:** 1920×1080 fixed canvas. Text column starts at x 128–164; title → body gap 38. Logo (210 wide) either top-left of content or bottom-centre (855, ~970). Generous empty space; one idea per slide.
- **Transparency & blur:** only for glass bubbles and the 80% viewer chip. Otherwise opaque.
- **Motion:** none defined in Figma. If animating, keep it quick and linear-feeling (slides, fades ≤ 420ms, `cubic-bezier(.2,.7,.2,1)`); no bounces.
- **Hover / press:** not defined (presentation medium). For interactive derivatives: lighten to white / raise opacity on hover; no shrink.
- **Corner radii:** 30.21 (glass) · 19.27 (panels) · 18 (photos) · 6.46 (badges/chips) · 50% (avatars).

## ICONOGRAPHY
- The Figma file ships a social-app **Icons** component set (Add, Arrows, Bookmark, Burger Menu, Comment, Exit, Favorite, Grid, Home, Like, Like Heart, Mentions, Messenger, More, Notifications, Reels, Search, Share, Shop) in default / selected / unselected × light / dark, plus standalone **Picture**, **Mic**, **Video** (livestream side rail) and **bolt**, **eco** (from the Pixsellz page). All are line icons painted with `currentColor` (~1.5–2px strokes on a 24 grid), materialised to `components/icons/icon-data.js`.
- Extra one-off SVGs copied as files: `views-eye.svg`, `verified-star.svg`, `change-camera.svg`, `flow-arrow.svg`.
- Icons appear only in mocked device UI, never as decoration on slides. No icon font; no CDN set needed.
- Emoji are used only as chat content; unicode is not used as icons.

## Fonts
- **Space Grotesk** — loaded from Google Fonts (no binaries in the Figma file; this is the same family, not a substitute).
- **SF Pro Text / SF Pro / SF Compact** — Apple system fonts; not redistributable. Tokens point at them with a system fallback. Please supply licensed files if these must render off-Apple.
- Public Sans and Crimson Text appear only on the Pixsellz promo page and are not part of this system.
